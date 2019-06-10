// NPM Dependencies
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// UI Dependencies
import { Button, Form, Spin, Input } from 'antd';

// Util Dependencies
// import Emoji from 'utils/components/emoji';

// Local Dependencies
import { redeemGiftSignal } from '../actions';
import Emoji from 'utils/components/emoji';

class RedeemForm extends Component {
    static propTypes = {
        form: PropTypes.shape({
            getFieldDecorator: PropTypes.func.isRequired,
            validateFields: PropTypes.func.isRequired
        }).isRequired,
        redeemGift: PropTypes.func.isRequired,
        giftDetails: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
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

    componentDidUpdate = (prevProps) => {
        if (this.props.giftDetails !== prevProps.giftDetails) {
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
        // if (!_.isNumber(value)) {
        //     callback('Please enter numbers only');
        // } else {
        //     callback();
        // }
        callback();
    };

    render() {
        const { loading } = this.state;
        const { getFieldDecorator } = this.props.form;
        const { giftDetails } = this.props;

        if (loading || giftDetails.spent) {
            return (
                <div style={{ textAlign: 'center' }}>
                    {loading ?
                        <Spin tip="loading..." size="large" />
                        :
                        <p>Your gift has been redeemed! <Emoji label="confeti" symbol="🎉" /></p>
                    }
                </div>
            );
        }

        return (
            <Fragment>
                <Form onSubmit={this.handleSubmit} layout="vertical" hideRequiredMark style={{ textAlign: 'center' }}>
                    <Form.Item>
                        {getFieldDecorator('invoice', {
                            rules: [{ validator: this.validateAmount }]
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

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        redeemGift: redeemGiftSignal.request
    }, dispatch);

const WrappedRedeemForm = Form.create()(RedeemForm);

export default connect(null, mapDispatchToProps)(WrappedRedeemForm);
