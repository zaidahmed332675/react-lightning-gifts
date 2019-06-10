// NPM Dependencies
import { fork, takeLatest, put, call } from 'redux-saga/effects';

// Local Dependencies
import { getGiftDetails } from './services';
import { getGiftDetailsSignal, redeemGiftSignal, replaceGiftDetails } from './actions';

export function* getGiftDetailsOnRequest({ payload }) {
    try {
        const { orderId } = payload;

        const invoiceStatus = yield call(getGiftDetails, orderId);

        yield put(replaceGiftDetails(invoiceStatus));

        yield put(getGiftDetailsSignal.success(invoiceStatus));
    } catch (error) {
        yield put(getGiftDetailsSignal.failure({ error }));
    }
}

export function* watchGetGiftDetailsSignal() {
    yield takeLatest(
        getGiftDetailsSignal.REQUEST,
        getGiftDetailsOnRequest
    );
}

export default [
    fork(watchGetGiftDetailsSignal)
];
