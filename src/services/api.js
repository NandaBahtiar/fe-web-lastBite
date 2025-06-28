import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.example.com', // Ganti dengan URL API Anda
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
