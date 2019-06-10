// Lib Dependencies
import {
    createActionCreator,
    createDeltaAction,
    createSignalAction
} from 'lib/redux';

// Module Name
export const MODULE_NAME = 'REDEEM';

// Action Types
export const GET_GIFT_DETAILS = 'GET_GIFT_DETAILS';
export const REPLACE_GIFT_DETAILS = 'REPLACE_GIFT_DETAILS';
export const REDEEM_GIFT = 'REDEEM_GIFT';

// Signals
export const getGiftDetailsSignal = createSignalAction(MODULE_NAME, GET_GIFT_DETAILS);
export const redeemGiftSignal = createSignalAction(MODULE_NAME, REDEEM_GIFT);

// Deltas
export const REPLACE_GIFT_DETAILS_DELTA = createDeltaAction(MODULE_NAME, REPLACE_GIFT_DETAILS);

// Action Creators
export const replaceGiftDetails = createActionCreator(REPLACE_GIFT_DETAILS_DELTA);

