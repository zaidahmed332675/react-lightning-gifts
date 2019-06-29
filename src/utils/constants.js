const { NODE_ENV } = process.env;

export const APP_NAME = 'Lightning Gifts';
// export const SERVER_URL = 'https://tk0rn.sse.codesandbox.io';
export const SERVER_URL = NODE_ENV === 'production' ?
    'https://node-lightning-in-a-box.herokuapp.com' : 'https://tk0rn.sse.codesandbox.io';

