const soap = require('soap');
const http = require('http');
const path = require('path');
const { getWeatherData } = require('../dis_api_katmani/openweather'); // OpenWeather logic
const { formatWeatherData } = require('../servis_katmani/utils'); // Utility functions

// Define the SOAP service
const service = {
    WeatherService: {
        WeatherPort: {
            GetWeather: async (args) => {
                console.log(`SOAP request received for city: ${args.city}`);
                try {
                    // Fetch weather data from OpenWeather API
                    const weatherData = await getWeatherData(args.city);

                    // Format the data using the service layer
                    const formattedData = formatWeatherData(weatherData);

                    // Return the formatted data in SOAP response format
                    return {
                        temperature: formattedData.temperature,
                        description: formattedData.description,
                        humidity: `${formattedData.humidity}%`,
                        windSpeed: `${formattedData.windSpeed} m/s`,
                    };
                } catch (error) {
                    console.error('Error fetching weather data:', error.message);
                    return {
                        temperature: 'N/A',
                        description: 'Error fetching weather data',
                        humidity: 'N/A',
                        windSpeed: 'N/A',
                    };
                }
            },
        },
    },
};

// Load the WSDL file
const wsdlPath = path.join(__dirname, 'weather.wsdl');
const xml = require('fs').readFileSync(wsdlPath, 'utf8');

// Create and start the SOAP server
const server = http.createServer(() => {});
server.listen(8001, () => {
    console.log('SOAP server running at http://localhost:8001/soap');
});
soap.listen(server, '/soap', service, xml);
