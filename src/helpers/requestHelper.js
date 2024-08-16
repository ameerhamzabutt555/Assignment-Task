// src/helpers/requestHelper.js

const axios = require('axios');
const config = require('../config/config');

/**
 * Makes a dynamic API request.
 * 
 * @param {string} method - The HTTP method to use (e.g., 'GET', 'POST').
 * @param {string} endpoint - The API endpoint to call (e.g., 'holidays', 'countries').
 * @param {Object} [params={}] - Query parameters to send with the API request.
 * @param {Object} [data={}] - The request body data (for POST, PUT, etc.).
 * @returns {Promise<Object>} - A promise that resolves to the API response data.
 * @throws {Error} - Throws an error if there is an issue with the request.
 */
const makeRequest = async (method, endpoint, params = {}, data = {}) => {
    try {
        const response = await axios({
            method,
            url: `${config.apiUrl}/${endpoint}`,
            params: {
                api_key: config.apiKey,
                ...params,
            },
            data,
        });

        return response.data.response[endpoint];
    } catch (error) {
        throw new Error(`Error making ${method} request to ${endpoint}`);
    }
};

module.exports = {
    makeRequest,
};
