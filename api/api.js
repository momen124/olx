// src/api/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.example.com', // Replace with your actual API base URL
});

// Example API calls
export const login = (email, password) => api.post('/login', { email, password });
export const register = (userData) => api.post('/register', userData);
export const getListings = () => api.get('/listings');
export const createListing = (listingData) => api.post('/listings', listingData);
export const sendMessage = (messageData) => api.post('/messages', messageData);

export default api;

// This file centralizes all API calls using Axios for easy management and reuse.
