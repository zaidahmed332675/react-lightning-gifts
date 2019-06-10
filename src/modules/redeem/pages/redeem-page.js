// NPM Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// UI Dependencies
import { Spin, Row, Col } from 'antd';

// Util Dependencies
import Emoji from 'utils/components/emoji';

// Local Dependencies
import { getGiftDetailsSignal } from '../actions';
// import CreateBox from '../components/create-box';

class RedeemPage extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        getGiftDetails: PropTypes.func.isRequired,
        giftDetails: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            loading: false
        };
    }

    componentDidMount = () => {
        const { match, getGiftDetails } = this.props;
        const orderId = Number(match.params.id);

        getGiftDetails({ orderId });
    };

    render() {
        const { loading } = this.state;
        const { giftDetails, match } = this.props;

        if (loading || giftDetails === 'notFound') {
            return (
                <Row type="flex" align="middle" style={{ height: '100%' }}>
                    <Col span={24}>
                        <div style={{ textAlign: 'center' }}>
                            {loading ?
                                <Spin
                                    tip="loading..."
                                    size="large"
                                />
                                :
                                <p>{`Gift with ID '${match.params.id}' not found`}</p>
                            }
                        </div>
                    </Col>
                </Row>
            );
        }

        return (
            <Row type="flex" align="middle" style={{ height: '100%' }}>
                <Col span={24}>
                    <h1 style={{ marginBottom: 20 }} className="avenir banner-text">
                        A gift from Satoshi, to you
                    </h1>
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state,
        giftDetails: state.redeem.giftDetails
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        getGiftDetails: getGiftDetailsSignal.request
    }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(RedeemPage);
