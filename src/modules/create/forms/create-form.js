// NPM Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

// UI Dependencies
import { Button, Form, Input, Spin } from 'antd';

class CreateForm extends Component {
    static propTypes = {
        form: PropTypes.shape({
            getFieldDecorator: PropTypes.func.isRequired,
            validateFields: PropTypes.func.isRequired
        }).isRequired,
        history: PropTypes.object.isRequired
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
        // const { form, history } = this.props;

        // form.validateFields((err, values) => {
        //     if (!err) {
        //         const { repoUrl } = values;
        //         let path = url.parse(repoUrl).pathname;
        //
        //         if (_.endsWith(path, '/')) {
        //             path = path.slice(0, -1);
        //         }
        //
        //         createProject({ path }, { history });
        //     }
        // });
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
            <Form onSubmit={this.handleSubmit} layout="vertical" hideRequiredMark>
                <Form.Item>
                    {getFieldDecorator('amount', {
                        rules: [{ required: true, message: 'Gift amount required' }]
                    })(<Input placeholder="Gift amount (sats)" />)}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Create
                    </Button>
                </Form.Item>
            </Form>
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


const WrappedCreateForm = Form.create()(CreateForm);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WrappedCreateForm));
