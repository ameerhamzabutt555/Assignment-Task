const holidayService = require('../services/holidayService');

// Middleware to validate country code format and existence
const validateCountryCode = async (req, res, next) => {
    const { country } = req.query;

    // Check if country code is provided
    if (!country) {
        return res.status(400).json({ message: 'Country code is required' });
    }

    // Validate country code format (e.g., must be two uppercase letters)
    const countryCodeRegex = /^[A-Z]{2}$/;
    if (!countryCodeRegex.test(country)) {
        return res.status(400).json({ message: 'Invalid country code format. It should be exactly two capital letters.' });
    }

    try {
        // Fetch the list of supported countries from the service
        const countries = await holidayService.getCountries();
        const countryCodes = countries.map(c => c['iso-3166']);

        // Check if the country code exists in the supported countries
        if (!countryCodes.includes(country)) {
            return res.status(400).json({ message: 'Country code not supported' });
        }

        // If valid, proceed to the next middleware or route handler
        next();
    } catch (error) {
        res.status(500).json({ message: 'Error validating country code' });
    }
};

module.exports = validateCountryCode;
