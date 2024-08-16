require('dotenv').config();

module.exports = {
    apiKey: process.env.CALENDARIFIC_API_KEY,
    apiUrl: process.env.CALENDARIFIC_API_URL,
    cachePort: process.env.REDIS_PORT || 6379,
    cacheHost: process.env.REDIS_HOST || 'localhost'
};
