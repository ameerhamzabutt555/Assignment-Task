/**
 * Express Application
 * 
 * This file sets up the Express server and routes for the holiday API.
 * 
 * - Uses `express.json()` middleware to parse JSON requests.
 * - Sets up API routes under the `/api` prefix using the `holidayRoutes` module.
 * - Starts the server on port 3000.
 * 
 * @module app
 */

const express = require('express');
const holidayRoutes = require('./routes/holidayRoutes');

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Register API routes
app.use('/api', holidayRoutes);

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

module.exports = app;
