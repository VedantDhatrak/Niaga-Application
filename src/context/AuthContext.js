import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login as apiLogin, register as apiRegister, logout as apiLogout, getToken } from '../api/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        // Check for stored token on app start
        checkToken();
    }, []);

    const checkToken = async () => {
        try {
            const token = await getToken();
            setUserToken(token);
        } catch (error) {
            console.log('Error checking token:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const login = async (email, password) => {
        try {
            const data = await apiLogin(email, password);
            setUserToken(data.token);
            setUserInfo(data.user);
            return data;
        } catch (error) {
            throw error;
        }
    };

    const register = async (name, email, password) => {
        try {
            const data = await apiRegister(name, email, password);
            setUserToken(data.token);
            setUserInfo(data.user);
            return data;
        } catch (error) {
            throw error;
        }
    };

    const logout = async () => {
        try {
            await apiLogout();
            setUserToken(null);
            setUserInfo(null);
        } catch (error) {
            throw error;
        }
    };

    return (
        <AuthContext.Provider
            value={{
                isLoading,
                userToken,
                userInfo,
                login,
                register,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

// const { userInfo } = useAuth();
// console.log(userInfo.id); // This will show the user's unique ID 