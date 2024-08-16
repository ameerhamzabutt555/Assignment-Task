// src/controllers/holidayController.js

const { sendResponse } = require('../helpers/responseHelper');
const holidayService = require('../services/holidayService');
const { statusCodes, statusMessages } = require("../helpers/statusHelper")

/**
 * Controller to handle the request for fetching holidays.
 * 
 * This function retrieves holidays for a specific country and year based on query parameters.
 * It uses the holidayService to fetch the data and the sendResponse helper to return a standardized response.
 * 
 * @async
 * @function getHolidays
 * @param {Object} req - Express request object containing query parameters `country` and `year`.
 * @param {Object} res - Express response object used to send back the desired HTTP response.
 * @returns {Promise<void>} Sends the holiday data in a standardized response format.
 * 
 */
const getHolidays = async (req, res) => {
    try {
        const { country, year } = req.query;
        const holidays = await holidayService.getHolidays(country, year);
        sendResponse(res, statusMessages.Success, 'Holidays fetched successfully', holidays);
    } catch (error) {
        sendResponse(res, statusMessages.Error, 'Error fetching holidays', null, statusCodes.INTERNAL_SERVER_ERROR, error.message);
    }
};

/**
 * Controller to handle the request for fetching supported countries.
 * 
 * This function retrieves a list of supported countries. 
 * It uses the holidayService to fetch the data and the sendResponse helper to return a standardized response.
 * 
 * @async
 * @function getCountries
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object used to send back the desired HTTP response.
 * @returns {Promise<void>} Sends the list of countries in a standardized response format.
 * 
 */
const getCountries = async (req, res) => {
    try {
        const countries = await holidayService.getCountries();
        sendResponse(res, statusMessages.Success, 'Countries fetched successfully', countries);
    } catch (error) {
        sendResponse(res, statusMessages.Error, 'Error fetching countries', null, statusCodes.INTERNAL_SERVER_ERROR, error.message);
    }
};

module.exports = {
    getHolidays,
    getCountries,
};
