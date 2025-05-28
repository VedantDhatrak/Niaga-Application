import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'http://192.168.29.73:5000/api';

export const register = async (name, email, password) => {
    try {
        const response = await fetch(`${API_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Registration failed');
        }

        // Store the token
        await AsyncStorage.setItem('userToken', data.token);
        return data;
    } catch (error) {
        throw error;
    }
};

export const login = async (email, password) => {
    try {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Login failed');
        }

        // Store the token
        await AsyncStorage.setItem('userToken', data.token);
        return data;
    } catch (error) {
        throw error;
    }
};

export const logout = async () => {
    try {
        await AsyncStorage.removeItem('userToken');
    } catch (error) {
        throw error;
    }
};

export const getToken = async () => {
    try {
        return await AsyncStorage.getItem('userToken');
    } catch (error) {
        throw error;
    }
}; 