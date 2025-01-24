# Real-Time Weather Application

## Project Description
The Real-Time Weather Application is a weather app developed using a 6-layered Service-Oriented Architecture (SOA). Users can input a city name to view real-time weather information retrieved from the OpenWeather API.

## Features
- **Modern User Interface**: Built with Vue.js.
- **Application Layer**: Developed using Express.js.
- **Real-Time Weather Data Integration**: Powered by the OpenWeather API.
- **6-Layer SOA Architecture**:
  - **Frontend Layer**: User interface.
  - **Application Layer**: Data processing and routing.
  - **Service Layer**: Data transformation and validation.
  - **External API Layer**: Integration with the OpenWeather API.
  - **SOAP Layer and gRPC Layer**: Protocol integration.

## Installation

### Requirements
- Node.js 16 or higher
- NPM or Yarn
- OpenWeather API Key

### Installing Dependencies

#### Backend
```bash
npm install express cors axios soap @grpc/grpc-js @grpc/proto-loader
```

#### Frontend
```bash
cd frontend_layer
npm install
```

## Running the Application

### Starting the Backend
```bash
node application_layer/index.js
node soap_layer/soap.js
node grpc_layer/grpcserver.js
```

### Starting the Frontend
```bash
cd frontend_layer
npm run serve
```

## Usage
Open your browser and navigate to [http://localhost:8080](http://localhost:8080) to view the application.

## Project Layers
1. **Frontend Layer**: The user interface where users can query the weather.
2. **Application Layer**: Processes data and routes information retrieved from the OpenWeather API.
3. **Service Layer**: Helper functions for transforming and validating data.
4. **External API Layer**: Connects to the OpenWeather API.
5. **SOAP and gRPC Layers**: Handles protocol integration.

## Contributing
To contribute, create a fork, make your changes, and submit a pull request. All contributions are welcome!

