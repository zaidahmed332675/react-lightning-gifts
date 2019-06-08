// NPM Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';

// UI Dependencies
import { Spin, Form, Input, Button, Row, Col } from 'antd';

// Local Dependencies
import { createProjectSignal } from '../actions';

class LandingPage extends Component {
    static propTypes = {
        form: PropTypes.shape({
            getFieldDecorator: PropTypes.func.isRequired,
            validateFields: PropTypes.func.isRequired
        }).isRequired,
        history: PropTypes.object.isRequired,
        // createProject: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            loading: false
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { createProject, form, history } = this.props;

        form.validateFields((err, values) => {
            if (!err) {
                const { repoUrl } = values;
                let path = url.parse(repoUrl).pathname;

                if (_.endsWith(path, '/')) {
                    path = path.slice(0, -1);
                }

                createProject({ path }, { history });
            }
        });
    };

    render() {
        const { loading } = this.state;
        const { getFieldDecorator } = this.props.form;

        if (loading) {
            return (
                <div style={{ textAlign: 'center' }}>
                    <Spin tip="loading..." size="large" style={{ marginTop: '200px' }} />
                </div>
            );
        }

        return (
            <Row type="flex" align="middle" justify="center" style={{ height: '100%' }}>
                <Col sm={24} md={12} style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: 20 }}>First, enter your repo github URL</h2>
                </Col>
                <Col sm={24} md={12} style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: 20 }}>First, enter your repo github URL</h2>
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
