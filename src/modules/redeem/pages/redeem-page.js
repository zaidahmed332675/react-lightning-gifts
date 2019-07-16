// NPM Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactGA from 'react-ga';

// UI Dependencies
import { Spin, Row, Col, Button, Icon } from 'antd';

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
            loading: true,
            zeroSat: true
        };
    }

    componentDidMount = () => {
        const { match, getGiftDetails } = this.props;
        const orderId = match.params.id;

        getGiftDetails({ orderId });

        ReactGA.pageview(`/redeem/${orderId}`, null, 'Redeem Page');
    };

    componentDidUpdate = (prevProps) => {
        const { giftDetails } = this.props;

        if (giftDetails !== prevProps.giftDetails) {
            this.setState({
                loading: false
            });
        }
    };

    toggleZeroSat = () => {
        const { zeroSat } = this.state;

        this.setState({
            zeroSat: !zeroSat
        });
    };


    render() {
        const { loading, zeroSat } = this.state;
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

        const { amount } = giftDetails;

        return (
            <Row type="flex" align="middle" className="contentSection">
                <Col span={24} style={{ marginBottom: 40 }}>
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
                        <Button type="link" size="small" onClick={this.toggleZeroSat} style={{ marginBottom: 4 }}>
                            <small>
                                My wallet cannot create a 0 sat invoice
                                &nbsp;
                                {zeroSat ?
                                    <Icon type="caret-down" />
                                    :
                                    <Icon type="caret-up" />
                                }
                            </small>
                        </Button>
                        {!zeroSat &&
                            <p>
                                <small>
                                    No problem. Create a Lightning invoice for <b>{amount} sats</b> and paste below
                                </small>
                            </p>
                        }
                    </div>
                    <Row type="flex" align="middle" justify="center">
                        <Col xs={{ span: 24 }} sm={{ span: 6 }}>
                            {giftDetails.spent && giftDetails.spent !== 'pending' ?
                                <div style={{ textAlign: 'center' }}>
                                    <span className="avenir darker" style={{ fontSize: 28 }}>
                                        Your gift has been redeemed!
                                        <br />
                                        <Emoji label="confeti" symbol="🎉" />
                                    </span>
                                </div>
                                :
                                <RedeemForm giftDetails={giftDetails} />
                            }
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
