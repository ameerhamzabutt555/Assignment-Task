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

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd node-holiday-api
    ```

2.  **Install dependencies::**

    npm install

3.  **Set up environment variables:**

    touch .env

    Inside the .env file, add:

        CALENDARIFIC_API_KEY=your_calendarific_api_key
        CALENDARIFIC_API_URL=https://calendarific.com/api/v2
        REDIS_HOST=localhost
        poREDIS_PORT=6379

4.  **Running the Application:**

    npm run dev

    For production:
    npm start

5.  **Testing:**

    npm test
