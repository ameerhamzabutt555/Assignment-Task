# Node.js Holiday API

This project is a simple Node.js RESTful API that retrieves holiday information for a specific country and year using the Calendarific API. The API also caches the data to improve performance and reduce redundant API calls.

## Features

- Fetch holidays for a specific country and year.
- Fetch the list of supported countries.
- Cache responses to minimize API calls.
- Middleware to validate country code format and existence.

## Tech Stack

- Node.js with Express.js
- Axios for HTTP requests
- Node-Cache for in-memory caching
- Jest for testing
- Nodemon for development
- dotenv for environment variables management
- Swagger for API documentation

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd node-holiday-api
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following environment variables:

   ```env
   CALENDARIFIC_API_KEY=your_calendarific_api_key
   CALENDARIFIC_API_URL=https://calendarific.com/api/v2
   REDIS_HOST=localhost
   REDIS_PORT=6379
   ```

4. **Running the Application:**

   To start the application in development mode:

   ```bash
   npm run dev
   ```

   For production:

   ```bash
   npm start
   ```

5. **Testing:**

   To run tests:

   ```bash
   npm test
   ```

6. **API Documentation:**

   Swagger UI is available at [http://localhost:3000/api-docs](http://localhost:3000/api-docs).

   To view or export the Postman collection, you can use the following route:

   [http://localhost:3000/postman_collection.json](http://localhost:3000/postman_collection.json) (This will be automatically generated based on Swagger documentation.)

## API Endpoints

- **Get Holidays**

  - **Endpoint:** `/api/holidays`
  - **Method:** GET
  - **Description:** Retrieve holidays for a specific country and year.
  - **Parameters:**
    - `country`: Country code (e.g., PAK)
    - `year`: Year for the holidays (e.g., 2024)

- **Get Countries**
  - **Endpoint:** `/api/countries`
  - **Method:** GET
  - **Description:** Retrieve a list of supported countries.
