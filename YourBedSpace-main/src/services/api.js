import axios from 'axios';
import { API_URL } from '../constants';

const api = axios.create({
  baseURL: API_URL, // http://localhost:8080
});

// Set Basic Auth header
export const setAuthHeader = (email, password) => {
  const token = btoa(`${email}:${password}`);
  api.defaults.headers.common['Authorization'] = `Basic ${token}`;
};

// Clear auth header
export const clearAuthHeader = () => {
  delete api.defaults.headers.common['Authorization'];
};

// Auth Endpoints
export const register = async (data) => {
  try {
    const response = await api.post('/api/users/register', data);
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Registration failed';
  }
};

export const login = async (data) => {
  try {
    const response = await api.post('/api/users/login', data);
    setAuthHeader(data.email, data.password);
    localStorage.setItem('user', JSON.stringify({ email: data.email }));
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Login failed';
  }
};

export const logout = () => {
  clearAuthHeader();
  localStorage.removeItem('user');
};

// BedSpace Endpoints
export const createBedSpace = async (data) => {
  try {
    const response = await api.post('/api/bedspaces/addBed', data);
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Failed to create bedspace';
  }
};

export const getAllBedSpaces = async () => {
  try {
    const response = await api.get('/api/bedspaces/all');
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Failed to fetch bedspaces';
  }
};

export const getBedSpaceById = async (id) => {
  try {
    const response = await api.get(`/api/bedspaces/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Failed to fetch bedspace details';
  }
};
