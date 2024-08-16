// src/helpers/cacheHelper.js

const redis = require('../cache/redisClient');

/**
 * Retrieves data from the cache.
 * 
 * @param {string} key - The cache key.
 * @returns {Promise<Object|null>} - The cached data or null if not found.
 */
const getFromCache = async (key) => {
    const cachedData = await redis.get(key);
    return cachedData ? JSON.parse(cachedData) : null;
};

/**
 * Stores data in the cache.
 * 
 * @param {string} key - The cache key.
 * @param {Object} value - The data to cache.
 * @param {number} expiry - Cache expiry time in seconds.
 * @returns {Promise<void>}
 */
const setInCache = async (key, value, expiry) => {
    await redis.set(key, JSON.stringify(value), 'EX', expiry);
};

module.exports = {
    getFromCache,
    setInCache,
};
