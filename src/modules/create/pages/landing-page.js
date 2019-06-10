// NPM Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// UI Dependencies
import { Row, Col } from 'antd';

// Util Dependencies
import Emoji from 'utils/components/emoji';

// Local Dependencies
import CreateBox from '../components/create-box';

class LandingPage extends Component {
    static propTypes = {
        // match: PropTypes.object.isRequired
    };

    render() {
        return (
            <Row type="flex" align="middle" style={{ height: '100%' }}>
                <Col xs={24} sm={{ span: 12 }}>
                    <div style={{ marginBottom: 30 }}>
                        <h1 style={{ marginBottom: 20 }} className="avenir banner-text">
                            Bitcoin gifts, minus the fees
                        </h1>
                        <p style={{ marginBottom: 10, fontSize: 24 }}>
                            Create fee-less Bitcoin gift cards to share with friends, family and your haters.
                        </p>
                        <p>
                            Powered by Lightning network <Emoji label="lighting" symbol="⚡️" />
                        </p>
                    </div>
                </Col>
                <Col xs={24} sm={{ span: 8, offset: 4 }}>
                    <h2 style={{ marginBottom: 20, textAlign: 'center' }}>
                        Create a Bitcoin gift in 30 seconds <Emoji label="point-down" symbol="👇️" />
                    </h2>
                    <CreateBox />
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

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
