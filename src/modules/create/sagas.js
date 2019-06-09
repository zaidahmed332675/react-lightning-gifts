// NPM Dependencies
import { fork, takeLatest, put, call } from 'redux-saga/effects';

// Local Dependencies
import { createVoucher } from './services';
import { createInvoiceSignal, replaceInvoiceStatus } from './actions';

export function* createInvoiceOnRequest({ payload }) {
    try {
        const { amount } = payload;

        const invoice = yield call(createVoucher, amount);

        yield put(replaceInvoiceStatus(invoice));

        yield put(createInvoiceSignal.success(invoice));
    } catch (error) {
        yield put(createInvoiceSignal.failure({ error }));
    }
}

export function* watchCreateInvoiceSignal() {
    yield takeLatest(
        createInvoiceSignal.REQUEST,
        createInvoiceOnRequest
    );
}

export default [
    fork(watchCreateInvoiceSignal)
];
