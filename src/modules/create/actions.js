// Lib Dependencies
import {
    // createActionCreator,
    // createDeltaAction,
    createSignalAction
} from 'lib/redux';

// Module Name
export const MODULE_NAME = 'CREATE';

// Action Types
export const CREATE_INVOICE = 'CREATE_INVOICE';
export const REPLACE_INVOICE_STATUS = 'REPLACE_INVOICE';
// export const CREATE_PROJECT = 'CREATE_PROJECT';

// Signals
export const createInvoiceSignal = createSignalAction(MODULE_NAME, CREATE_INVOICE);
// export const createProjectSignal = createSignalAction(MODULE_NAME, CREATE_PROJECT);


// Deltas
export const REPLACE_INVOICE_STATUS_DELTA = createDeltaAction(MODULE_NAME, REPLACE_INVOICE_STATUS);
// export const UPDATE_APPLICATION_STATE_DELTA =
//     createDeltaAction(MODULE_NAME, UPDATE_APPLICATION_STATE);
// export const UPDATE_ERROR_STATE_DELTA = createDeltaAction(MODULE_NAME, UPDATE_ERROR_STATE);

// Action Creators
export const replaceInvoiceStatus = createActionCreator(REPLACE_INVOICE_STATUS_DELTA);
// export const updateApplicationState = createActionCreator(UPDATE_APPLICATION_STATE_DELTA);
// export const updateErrorState = createActionCreator(UPDATE_ERROR_STATE_DELTA);

