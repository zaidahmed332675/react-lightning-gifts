// NPM Dependencies
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

// UI Dependencies
import { Spin, Row, Col } from 'antd';

// Util Dependencies
import Emoji from 'utils/components/emoji';

// Local Dependencies
import { getGiftDetailsSignal } from '../actions';
import RedeemForm from '../forms/redeem-form';

class RedeemPage extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        getGiftDetails: PropTypes.func.isRequired,
        giftDetails: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    };

    static defaultProps = {
        giftDetails: null
    };

    constructor(props) {
        super(props);

        this.state = {
            loading: false
        };
    }

    componentDidMount = () => {
        const { match, getGiftDetails } = this.props;
        const orderId = match.params.id;

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
            <Fragment>
                <Row type="flex" align="middle" style={{ height: '100%' }}>
                    <Col span={24}>
                        <h1 style={{ marginBottom: 40, textAlign: 'center' }} className="avenir banner-text">
                            A gift from Satoshi,
                            <br />
                            to you
                        </h1>
                        <p style={{ marginBottom: 10, textAlign: 'center' }}>
                            Someone (Satoshi?) has given you a Bitcoin gift on the Lightning Network <Emoji label="confeti" symbol="🎊️" />
                            <br />
                            to redeem, create a 0 sat invoice using <a rel="noopener noreferrer" target="_blank" href="https://bluewallet.io/">Bluewallet</a> or other
                            <br />
                            compatible Lightning Network wallets, and paste below <Emoji label="point-down" symbol="👇️" />
                        </p>
                    </Col>
                </Row>
                <Row type="flex" align="middle" style={{ height: '100%' }}>
                    <Col span={24}>
                        <RedeemForm giftDetails={giftDetails} />
                    </Col>
                </Row>
            </Fragment>
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
