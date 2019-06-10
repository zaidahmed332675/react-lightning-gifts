// NPM Dependencies
import axios from 'axios';

export const SERVER_URL = 'https://node-satoshi-crate.glitch.me';

export const getGiftDetails = orderId =>
    axios.get(`${SERVER_URL}/gift/${orderId}`)
        .then(response => response.data)
        .catch(error => Promise.reject(error));


export const redeemGift = ({ orderId, address }) =>
    axios.post(`${SERVER_URL}/redeem/${orderId}`, { address })
        .then(response => response.data)
        .catch(error => Promise.reject(error));
