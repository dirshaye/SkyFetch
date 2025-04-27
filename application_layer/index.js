const express = require('express');
const cors = require('cors');
const { fetchWeatherData } = require('../external_api_layer/openweather'); // Fetch weather data logic

const app = express();
const PORT = 8000;

app.use(cors());

// Example middleware to simulate logging for requests (demonstrates additional layer responsibilities)
app.use((req, res, next) => {
    console.log(`[LOG]: ${req.method} request to ${req.url}`);
    next();
});

// Main Endpoint: Fetch and format weather data for the frontend
app.get('/api/weather/:city', async (req, res) => {
    const city = req.params.city;
    try {
        // Fetch raw weather data from external service
        const weatherData = await fetchWeatherData(city);

        // Format and structure the weather data
        const weatherResponse = {
            name: weatherData.name, // City name
            main: weatherData.main, // Temperature, pressure, and humidity
            weather: weatherData.weather.map(w => ({
                description: w.description,
                icon: w.icon,
            })),
            wind: weatherData.wind, // Wind speed and direction
        };

        res.json(weatherResponse); // Send formatted data to the frontend
    } catch (error) {
        console.error(`[ERROR]: Unable to fetch weather data for ${city}.`, error.message);
        res.status(500).json({ error: 'Error fetching weather data.' });
    }
});

// Additional example route for future API expansions (demonstrates extensibility)
app.get('/api/health', (req, res) => {
    res.json({ status: 'Application layer is running', uptime: process.uptime() });
});

// Example placeholder for business logic that could be added later
function exampleBusinessLogic(data) {
    // Simulates transformation or additional operations on data
    console.log('Processing data in the application layer:', data);
    return data;
}

// Start the server and display a message indicating the role of this layer
app.listen(PORT, () => {
    console.log(`Application Layer is running on http://localhost:${PORT}`);
    console.log('This layer manages routing, data processing, and communication between services.');
});
