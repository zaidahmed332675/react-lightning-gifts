// NPM Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

// UI Dependencies
import { Spin, Form, Row, Col } from 'antd';

// Local Dependencies
import CreateRedeemBox from '../components/create-redeem-box';

class LandingPage extends Component {
    static propTypes = {

    };

    constructor(props) {
        super(props);

        this.state = {
            loading: false
        };
    }

    render() {
        const { loading } = this.state;

        if (loading) {
            return (
                <div style={{ textAlign: 'center' }}>
                    <Spin tip="loading..." size="large" style={{ marginTop: '200px' }} />
                </div>
            );
        }

        return (
            <Row type="flex" align="middle" style={{ height: '100%' }}>
                <Col xs={24} sm={{ span: 12 }}>
                    <h1 style={{ marginBottom: 20 }} className="avenir banner-text">
                        Bitcoin gifts, minus the fees
                    </h1>
                </Col>
                <Col xs={24} sm={{ span: 8, offset: 4 }}>
                    <CreateRedeemBox />
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
        // droneOnline: state.cockpit.droneOnline,
        // cockpitLoading: state.cockpit.cockpitLoading
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        // createProject: createProjectSignal.request
    }, dispatch);

const WrappedLandingPage = Form.create()(LandingPage);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WrappedLandingPage));
