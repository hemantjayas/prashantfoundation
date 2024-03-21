// controllers/countryListController.js
const axios = require('axios');

// Function to fetch country list based on currency, region, or language with pagination
const getCountryList = async (req, res) => {
  const { currency, region, language, page = 1 } = req.query;
  const pageSize = 10; // Number of countries per page
  const offset = (page - 1) * pageSize;

  try {
    // Construct the API URL based on query parameters
    let apiUrl = `https://restcountries.com/v3.1/all?limit=${pageSize}&skip=${offset}`;
    if (currency) {
      apiUrl = `https://restcountries.com/v3.1/currency/${currency}?limit=${pageSize}&skip=${offset}`;
    } else if (region) {
      apiUrl = `https://restcountries.com/v3.1/region/${region}?limit=${pageSize}&skip=${offset}`;
    } else if (language) {
      apiUrl = `https://restcountries.com/v3.1/lang/${language}?limit=${pageSize}&skip=${offset}`;
    }

    // Make request to external API to fetch country list
    const response = await axios.get(apiUrl);

    // Extract required data from response
    const countryList = response.data.map(country => ({
      name: country.name.common,
      capital: country.capital[0],
      languages: Object.values(country.languages),
      population: country.population,
    }));

    res.json(countryList);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = getCountryList

