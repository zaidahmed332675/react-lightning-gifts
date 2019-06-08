// NPM Dependencies
import { takeLatest, cancelled, fork, put } from 'redux-saga/effects';

// Local Dependencies
import {
    initApplicationSignal,
    updateApplicationState
} from './actions';

// const { NODE_ENV, npm_package_version: VERSION } = process.env;

/**
 * To initialise the application by preparing all needed data, including
 * session data.
 * @returns {object} Generator object
 */
export function* workerInitApplication() {
    try {
        yield put(updateApplicationState({
            isLoading: false,
            initialised: true
        }));

        /* eslint-disable-next-line no-console */
        // console.log(`Lightning in a Box v${VERSION} ${NODE_ENV} initialized`);

        yield put(initApplicationSignal.success());
    } catch (error) {
        yield put(initApplicationSignal.failure({ error }));
    } finally {
        if (yield cancelled()) {
            const error = new Error('Application boot up is cancelled');
            yield put(initApplicationSignal.failure({ error }));
        }
    }
}

/**
 * Watch for SIGNAL/app/INIT/REQUEST event and invoke the initApplication
 * generator function
 * @returns {object} Generator object
 */
export function* bootSaga() {
    // Always take the LAST request of app initialisation and abandon any former requests
    yield takeLatest(
        initApplicationSignal.REQUEST,
        workerInitApplication
    );
}

export default [
    fork(bootSaga)
];
