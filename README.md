# Country API

This project is a backend API service that provides useful data about countries. It includes endpoints to fetch detailed information about a specific country, retrieve a list of countries based on filters such as currency, region, or language, and implement user authentication to protect sensitive endpoints.

## Getting Started

### Prerequisites

Ensure that you have Node.js and npm installed on your machine. Additionally, MongoDB must be installed and running locally or accessible remotely.

### Installation

1. Clone the repository:

    ```
    git clone <repository_url>
    ```

2. Navigate to the project directory:

    ```
    cd country-api
    ```

3. Install dependencies:

    ```
    npm install
    ```

4. Create a `.env` file in the root directory and add the following environment variables:

    ```
    PORT=8080
    MONGODB_URI=<your_mongodb_uri>
    JWT_SECRET=<your_secret_key>
    ```

    Replace `<your_mongodb_uri>` with the URI for your MongoDB database, and `<your_secret_key>` with a secret key for JWT token generation.

5. Start the server:

    ```
    npm start
    ```

    The server will start running on port 8080.

## Usage

### Auth Endpoint

To generate a valid auth token, send a POST request to `/api/auth/login` with the following JSON payload:

```json
{
  "username": "your_username",
  "password": "your_password"
}
