/**
 * Routes for Holiday API
 * 
 * Defines and exports routes for the holiday-related endpoints.
 * 
 * Endpoints:
 * - `GET /holidays`: Retrieves holidays for a specific country and year.
 * - `GET /countries`: Retrieves the list of supported countries.
 * 
 * Middleware:
 * - `validateCountryCode`: Middleware to validate the country code format and existence for the `/holidays` endpoint.
 * 
 * @module routes
 */

const express = require('express');
const holidayController = require('../controllers/holidayController');
const validateCountryCode = require('../middleware/validateCountryCode');

const router = express.Router();

/**
 * Route to get holidays.
 * 
 * URL: `/holidays`
 * Method: `GET`
 * 
 * Middleware: `validateCountryCode` - Validates the country code format and existence.
 * 
 * Query Parameters:
 * - `country` (string): The country code.
 * - `year` (number): The year for which to retrieve holidays.
 * 
 * @see holidayController.getHolidays
 */
router.get('/holidays', validateCountryCode, holidayController.getHolidays);

/**
 * Route to get supported countries.
 * 
 * URL: `/countries`
 * Method: `GET`
 * 
 * @see holidayController.getCountries
 */
router.get('/countries', holidayController.getCountries);

module.exports = router;
