# Country API

This project is a backend API service that provides useful data about countries. It includes endpoints to fetch detailed information about a specific country, retrieve a list of countries based on filters such as currency, region, or language, and implement user authentication to protect sensitive endpoints.

## Getting Started

### Prerequisites

Ensure that you have Node.js and npm installed on your machine. Additionally, MongoDB must be installed and running locally or accessible remotely.

### Installation

1. Clone the repository:

    ```
    git clone https://github.com/hemantjayas/prashantfoundation
    ```

2. Navigate to the project directory:

    ```
    cd prashantfoundation
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

### use the thunderclient or postman for testing 

#### Signup

To authenticate login in, send a POST request to `/api/auth/login` with the following JSON payload:
```
```json
{
  "username": "your_username",
  "password": "your_password"
}
```

#### get country details by countryName 

Send a GET Request  on "http://localhost:8080//country/:bharat"  where user can found out the details about the specific country 
and to authenticate this add the token which you get in the response during login  put in the authrization then only you will recieve the response 

```
```json
{
    "name": "India",
    "capital": [
        "New Delhi"
    ],
    "population": 1380004385,
    "languages": [
        "English",
        "Hindi",
        "Tamil"
    ]
}
```

#### get country list  by applying the filter  such as currency language, region  
Send a GET Request  on "http://localhost:8080/user/countries?currency=USD&region=Europe&language=English&page=2"  where user can found out the details about the  countries list with some if the details
and to authenticate this add the token which you get in the response during login  put in the authrization then only you will recieve the response 

```
```json
[
    {
        "name": "United States Minor Outlying Islands",
        "capital": "Washington DC",
        "languages": [
            "English"
        ],
        "population": 300
    },
    {
        "name": "Turks and Caicos Islands",
        "capital": "Cockburn Town",
        "languages": [
            "English"
        ],
        "population": 38718
    },
   ...
]
```







