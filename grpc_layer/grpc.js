const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');
const { getWeatherData } = require('../dis_api_katmani/openweather'); // OpenWeather logic
const { formatWeatherData } = require('../servis_katmani/utils'); // Utility functions

// Load proto file
const PROTO_PATH = path.join(__dirname, 'weather.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const weatherProto = grpc.loadPackageDefinition(packageDefinition);

// Implement the gRPC service
const WeatherService = {
    GetWeather: async (call, callback) => {
        console.log(`Received gRPC request for city: ${call.request.city}`);
        try {
            // Fetch weather data from OpenWeather API
            const weatherData = await getWeatherData(call.request.city);

            // Format the data using the service layer
            const formattedData = formatWeatherData(weatherData);

            // Return the formatted data
            callback(null, {
                temperature: formattedData.temperature,
                description: formattedData.description,
                humidity: `${formattedData.humidity}%`,
                windSpeed: `${formattedData.windSpeed} m/s`,
            });
        } catch (error) {
            console.error('Error fetching weather data:', error.message);
            callback({
                code: grpc.status.INTERNAL,
                message: 'Error fetching weather data.',
            });
        }
    },
};

// Start the gRPC server
function startServer() {
    const server = new grpc.Server();
    server.addService(weatherProto.WeatherService.service, WeatherService);
    const PORT = 8002;

    server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
        if (err) {
            console.error(`Error starting gRPC server: ${err.message}`);
            return;
        }
        console.log(`gRPC server running on port ${port}`);
        server.start();
    });
}

startServer();
