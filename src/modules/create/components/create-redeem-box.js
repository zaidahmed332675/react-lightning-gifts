// NPM Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// UI Dependencies
import { Card } from 'antd';

// Local Dependencies
import CreateForm from '../forms/create-form';

class CreateRedeemBox extends Component {
    state = {
        activeTab: 'basic'
    };

    onTabChange = (key) => {
        this.setState({ activeTab: key });
    };

    render() {
        const { activeTab } = this.state;

        return (
            <div style={{ width: '100%' }}>
                <Card
                    style={{ width: '100%' }}
                    tabList={[{ key: 'basic', tab: 'Basic', }, { key: 'advanced', tab: 'Advanced' }]}
                    activeTabKey={activeTab}
                    onTabChange={key => this.onTabChange(key)}
                >
                    {activeTab === 'basic' ?
                        <CreateForm />
                        :
                        <p>redeem content</p>
                    }
                </Card>
            </div>
        );
    }
}

export default CreateRedeemBox;
