// NPM Dependencies
import React, { Component, Fragment } from 'react';
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
                onTabChange={key => this.onTabChange(key)}
            >
                <Row type="flex" align="middle" style={{ height: '100%', minHeight: 200 }}>
                    <Col span={24} style={{ textAlign: 'center' }}>
                        {activeTab === 'basic' ?
                            <CreateForm
                                toggleModal={toggleModal}
                            />
                            :
                            <Fragment>
                                <p>Advanced features!</p>
                                <ul style={{ textAlign: 'left' }}>
                                    <li>Customizable gift pages</li>
                                    <li>Batch gift generation API</li>
                                    <li>Notify recipient by email</li>
                                    <li>And more!</li>
                                </ul>
                                <p>Coming soon!</p>
                                <p>
                                    <a href="https://forms.gle/Ri5eKmFPJQfcR8jr6" target="_blank" rel="noopener noreferrer">
                                        Request API access
                                    </a>
                                </p>
                            </Fragment>
                        }
                    </Col>
                </Row>
            </Card>
        );
    }
}

export default CreateBox;
