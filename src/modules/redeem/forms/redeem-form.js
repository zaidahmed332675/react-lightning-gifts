// NPM Dependencies
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

// UI Dependencies
import { Button, Form, Spin, Input } from 'antd';

// Local Dependencies
import { redeemGiftSignal, startCheckRedeemStatusSignal } from '../actions';

class RedeemForm extends Component {
    static propTypes = {
        form: PropTypes.shape({
            getFieldDecorator: PropTypes.func.isRequired,
            validateFields: PropTypes.func.isRequired
        }).isRequired,
        redeemGift: PropTypes.func.isRequired,
        giftDetails: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        redeemStatus: PropTypes.object.isRequired,
        startCheckRedeemStatus: PropTypes.func.isRequired
    };

    static defaultProps = {
        giftDetails: null
    };

    constructor(props) {
        super(props);

        this.state = {
            loading: false
        };
    }

    componentDidMount = () => {
        const { startCheckRedeemStatus, giftDetails } = this.props;

        if (giftDetails.spent === 'pending' && giftDetails.withdrawalInfo) {
            const { id } = giftDetails;
            const { withdrawalId } = giftDetails.withdrawalInfo;

            startCheckRedeemStatus({ withdrawalId, orderId: id });
        }
    };

    componentDidUpdate = (prevProps) => {
        const { giftDetails } = this.props;

        if (!_.isEqual(giftDetails, prevProps.giftDetails)) {
            this.setState({
                loading: false
            });
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {
            form, redeemGift, giftDetails
        } = this.props;
        const { orderId } = giftDetails;

        form.validateFields((err, values) => {
            if (!err) {
                const { invoice } = values;

                redeemGift({ invoice, orderId });

                this.setState({
                    loading: true
                });
            }
        });
    };

    validateInvoice = (rule, value, callback) => {
        const { amount } = this.props.giftDetails;
        const decodedAmount = _.endsWith(amount.toString(), '00') ? `${(amount / 100)}u` : amount;

        if (!_.startsWith(value, `lnbc${decodedAmount}`)) {
            callback(`Only a ${amount} sat Lightning invoice accepted`);
        } else {
            callback();
        }
    };

    render() {
        const { loading } = this.state;
        const { getFieldDecorator } = this.props.form;
        const { giftDetails, redeemStatus } = this.props;

        if (redeemStatus.error) {
            return (
                <div style={{ textAlign: 'center' }}>
                    <p>It looks like your node did not have enough inbound capacity to receive the gift</p>
                    <p>To increase your inbound capacity you can use
                        &nbsp;
                        <a rel="noopener noreferrer" target="_blank" href="https://www.bitrefill.com/buy/lightning-channel/">Bitrefill</a>
                    </p>
                    <p>If problem persists contact me@rossdyson.com with Gift ID:</p>
                    <p>{giftDetails.orderId}</p>
                </div>
            );
        }

        if (loading) {
            return (
                <div style={{ textAlign: 'center', marginTop: 16 }}>
                    <Spin tip="Processing gift withdrawal..." size="large" />
                </div>
            );
        }

        return (
            <Fragment>
                <Form
                    onSubmit={this.handleSubmit}
                    layout="vertical"
                    hideRequiredMark
                    style={{ textAlign: 'center' }}
                >
                    <Form.Item>
                        {getFieldDecorator('invoice', {
                            rules: [{ validator: this.validateInvoice }]
                        })(
                            <Input
                                style={{ width: '100%' }}
                                placeholder="lnbc..."
                                size="large"
                            />
                        )}
                    </Form.Item>
                    <Form.Item style={{ marginBottom: 0 }}>
                        <Button type="primary" size="large" style={{ width: '100%' }} htmlType="submit">
                            Receive gift
                        </Button>
                    </Form.Item>
                </Form>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state,
        redeemStatus: state.redeem.redeemStatus
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        redeemGift: redeemGiftSignal.request,
        startCheckRedeemStatus: startCheckRedeemStatusSignal.request
    }, dispatch);

const WrappedRedeemForm = Form.create()(RedeemForm);

export default connect(mapStateToProps, mapDispatchToProps)(WrappedRedeemForm);
