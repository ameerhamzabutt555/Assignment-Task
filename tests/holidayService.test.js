/**
 * Holiday Service Tests
 * 
 * This file contains unit tests for the `holidayService` module.
 * 
 * - Tests fetching holidays and verifies that they are cached.
 * - Tests fetching countries and verifies that they are cached.
 * 
 * @module holidayService.test
 */

const holidayService = require('../src/services/holidayService');
const redis = require('../src/cache/redisClient');

describe('Holiday Service', () => {
    beforeEach(async () => {
        // Clear cache before each test
        await redis.flushall();
    });

    /**
     * Test fetching holidays and caching
     * 
     * This test verifies that the `getHolidays` method fetches holidays
     * for a given country and year, and that the data is properly cached.
     */
    it('should fetch holidays and cache them', async () => {
        const holidays = await holidayService.getHolidays('PK', 2024);
        const cachedHolidays = await redis.get('PK-2024');
        expect(JSON.parse(cachedHolidays)).toEqual(holidays);
    });

    /**
     * Test fetching countries and caching
     * 
     * This test verifies that the `getCountries` method fetches the list
     * of supported countries and that the data is properly cached.
     */
    it('should fetch countries and cache them', async () => {
        const countries = await holidayService.getCountries();
        const cachedCountries = await redis.get('countries');
        expect(JSON.parse(cachedCountries)).toEqual(countries);
    });
});
