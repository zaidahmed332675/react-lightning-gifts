// NPM Dependencies
import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

// UI Dependencies
import { Layout, Row, Col } from 'antd';

// Local Dependencies
import './core.styles.scss';
import RouterMap from './router';

const { NODE_ENV } = process.env;
const { Header, Content } = Layout;

const App = () => (
    <Layout className="layout" style={{ height: '100%', maxWidth: 1200, margin: '0px auto', background: 'white' }}>
        <Header style={{ padding: '0px 40px', background: 'white' }}>
            <Row>
                <Col span={16}>
                    <span>Lightning in a box</span>
                </Col>
                <Col span={8} style={{ textAlign: 'right' }}>
                    <span>{NODE_ENV}</span>
                </Col>
            </Row>
        </Header>
        <Content style={{ height: '100%', padding: '0px 40px' }}>
            <Router>
                <RouterMap />
            </Router>
        </Content>
    </Layout>
);

export default connect()(App);
