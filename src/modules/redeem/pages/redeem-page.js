// NPM Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// UI Dependencies
import { Spin, Row, Col } from 'antd';

// Util Dependencies
import Emoji from 'utils/components/emoji';

// Local Dependencies
import { getGiftDetailsSignal } from '../actions';
import RedeemForm from '../forms/redeem-form';

class RedeemPage extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        getGiftDetails: PropTypes.func.isRequired,
        giftDetails: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    };

    static defaultProps = {
        giftDetails: null
    };

    constructor(props) {
        super(props);

        this.state = {
            loading: true
        };
    }

    componentDidMount = () => {
        const { match, getGiftDetails } = this.props;
        const orderId = match.params.id;

        getGiftDetails({ orderId });
    };

    componentDidUpdate = (prevProps) => {
        const { giftDetails } = this.props;

        if (giftDetails !== prevProps.giftDetails) {
            this.setState({
                loading: false
            });
        }
    };

    render() {
        const { loading } = this.state;
        const { giftDetails } = this.props;

        if (loading || giftDetails === 'notFound') {
            return (
                <Row type="flex" align="middle" style={{ height: '100%' }}>
                    <Col span={24}>
                        <div style={{ textAlign: 'center' }}>
                            {loading ?
                                <Spin
                                    tip="loading..."
                                    size="large"
                                />
                                :
                                <p>Gift  not found</p>
                            }
                        </div>
                    </Col>
                </Row>
            );
        }

        return (
            <Row type="flex" align="middle" style={{ height: '100%' }}>
                <Col span={24}>
                    <h1 style={{ margin: '40px 0px', textAlign: 'center' }} className="avenir banner-text">
                        A gift from Satoshi,
                        <br />
                        to you
                    </h1>
                    <div style={{ marginBottom: 40, textAlign: 'center' }}>
                        <p>
                            Someone has sent you a Bitcoin gift on the Lightning Network <Emoji label="confeti" symbol="🎊️" />
                        </p>
                        <p>
                            To redeem your gift, create a 0 sat Lightning invoice using <a rel="noopener noreferrer" target="_blank" href="https://zap.jackmallers.com/">Zap wallet</a> or other
                            <br />
                            compatible Lightning wallets, and paste below <Emoji label="point-down" symbol="👇️" />
                        </p>
                    </div>
                    <Row type="flex" align="middle" justify="center" className="redeem-form">
                        <Col xs={{ span: 24 }} sm={{ span: 6 }}>
                            <RedeemForm giftDetails={giftDetails} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state,
        giftDetails: state.redeem.giftDetails
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        getGiftDetails: getGiftDetailsSignal.request
    }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(RedeemPage);
