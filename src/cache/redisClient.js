/**
 * Redis Client Setup
 * 
 * Configures and exports a Redis client instance using `ioredis`.
 * The client is set up with options from the `config` module and defaults to `localhost` and port `6379`.
 * Used for caching data to improve performance by reducing redundant API calls.
 * 
 * Configuration:
 * - `host`: Redis server hostname (default: 'localhost')
 * - `port`: Redis server port (default: 6379)
 * 
 * @module redisClient
 */


const Redis = require('ioredis');
const config = require('../config/config'); // Adjust the path based on your config file location


const redis = new Redis({
    host: config.redisHost || 'localhost',
    port: config.redisPort || 6379,
});

module.exports = redis;
