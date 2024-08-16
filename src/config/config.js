/**
 * Configuration Module
 * 
 * Loads and exports configuration settings for the application.
 * Retrieves settings from environment variables with defaults provided for Redis configuration.
 * 
 * Environment Variables:
 * - `CALENDARIFIC_API_KEY`: API key for Calendarific API
 * - `CALENDARIFIC_API_URL`: Base URL for Calendarific API
 * - `REDIS_PORT`: Port number for Redis server (default: 6379)
 * - `REDIS_HOST`: Hostname for Redis server (default: 'localhost')
 * 
 * @module config
 */

require('dotenv').config();

module.exports = {
    apiKey: process.env.CALENDARIFIC_API_KEY,
    apiUrl: process.env.CALENDARIFIC_API_URL,
    cachePort: process.env.REDIS_PORT || 6379,
    cacheHost: process.env.REDIS_HOST || 'localhost'
};
