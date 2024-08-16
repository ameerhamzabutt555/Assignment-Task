/**
 * Holiday Service
 * 
 * Provides functions to fetch and cache holiday and country data using the Calendarific API.
 * 
 * Functions:
 * - `getHolidays(country, year)`: Fetches holidays for a specific country and year. Caches the result for 1 hour.
 * - `getCountries()`: Fetches the list of supported countries. Caches the result for 1 hour.
 * 
 * Caching:
 * - Uses Redis for caching data to improve performance and reduce redundant API calls.
 * 
 * @module holidayService
 */

const axios = require('axios');
const config = require('../config/config');
const redis = require('../cache/redisClient');

/**
 * Retrieves holidays for a specific country and year.
 * 
 * Checks if the data is cached in Redis. If cached, returns the data from the cache.
 * If not cached, fetches the data from the Calendarific API, caches it, and returns the data.
 * 
 * @param {string} country - The country code.
 * @param {number} year - The year for which to retrieve holidays.
 * @returns {Promise<Object>} - A promise that resolves to the holiday data.
 * @throws {Error} - Throws an error if there is an issue fetching the holidays.
 */
const getHolidays = async (country, year) => {
    const cacheKey = `${country}-${year}`;
    const cachedData = await redis.get(cacheKey);

    if (cachedData) {
        return JSON.parse(cachedData);
    }

    try {
        const response = await axios.get(`${config.apiUrl}/holidays`, {
            params: {
                api_key: config.apiKey,
                country,
                year
            }
        });

        const holidays = response.data.response.holidays;
        await redis.set(cacheKey, JSON.stringify(holidays), 'EX', 3600); // Cache for 1 hour
        return holidays;
    } catch (error) {
        throw new Error('Error fetching holidays');
    }
};

/**
 * Retrieves the list of supported countries.
 * 
 * Checks if the data is cached in Redis. If cached, returns the data from the cache.
 * If not cached, fetches the data from the Calendarific API, caches it, and returns the data.
 * 
 * @returns {Promise<Object>} - A promise that resolves to the list of supported countries.
 * @throws {Error} - Throws an error if there is an issue fetching the countries.
 */
const getCountries = async () => {
    const cacheKey = 'countries';
    const cachedData = await redis.get(cacheKey);

    if (cachedData) {
        return JSON.parse(cachedData);
    }

    try {
        const response = await axios.get(`${config.apiUrl}/countries`, {
            params: {
                api_key: config.apiKey
            }
        });

        const countries = response.data.response.countries;
        await redis.set(cacheKey, JSON.stringify(countries), 'EX', 3600); // Cache for 1 hour
        return countries;
    } catch (error) {
        throw new Error('Error fetching countries');
    }
};

module.exports = {
    getHolidays,
    getCountries
};
