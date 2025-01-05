const axios = require('axios');

const API_KEY = '2060d2532f3fd1483558be1610ab1cae'; // Replace with your OpenWeatherMap API key

const fetchWeatherData = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch weather data');
    }
};

module.exports = { fetchWeatherData };
