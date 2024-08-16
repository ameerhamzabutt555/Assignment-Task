/**
 * Holiday Controller
 * 
 * Defines and exports request handlers for holiday-related API endpoints.
 * 
 * Functions:
 * - `getHolidays`: Retrieves holidays for a specified country and year by calling `holidayService.getHolidays`.
 * - `getCountries`: Retrieves the list of supported countries by calling `holidayService.getCountries`.
 * 
 * Error Handling:
 * - Returns a 500 status code with an error message if an exception occurs.
 * 
 * @module holidayController
 */

const holidayService = require('../services/holidayService');

/**
 * Handler for GET /holidays
 * Retrieves holidays for the specified country and year.
 * 
 * Query Parameters:
 * - `country` (string): The country code.
 * - `year` (number): The year for which to retrieve holidays.
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const getHolidays = async (req, res) => {
    const { country, year } = req.query;
    try {
        const holidays = await holidayService.getHolidays(country, year);
        res.json(holidays);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/**
 * Handler for GET /countries
 * Retrieves the list of supported countries.
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
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
