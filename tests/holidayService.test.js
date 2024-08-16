const holidayService = require('../src/services/holidayService');
const cache = require('../src/cache/cache');

describe('Holiday Service', () => {
    it('should fetch holidays and cache them', async () => {
        const holidays = await holidayService.getHolidays('PAK', 2024);
        const cachedHolidays = cache.get('PAK-2024');
        expect(cachedHolidays).toEqual(holidays);
    });

    it('should fetch countries and cache them', async () => {
        const countries = await holidayService.getCountries();
        const cachedCountries = cache.get('countries');
        expect(cachedCountries).toEqual(countries);
    });
});
