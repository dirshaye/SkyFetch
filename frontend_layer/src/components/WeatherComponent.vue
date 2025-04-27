<template>
    <div 
        :style="{ 
            backgroundImage: `url(${require('@/assets/your-local-image.jpg')})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#ffffff',
        }"
    >
        <header style="background: linear-gradient(90deg, #1e3a8a, #3b82f6); width: 100%; padding: 20px; color: white; text-align: center; font-size: 24px; font-weight: bold; position: fixed; top: 0; z-index: 10;">
            SkyFetch
        </header>
        <div class="content-wrapper" style="margin-top: 150px; display: flex; flex-direction: column; align-items: center; gap: 20px;">
            <div class="input-group">
                <input 
                    v-model="city" 
                    class="form-control" 
                    placeholder="Enter city name" 
                    aria-label="City name" 
                />
                <button 
                    class="btn btn-primary" 
                    @click="getWeather">
                    Get Weather
                </button>
            </div>
            <div v-if="weather" class="card">
                <h2>Weather in {{ weather.city }}</h2>
                <p>Temperature: {{ weather.temperature }}</p>
                <p>Description: {{ weather.description }}</p>
                <p>Humidity: {{ weather.humidity }}%</p>
                <p>Wind Speed: {{ weather.windSpeed }} m/s</p>
            </div>
            <div v-if="error" class="alert alert-danger mt-4">{{ error }}</div>
        </div>
        <footer style="background: #1e293b; color: white; text-align: center; padding: 10px; position: fixed; bottom: 0; width: 100%; font-size: 14px;">
            MCBU January | © {{ new Date().getFullYear() }}
        </footer>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            city: '', // User input for the city
            weather: null, // Weather data
            error: null, // Error message
        };
    },
    methods: {
        async getWeather() {
            try {
                this.error = null; // Clear any existing errors
                const response = await axios.get(`http://localhost:8000/api/weather/${this.city}`); // REST API call
                this.weather = {
                    city: response.data.name,
                    temperature: `${response.data.main.temp}°C`,
                    description: response.data.weather[0].description,
                    humidity: response.data.main.humidity,
                    windSpeed: response.data.wind.speed,
                };
            } catch (err) {
                this.error = 'An error occurred while fetching the weather. Please try again.'; // Error message
            }
        },
    },
};
</script>

<style>
.card {
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(10px);
    color: #0ef8ca;
    border: none;
    border-radius: 15px;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.5);
    padding: 20px;
    font-family: 'Poppins', sans-serif;
    max-width: 500px;
    text-align: center;
}
.card h2 {
    font-size: 28px;
    margin: 15px 0;
    color: #5eead4;
}
.card p {
    font-size: 18px;
    margin: 5px 0;
    color: #c4f0e2;
}
.input-group {
    max-width: 600px;
    display: flex;
    gap: 10px;
}
.form-control {
    border-radius: 20px;
    padding: 10px 20px;
    font-size: 16px;
}
.btn {
    border-radius: 20px;
    background-color: #0d9488;
    color: white;
    padding: 10px 20px;
}
.btn:hover {
    background-color: #0f766e;
}
</style>
