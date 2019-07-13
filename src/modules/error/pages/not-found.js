// NPM Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// UI Dependencies
import { Row, Col } from 'antd';

/**
 * Not Found Page Component
 */
const NotFoundPage = () => (
    <Row type="flex" justify="center" align="middle">
        <Col>
            Whoops, page not found <br />
            <Link to="/">Go to the home page.</Link>
        </Col>
    </Row>
);

export default NotFoundPage;
