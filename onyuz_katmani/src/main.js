import 'weather-icons/css/weather-icons.css';
import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8001';
axios.defaults.headers.post['Content-Type'] = 'text/xml';



createApp(App).mount('#app')
