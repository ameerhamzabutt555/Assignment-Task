const express = require('express');
const holidayController = require('../controllers/holidayController');
const validateCountryCode = require('../middleware/validateCountryCode');


const router = express.Router();

router.get('/holidays', validateCountryCode, holidayController.getHolidays);
router.get('/countries', holidayController.getCountries);

module.exports = router;
