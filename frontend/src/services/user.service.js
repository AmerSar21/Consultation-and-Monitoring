import axiosInstance from '../api/axiosInstance.js';

export const createUser = async (user) => {
    if (!newUser.name || !newUser.email || !newUser.password || !newUser.role) {
        return { success: false, message: "Please fill in all fields." };
    }
    const response = await axiosInstance.post('/users', user);
    const data = await response.data;

    return { success: true, message: "Registered successfully", data : data };
};

export const getUsers = async () => {
    const response = await axiosInstance.get('/users', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

export const updateUser = async (id, user) => {
    const response = await axiosInstance.put(`/users/${id}`, user);
    return response.data;
};

export const deleteUser = async (id) => {
    await axiosInstance.delete(`/users/${id}`);
};