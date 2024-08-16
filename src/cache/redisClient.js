const Redis = require('ioredis');
const config = require('../config/config'); // Adjust the path based on your config file location


const redis = new Redis({
    host: config.redisHost || 'localhost',
    port: config.redisPort || 6379,
});

module.exports = redis;
