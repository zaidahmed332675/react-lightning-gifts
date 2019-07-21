const { NODE_ENV } = process.env;

export const APP_NAME = 'Lightning Gifts';
// export const SERVER_URL = 'https://api.lightning.gifts';
export const SERVER_URL = NODE_ENV === 'production' ?
    'https://api.lightning.gifts' : 'https://96rq2.sse.codesandbox.io';

