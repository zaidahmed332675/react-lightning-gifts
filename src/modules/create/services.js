// NPM Dependencies
import axios from 'axios';

export const SERVER_URL = 'https://node-satoshi-crate.glitch.me';

export const createInvoice = amount =>
    axios.post(`${SERVER_URL}/create`, { amount })
        .then(response => response.data)
        .catch(error => Promise.reject(error));

export const getInvoiceStatus = chargeId =>
    axios.get(`${SERVER_URL}/status/${chargeId}`)
        .then(response => response.data)
        .catch(error => Promise.reject(error));
