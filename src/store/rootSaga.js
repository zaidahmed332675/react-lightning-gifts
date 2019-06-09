// NPM Dependencies
import { all } from 'redux-saga/effects';

// Module Dependencies
import appSagas from 'modules/app/sagas';
import createSagas from 'modules/create/sagas';

/**
 * Prepare all the sagas to be bootstrapped right before starting of the application
 * @returns {object} Generator object
 */
function* rootSaga() {
    yield all([
        ...appSagas,
        ...createSagas
    ]);
}

export default rootSaga;
