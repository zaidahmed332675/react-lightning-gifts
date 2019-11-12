const { NODE_ENV } = process.env;

export const APP_NAME = 'Lightning Gifts';
// export const SERVER_URL = 'https://4328b916.ngrok.io';
export const ENV_URLS = {
    production: 'https://api.lightning.gifts',
    staging: 'https://node-lightning-gifts-staging.herokuapp.com',
    development: 'http://localhost:8080'
};
export const SERVER_URL = ENV_URLS[NODE_ENV] !== undefined ? ENV_URLS[NODE_ENV] : ENV_URLS.staging;
