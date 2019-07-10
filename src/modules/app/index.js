// NPM Dependencies
import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

// UI Dependencies
import { Layout, Row, Col, Icon } from 'antd';

// Local Dependencies
import './core.styles.scss';
import RouterMap from './router';

const { APP_VERSION } = process.env;
const { Header, Content } = Layout;

const App = () => (
    <Layout className="layout">
        <Header style={{ background: 'white' }}>
            <Row>
                <Col span={16}>
                    <Icon
                        type="thunderbolt"
                        theme="twoTone"
                        style={{
                            fontSize: 30, position: 'relative', bottom: -6, marginRight: 10
                        }}
                        twoToneColor="#EDCA0E"
                    />
                    <span className="logo-text">
                        Lightning Gifts
                    </span>
                </Col>
                <Col span={8} style={{ textAlign: 'right' }}>
                    <small>v{APP_VERSION} Alpha</small>
                </Col>
            </Row>
        </Header>
        <Content style={{ height: '100%' }}>
            <Router>
                <RouterMap />
            </Router>
        </Content>
    </Layout>
);

export default connect()(App);
