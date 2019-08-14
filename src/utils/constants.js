const { NODE_ENV } = process.env;

export const APP_NAME = 'Lightning Gifts';
// export const SERVER_URL = 'https://177a25c3.ngrok.io';
export const SERVER_URL = NODE_ENV === 'production' ?
    'https://api.lightning.gifts' : 'http://localhost:8080';
