// NPM Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// UI Dependencies
import { Card } from 'antd';

// Local Dependencies
import CreateForm from '../forms/create-form';

class CreateRedeemBox extends Component {
    state = {
        activeTab: 'create'
    };

    onTabChange = (key) => {
        this.setState({ activeTab: key });
    };

    render() {
        const { activeTab } = this.state;

        return (
            <Card
                style={{ width: '100%' }}
                tabList={[{ key: 'create', tab: 'Create', }, { key: 'redeem', tab: 'Redeem' }]}
                activeTabKey={activeTab}
                onTabChange={key => this.onTabChange(key)}
            >
                {activeTab === 'create' ?
                    <CreateForm />
                    :
                    <p>redeem content</p>
                }
            </Card>
        );
    }
}

export default CreateRedeemBox;
