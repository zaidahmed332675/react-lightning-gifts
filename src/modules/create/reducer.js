// Local Dependencies
import { REPLACE_INVOICE_STATUS_DELTA } from './actions';

const initialState = {
    invoiceStatus: {}
};

function replaceInvoiceStatus(state, invoiceStatus) {
    return {
        ...state,
        invoiceStatus
    };
}

export default function createReducer(state = initialState, action = {}) {
    switch (action.type) {
        case REPLACE_INVOICE_STATUS_DELTA:
            return replaceInvoiceStatus(state, action.payload);
        default:
            return state;
    }
}
