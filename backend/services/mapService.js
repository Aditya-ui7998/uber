const axios = require('axios');

module.exports.getAddressCoordinate = async (address) => {
    const apiKey = process.env.HERE_MAPS_API;
    const url = `https://geocode.search.hereapi.com/v1/geocode?q=${encodeURIComponent(address)}&apiKey=${apiKey}`;

    try {
        const response = await axios.get(url);
        // Check if the response contains data
        if (response.data.items && response.data.items.length > 0) {
            const location = response.data.items[0].position; // HERE Maps uses 'position'
            return {
                lat: location.lat,
                lng: location.lng
            };
        } else {
            throw new Error('No results found for the provided address.');
        }
    } catch (error) {
        console.error('Error fetching coordinates:', error.message || error);
        throw new Error('Failed to fetch coordinates. Please try again later.');
    }
};
