// src/services/holidayService.js
const axios = require('axios');
const config = require('../config/config');
const redis = require('../cache/redisClient');

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
