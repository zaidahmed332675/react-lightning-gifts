// NPM Dependencies
import axios from 'axios';

export const SERVER_URL = 'https://node-satoshi-crate.glitch.me';

export const createVoucher = amount =>
    axios.post(`${SERVER_URL}/create`, { amount })
        .then(response => response.data)
        .catch(error => Promise.reject(error));
