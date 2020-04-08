// NPM Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QRCode from 'qrcode.react';
import bech32 from 'bech32';

// UI Dependencies
import { Card, Col, Row } from 'antd';

// Util Dependencies
import InputCopyButton from 'utils/components/input-copy-button';

// Local Dependencies
import { SERVER_URL } from 'utils/constants';
import CreateForm from '../forms/create-form';

class CreateBox extends Component {
    static propTypes = {
        toggleModal: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            activeTab: 'basic'
        };
    }

    onTabChange = (key) => {
        this.setState({ activeTab: key });
    };

    render() {
        const { activeTab } = this.state;
        const { toggleModal } = this.props;

        const lnurlpay = bech32.encode('lnurl',
            bech32.toWords(Buffer.from(`${SERVER_URL}/lnurl`)),
            1500
        );


        let tabContent = null;
        switch (activeTab) {
            case 'basic':
                tabContent = <CreateForm toggleModal={toggleModal} />;
                break;
            case 'advanced':
                tabContent = (
                    <>
                        <p><b>Advanced features with LN Gifts API:</b></p>
                        <ul style={{ textAlign: 'left' }}>
                            <li>Generate and redeem gifts programmatically</li>
                            <li>Get notified when someone redeems your gift with webhooks</li>
                            <li>Add a security code to your gifts</li>
                        </ul>
                        <p>
                            <a href="https://docs.lightning.gifts" target="_blank" rel="noopener noreferrer">
                                Go to API Docs
                            </a>
                        </p>
                    </>
                );
                break;
            case 'lnurl':
                tabContent = (
                    <>
                        <p>Scan the following code to <b>create gifts instantly right from your wallet:</b></p>
                        <a href={`lightning:${lnurlpay}`}>
                            <QRCode
                                value={lnurlpay}
                                size={128}
                                style={{ marginBottom: 12 }}
                                renderAs="svg"
                            />
                        </a>
                        <InputCopyButton text={lnurlpay} />
                    </>
                );
                break;
            default:
                break;
        }

        return (
            <Card
                className="create-box"
                style={{ width: '100%' }}
                tabList={[{ key: 'basic', tab: 'Basic' }, { key: 'advanced', tab: 'Advanced' }, { key: 'lnurl', tab: 'LNURL' }]}
                activeTabKey={activeTab}
                onTabChange={(key) => this.onTabChange(key)}
            >
                <Row type="flex" align="middle" style={{ height: '100%', minHeight: 200 }}>
                    <Col span={24} style={{ textAlign: 'center' }}>
                        {tabContent}
                    </Col>
                </Row>
            </Card>
        );
    }
}

export default CreateBox;
