// NPM Dependencies
import { fork, takeLatest, put, call } from 'redux-saga/effects';

// Local Dependencies
import { getGiftDetails, redeemGift } from './services';
import { getGiftDetailsSignal, redeemGiftSignal, replaceGiftDetails } from './actions';

export function* getGiftDetailsOnRequest({ payload }) {
    try {
        const { orderId } = payload;

        const giftDetails = yield call(getGiftDetails, orderId);

        yield put(replaceGiftDetails(giftDetails));

        yield put(getGiftDetailsSignal.success(giftDetails));
    } catch (error) {
        yield put(replaceGiftDetails('notFound'));

        yield put(getGiftDetailsSignal.failure({ error }));
    }
}

export function* watchGetGiftDetailsSignal() {
    yield takeLatest(
        getGiftDetailsSignal.REQUEST,
        getGiftDetailsOnRequest
    );
}

export function* redeemGiftOnRequest({ payload }) {
    try {
        const { orderId, address } = payload;

        const redeemGiftStatus = yield call(redeemGift, { orderId, address });

        yield put(replaceGiftDetails(redeemGiftStatus));

        yield put(redeemGiftSignal.success(redeemGiftStatus));
    } catch (error) {
        yield put(redeemGiftSignal.failure({ error }));
    }
}

export function* watchRedeemGiftDetailsSignal() {
    yield takeLatest(
        redeemGiftSignal.REQUEST,
        redeemGiftOnRequest
    );
}

export default [
    fork(watchRedeemGiftDetailsSignal),
    fork(watchGetGiftDetailsSignal)
];
