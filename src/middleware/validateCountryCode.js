// src/middleware/validateCountryCode.js

const { sendResponse } = require('../helpers/responseHelper');
const holidayService = require('../services/holidayService');
const { statusCodes, statusMessages } = require("../helpers/statusHelper")
// Middleware to validate country code format and existence
const validateCountryCode = async (req, res, next) => {
    const { country } = req.query;

    // Check if country code is provided
    if (!country) {
        return sendResponse(res, statusMessages.Error, 'Country code is required', null, statusCodes.BAD_REQUEST);
    }

    // Validate country code format (e.g., must be two uppercase letters)
    const countryCodeRegex = /^[A-Z]{2}$/;
    if (!countryCodeRegex.test(country)) {
        return sendResponse(res, statusMessages.Error, 'Invalid country code format. It should be exactly two capital letters.', null, statusCodes.BAD_REQUEST);
    }

    try {
        // Fetch the list of supported countries from the service
        const countries = await holidayService.getCountries();
        const countryCodes = countries.map(c => c['iso-3166']);

        // Check if the country code exists in the supported countries
        if (!countryCodes.includes(country)) {
            return sendResponse(res, statusMessages.Error, 'Country code not supported', null, statusCodes.BAD_REQUEST);
        }

        // If valid, proceed to the next middleware or route handler
        next();
    } catch (error) {
        sendResponse(res, statusMessages.Error, 'Error validating country code', null, statusCodes.INTERNAL_SERVER_ERROR, error.message);
    }
};

module.exports = validateCountryCode;
