// NPM Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactGA from 'react-ga';
import _ from 'lodash';

// UI Dependencies
import { Spin, Row, Col } from 'antd';

// Util Dependencies
import Emoji from 'utils/components/emoji';

// Local Dependencies
import { getGiftDetailsSignal, startGiftStatusPollingSignal, stopGiftStatusPollingSignal } from '../actions';
import RedeemOptions from '../components/redeem-options';
import VerifyForm from '../forms/verify-form';

class RedeemPage extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        getGiftDetails: PropTypes.func.isRequired,
        giftDetails: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        startWatchGiftStatus: PropTypes.func.isRequired,
        stopWatchGiftStatus: PropTypes.func.isRequired
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

        ReactGA.pageview(`/redeem/${orderId}`, null, 'Redeem Page');
    };

    componentDidUpdate = (prevProps) => {
        const {
            giftDetails, match, startWatchGiftStatus, stopWatchGiftStatus
        } = this.props;
        const orderId = match.params.id;

        if (!_.isEqual(giftDetails, prevProps.giftDetails)) {
            this.setState({
                loading: false
            });
            if (giftDetails !== 'notFound' && !giftDetails.spent && !giftDetails.verifyCodeRequired) {
                startWatchGiftStatus({ orderId });
            }
        }

        if (giftDetails && giftDetails.spent === true) {
            stopWatchGiftStatus();
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
                                <p>Gift not found</p>
                            }
                        </div>
                    </Col>
                </Row>
            );
        }

        if (giftDetails.verifyCodeRequired) {
            return (
                <Row type="flex" align="middle" className="contentSection">
                    <Col xs={24} sm={{ span: 6, offset: 9 }}>
                        <div style={{ textAlign: 'center', marginBottom: 32 }}>
                            <p>
                                You have been sent a Bitcoin gift on the Lightning Network <Emoji label="confeti" symbol="🎊️" />
                            </p>
                            <p>Enter security code to access your gift:</p>
                        </div>
                        <VerifyForm orderId={giftDetails.orderId} />
                    </Col>
                </Row>
            );
        }

        return (
            <Row type="flex" align="middle" className="contentSection">
                <Col span={24} className="redeemPage">
                    <h1 style={{ marginBottom: 32, textAlign: 'center' }} className="avenir redeem-banner-text">
                        A gift from { giftDetails.senderName || 'Satoshi' },
                        <br />
                        to you
                    </h1>
                    {giftDetails.senderMessage && giftDetails.senderMessage.length &&
                        <h2 className="redeem-banner-message-text" style={{ margin: '8px auto 28px', textAlign: 'center', maxWidth: '600px' }}>
                            { giftDetails.senderMessage }
                        </h2>
                    }
                    <div style={{ marginBottom: 40 }}>
                        <div style={{ textAlign: 'center', marginBottom: 40 }}>
                            <p>
                                { giftDetails.senderName || 'Someone' } has sent you a Bitcoin gift on the Lightning Network <Emoji label="confeti" symbol="🎊️" />
                                <br />
                                To redeem your gift you have two options:
                            </p>
                        </div>
                    </div>
                    <RedeemOptions giftDetails={giftDetails} />
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
        getGiftDetails: getGiftDetailsSignal.request,
        startWatchGiftStatus: startGiftStatusPollingSignal.request,
        stopWatchGiftStatus: stopGiftStatusPollingSignal.request
    }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(RedeemPage);
