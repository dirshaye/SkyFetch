// Format weather data into a common structure
const formatWeatherData = (data) => ({
    city: data.name,
    temperature: `${data.main.temp}°C`,
    description: data.weather[0].description,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
});

// Error handling utility
const handleError = (error) => {
    console.error('Error:', error.message);
    return {
        error: true,
        message: 'An error occurred while processing the request.',
    };
};

module.exports = { formatWeatherData, handleError };
