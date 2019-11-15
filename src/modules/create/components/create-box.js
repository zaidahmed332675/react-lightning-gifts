// NPM Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// UI Dependencies
import { Card, Col, Row } from 'antd';

// Local Dependencies
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

        return (
            <Card
                className="create-box"
                style={{ width: '100%' }}
                tabList={[{ key: 'basic', tab: 'Basic' }, { key: 'advanced', tab: 'Advanced' }]}
                activeTabKey={activeTab}
                onTabChange={(key) => this.onTabChange(key)}
            >
                <Row type="flex" align="middle" style={{ height: '100%', minHeight: 200 }}>
                    <Col span={24} style={{ textAlign: 'center' }}>
                        {activeTab === 'basic'
                            ? (
                                <CreateForm
                                    toggleModal={toggleModal}
                                />
                            )
                            : (
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
                            )}
                    </Col>
                </Row>
            </Card>
        );
    }
}

export default CreateBox;
