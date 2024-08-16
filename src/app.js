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
const holidayRoutes = require('./routes/holidayRoutes');;
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());


// Load Swagger YAML file
const swaggerDocument = YAML.load(path.join(__dirname, 'swagger', 'swagger.yaml'));

// Serve Swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Welcome route
app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to the API</h1>
        <p>Explore the API documentation and Postman collection:</p>
        <ul>
            <li><a href="/api-docs" target="_blank">Swagger UI (API Documentation)</a></li>
        </ul>
    `);
});


// Register API routes
app.use('/api', holidayRoutes);

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
    console.log('Swagger UI is available at http://localhost:3000/api-docs');
});

module.exports = app;
