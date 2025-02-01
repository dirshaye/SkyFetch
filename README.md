# SkyFetch - Real-Time Weather Application

## Project Description
SkyFetch is a real-time weather application designed with a **6-layer Service-Oriented Architecture (SOA)** to ensure modularity, scalability, and efficient data exchange. Users can input a city name to fetch live weather updates retrieved from the OpenWeather API. The application leverages multiple service layers, including SOAP and gRPC, to enhance interoperability and structured service communication.

## Features
- **Modern User Interface**: Developed with Vue.js for a responsive and intuitive user experience.
- **Application Layer**: Built using Express.js to manage data routing and API interactions.
- **Real-Time Weather Data Integration**: Fetches weather data from the OpenWeather API.
- **6-Layer SOA Architecture for Scalability & Maintainability**:
  - **Frontend Layer**: User interface for weather queries.
  - **Application Layer**: Handles request processing and routing.
  - **Service Layer**: Transforms and validates data for consistency.
  - **External API Layer**: Manages integration with the OpenWeather API.
  - **SOAP Layer**: Ensures structured communication using SOAP protocol.
  - **gRPC Layer**: Provides high-performance RPC communication.

## Installation

### Prerequisites
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

### Starting the Backend Services
```bash
node application_layer/index.js  # Runs the core backend service
node soap_layer/soap.js          # Starts the SOAP service
node grpc_layer/grpcserver.js    # Runs the gRPC server
```

### Starting the Frontend
```bash
cd frontend_layer
npm run serve
```

## Usage
Once all services are running, open your browser and navigate to [http://localhost:8080](http://localhost:8080) to interact with the application.

## Project Architecture
1. **Frontend Layer**: Vue.js-based user interface for querying weather data.
2. **Application Layer**: Express.js-based backend service handling requests and responses.
3. **Service Layer**: Data transformation and validation layer to maintain integrity.
4. **External API Layer**: Interfaces with OpenWeather API for real-time data retrieval.
5. **SOAP Layer**: Enables structured and interoperable communication using SOAP.
6. **gRPC Layer**: Facilitates fast and efficient remote procedure calls (RPC).

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -m 'Add new feature'`).
4. Push to your branch (`git push origin feature-branch`).
5. Open a pull request.

## License
This project is open-source and available under the MIT License.

