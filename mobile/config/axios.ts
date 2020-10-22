import axios, { AxiosRequestConfig } from 'axios';
import { getToken } from '../storage/token';
import appConfig from '../app.json';

const instance = axios.create({
  baseURL: appConfig.apiEndpoint,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  }
});

instance.interceptors.request.use(async (config: AxiosRequestConfig) => {
  const token = await getToken();

  config.headers.common['Authorization'] = token ? `Bearer ${token}` : null;

  return config;
});

export default instance;
