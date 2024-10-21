import axiosInstance from '../api/axiosInstance.js';

export const authLogin = async (user) => {
    const response = await axiosInstance.post('/auth', user);
    const result = await response.data;

    localStorage.setItem("token", result.token);

    if (!result.success) return { success: false, message: result.message };
    return { success: true, message: result.message, token: result.token };
};

export const decodeToken = async (token) => {
    const response = await axiosInstance.post('/auth/decode', token);
    const result = await response.data;

    if (!result.success) return { success: false, message: result.message };
    return { user: result, success: true, message: result.message };
};