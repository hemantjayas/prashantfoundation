
const axios = require('axios');


const getCountry = async (req, res) => {
    const countryName = req.params.name;

    try {
        // Make request to external API to fetch country data
        const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);



        // Extract required data from response
        const countryData = {
            name: response.data[0].name.common,
            capital: response.data[0].capital,
            population: response.data[0].population,
            languages: Object.values(response.data[0].languages),
        };

        res.json(countryData);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = getCountry

