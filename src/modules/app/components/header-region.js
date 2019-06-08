// NPM Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// UI Dependencies
import Layout from 'antd/lib/layout';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

// Component Dependencies
import ErrorBoundary from 'components/error-boundary';

// Module Dependencies
import UserMenu from 'modules/user/containers/user-menu';
import AlertBar from 'modules/alerts/containers/alert-bar';

// Public Dependencies
import sonderAuLogo from '../../../../public/img/Full_Logo_Blue-Medium.png';

/**
 * Header Region Component
 */
const HeaderRegion = () => (
    <ErrorBoundary>
        <Layout.Header className="l-header">
            <Row>
                <Col span={3}>
                    <Link to="/" title="Sonder Logo" alt="Sonder Logo">
                        <img
                            className="logo"
                            src={sonderAuLogo}
                            title="Sonder Australia"
                            alt="Sonder Australia Logo"
                        />
                    </Link>
                </Col>
                <Col span={4}>
                    <h2>Command Portal</h2>
                </Col>
                <Col span={12} style={{ textAlign: 'center' }}>
                    <AlertBar />
                </Col>
                <Col span={5} style={{ textAlign: 'right' }}>
                    <UserMenu />
                </Col>
            </Row>
        </Layout.Header>
    </ErrorBoundary>
);

export default HeaderRegion;
