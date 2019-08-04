// NPM Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QRCode from 'qrcode.react';
import { connect } from 'react-redux';

// UI Dependencies
import { Row, Col, Button, Icon, Spin } from 'antd';

// Util Dependencies
import Emoji from 'utils/components/emoji';

// Local Dependencies
import RedeemForm from '../forms/redeem-form';

class RedeemOptions extends Component {
    static propTypes = {
        giftDetails: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    };

    static defaultProps = {
        giftDetails: null
    };

    constructor(props) {
        super(props);

        this.state = {
            helpText: true
        };
    }

    toggleHelpText = () => {
        const { helpText } = this.state;

        this.setState({
            helpText: !helpText
        });
    };

    render() {
        const { giftDetails } = this.props;
        const { helpText } = this.state;

        if (giftDetails.spent === 'pending') {
            return (
                <div style={{ textAlign: 'center' }}>
                    <Spin tip="Processing gift withdrawal..." size="large" />
                </div>
            );
        }

        if (giftDetails.spent && giftDetails.spent !== 'pending') {
            return (
                <div style={{ textAlign: 'center' }}>
                    <span className="avenir darker" style={{ fontSize: 28 }}>
                        Your gift has been
                        <br />
                        redeemed!
                        <br />
                        <Emoji label="confeti" symbol="🎉" />
                    </span>
                </div>
            );
        }

        return (
            <Row type="flex" justify="center">
                <Col xs={24} sm={11}>
                    <div className="redeemPage__col redeemPage__col--left">
                        <div className="redeemPage__colContent" style={{ textAlign: 'center' }}>
                            <p><b>1.</b>  Scan or click QR code with an LNURL-compatible wallet</p>
                            <a href={`lightning:${giftDetails.lnurl}`}>
                                <QRCode
                                    value={giftDetails.lnurl}
                                    style={{ marginBottom: 14 }}
                                    size={128}
                                    renderAs="svg"
                                />
                            </a>
                        </div>
                    </div>
                </Col>
                <Col xs={24} sm={2}>
                    <Row type="flex" align="middle" justify="center" style={{ height: '100%' }}>
                        <h3 style={{ height: 30, padding: '16px 0' }}>OR</h3>
                    </Row>
                </Col>
                <Col xs={24} sm={11}>
                    <div className="redeemPage__col redeemPage__col--right">
                        <div className="redeemPage__colContent" style={{ textAlign: 'center' }}>
                            <p>
                                <b>2.</b> Create a <b>{giftDetails.amount} sat</b> Lightning invoice, and paste below <Emoji label="point-down" symbol="👇️" />
                            </p>
                            <Button
                                type="link"
                                size="small"
                                onClick={this.toggleHelpText}
                                style={{ marginBottom: 4 }}
                            >
                                <small>
                                    How do I create a Lightning invoice?
                                    &nbsp;
                                    {helpText ? <Icon type="caret-down" /> : <Icon type="caret-up" />}
                                </small>
                            </Button>
                            {!helpText &&
                                <p>
                                    <small>
                                        You can create a Lightning invoice using
                                        &nbsp;
                                        <a rel="noopener noreferrer" target="_blank" href="https://bluewallet.io/">Bluewallet</a>,
                                        &nbsp;
                                        <a rel="noopener noreferrer" target="_blank" href="https://zap.jackmallers.com/">Zap wallet</a>, or any other Lightning compatible wallets.
                                    </small>
                                </p>
                            }
                            <RedeemForm giftDetails={giftDetails} />
                        </div>
                    </div>
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state,
        redeemStatus: state.redeem.redeemStatus
    };
};

export default connect(mapStateToProps, null)(RedeemOptions);
