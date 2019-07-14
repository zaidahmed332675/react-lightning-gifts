// NPM Dependencies
import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactGA from 'react-ga';

// UI Dependencies
import { Layout, Row, Col, Icon } from 'antd';

// Local Dependencies
import './core.styles.scss';
import RouterMap from './router';

const { APP_VERSION, NODE_ENV } = process.env;
const { Header, Content, Footer } = Layout;

if (NODE_ENV === 'production') {
    ReactGA.initialize('UA-143822790-1', { titleCase: false });
    ReactGA.set({ appName: 'LightningGifts', appVersion: APP_VERSION });
}

const App = () => (
    <Layout className="layout">
        <Header>
            <Row>
                <Col span={13}>
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
                <Col span={11} style={{ textAlign: 'right' }}>
                    <span><small>v{APP_VERSION} Alpha</small></span>
                    &nbsp;
                    &nbsp;
                    <span>
                        <small>
                            <a
                                href="mailto:me@rossdyson.com?Subject=Lightning%20Gifts%20Bug"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                report bug
                            </a>
                        </small>
                    </span>
                </Col>
            </Row>
        </Header>
        <Content>
            <Router>
                <RouterMap />
            </Router>
        </Content>
        <Footer>
            <Row type="flex" justify="end">
                <Col span={12} style={{ textAlign: 'right' }}>
                    <small>
                        made by
                        &nbsp;
                        <a
                            href="https://www.twitter.com/baebb_code"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            baebb
                        </a>
                    </small>
                </Col>
            </Row>
        </Footer>
    </Layout>
);

export default connect()(App);
