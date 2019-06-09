// NPM Dependencies
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// UI Dependencies
import { Card, Col, Row } from 'antd';

// Local Dependencies
import CreateForm from '../forms/create-form';

class CreateBox extends Component {
    state = {
        activeTab: 'basic'
    };

    onTabChange = (key) => {
        this.setState({ activeTab: key });
    };

    render() {
        const { activeTab } = this.state;

        return (
            <Card
                className="create-box"
                style={{ width: '100%' }}
                tabList={[{ key: 'basic', tab: 'Basic' }, { key: 'advanced', tab: 'Advanced' }]}
                activeTabKey={activeTab}
                onTabChange={key => this.onTabChange(key)}
            >
                <Row type="flex" align="middle" style={{ height: '100%', minHeight: 200 }}>
                    <Col span={24} style={{ textAlign: 'center' }}>
                        {activeTab === 'basic' ?
                            <CreateForm />
                            :
                            <p>Coming soon!</p>
                        }
                    </Col>
                </Row>
            </Card>
        );
    }
}

export default CreateBox;
