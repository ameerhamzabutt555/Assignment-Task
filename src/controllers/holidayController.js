const holidayService = require('../services/holidayService');

const getHolidays = async (req, res) => {
    const { country, year } = req.query;
    try {
        const holidays = await holidayService.getHolidays(country, year);
        res.json(holidays);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getCountries = async (req, res) => {
    try {
        const countries = await holidayService.getCountries();
        res.json(countries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getHolidays,
    getCountries
};
