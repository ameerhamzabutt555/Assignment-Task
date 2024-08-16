// src/services/holidayService.js

const { makeRequest } = require('../helpers/requestHelper');
const { getFromCache, setInCache } = require('../helpers/cacheHelper');

/**
 * Fetches and caches data using dynamic API requests.
 * 
 * @param {string} method - The HTTP method to use (e.g., 'GET').
 * @param {string} endpoint - The API endpoint to call.
 * @param {Object} [params={}] - Query parameters.
 * @param {Object} [data={}] - Request body data (if applicable).
 * @param {string} cacheKey - The key for caching the response.
 * @param {number} [cacheExpiry=3600] - Cache expiry time in seconds.
 * @returns {Promise<Object>} - A promise that resolves to the fetched data.
 */
const fetchAndCacheData = async (method, endpoint, params = {}, data = {}, cacheKey, cacheExpiry = 3600) => {
    const cachedData = await getFromCache(cacheKey);
    if (cachedData) {
        return cachedData;
    }

    const apiData = await makeRequest(method, endpoint, params, data);
    await setInCache(cacheKey, apiData, cacheExpiry);
    return apiData;
};

/**
 * Retrieves holidays for a specific country and year.
 * 
 * @param {string} country - The country code.
 * @param {number} year - The year for which to retrieve holidays.
 * @returns {Promise<Object>} - A promise that resolves to the holiday data.
 */
const getHolidays = (country, year) => {
    const cacheKey = `${country}-${year}`;
    return fetchAndCacheData('GET', 'holidays', { country, year }, {}, cacheKey);
};

/**
 * Retrieves the list of supported countries.
 * 
 * @returns {Promise<Object>} - A promise that resolves to the list of supported countries.
 */
const getCountries = () => {
    const cacheKey = 'countries';
    return fetchAndCacheData('GET', 'countries', {}, {}, cacheKey);
};

module.exports = {
    getHolidays,
    getCountries,
};
