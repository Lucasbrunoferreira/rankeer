import axios, { AxiosRequestConfig } from 'axios';
import { getToken } from 'helpers/localStorage/token';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  }
});

instance.interceptors.request.use(async (config: AxiosRequestConfig) => {
  const token = getToken();

  config.headers.common['Authorization'] = token ? `Bearer ${token}` : null;

  return config;
});

export default instance;
