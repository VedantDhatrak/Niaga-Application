import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'http://192.168.29.73:5000/api';

// Create axios instance with default config
const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add token to requests if it exists
api.interceptors.request.use(
    async (config) => {
        try {
            const token = await AsyncStorage.getItem('userToken');
            console.log('Token from storage:', token); // Debug log
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
                console.log('Request headers:', config.headers); // Debug log
            }
            return config;
        } catch (error) {
            console.error('Error getting token:', error);
            return config;
        }
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add response interceptor for better error handling
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        console.log('API Error:', error.response?.status, error.response?.data); // Debug log
        if (error.response?.status === 401) {
            // Token expired or invalid
            await AsyncStorage.removeItem('userToken');
            // You might want to navigate to login screen here
        }
        return Promise.reject(error);
    }
);

// Products API calls
export const productsApi = {
    getAll: (params) => api.get('/products', { params }),
    getById: (id) => api.get(`/products/${id}`),
    create: (data) => api.post('/products', data),
    update: (id, data) => api.put(`/products/${id}`, data),
    delete: (id) => api.delete(`/products/${id}`)
};

// Favorites API calls
export const favoritesApi = {
    getAll: () => api.get('/favorites'),
    add: (productId) => api.post(`/favorites/${productId}`),
    remove: (productId) => api.delete(`/favorites/${productId}`)
};

// Cart API calls
export const cartApi = {
    getAll: () => api.get('/cart'),
    add: (productId, quantity = 1) => api.post(`/cart/${productId}`, { quantity }),
    updateQuantity: (productId, quantity) => api.patch(`/cart/${productId}`, { quantity }),
    remove: (productId) => api.delete(`/cart/${productId}`)
};

// Orders API calls
export const ordersApi = {
    create: (shippingAddress) => api.post('/orders/checkout', { shippingAddress }),
    getAll: () => api.get('/orders/my-orders'),
    getById: (orderId) => api.get(`/orders/${orderId}`)
};

// Helper function to check token status
export const checkToken = async () => {
    try {
        const token = await AsyncStorage.getItem('userToken');
        console.log('Current token:', token);
        return !!token;
    } catch (error) {
        console.error('Error checking token:', error);
        return false;
    }
};

export default api; 