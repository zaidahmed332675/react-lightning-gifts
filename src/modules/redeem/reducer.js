// Local Dependencies
import { REPLACE_GIFT_DETAILS_DELTA } from './actions';

const initialState = {
    giftDetails: {}
};

function replaceGiftDetails(state, giftDetails) {
    return {
        ...state,
        giftDetails
    };
}

export default function redeemReducer(state = initialState, action = {}) {
    switch (action.type) {
        case REPLACE_GIFT_DETAILS_DELTA:
            return replaceGiftDetails(state, action.payload);
        default:
            return state;
    }
}
