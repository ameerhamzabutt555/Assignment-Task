// src/helpers/responseHelper.js

/**
 * Sends a standardized API response.
 * 
 * @param {Object} res - Express response object.
 * @param {string} status - The status of the response, either 'success' or 'error'.
 * @param {string} message - A message describing the result.
 * @param {Object} [data=null] - The data to send in the response (optional).
 * @param {number} [statusCode=200] - The HTTP status code for the response (optional, default is 200).
 * @param {string} [error=null] - Error message to include if the status is 'error' (optional).
 */




const sendResponse = (res, status, message, data = null, statusCode = 200, error = null) => {
    // Ensure the status code is valid, fallback to 500 for errors if statusCode is not provided
    if (!statusCode) {
        statusCode = status === 'error' ? 500 : 200;
    }

    const response = {
        status,
        message,
        data,
        error: error || undefined,  // Only include the error field if there's an error
    };

    res.status(statusCode).json(response);
};

module.exports = {
    sendResponse,
};
