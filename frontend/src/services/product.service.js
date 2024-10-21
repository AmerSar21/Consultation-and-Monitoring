import axiosInstance from '../api/axiosInstance.js';

export const createProduct = async (product) => {
  const response = await axiosInstance.post('/products', product);
  return response.data;
};

export const getProducts = async () => {
  const response = await axiosInstance.get('/products');
  return response.data;
};

export const updateProduct = async (id, product) => {
  const response = await axiosInstance.put(`/products/${id}`, product);
  return response.data;
};

export const deleteProduct = async (id) => {
  await axiosInstance.delete(`/products/${id}`);
};