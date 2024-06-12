import axios from 'axios';
import useLocalStorage from '../hooks/useLocalStorage';
import { LOCAL_STORAGE_KEYS } from '../constants/LOCAL_STORAGE_KEYS.JS';

export const API = axios.create({ baseURL: 'http://localhost:5000' });

// API.interceptors.request.use((config) => {
//   const { getItem } = useLocalStorage();
//   const { token } = getItem(LOCAL_STORAGE_KEYS.AUTH_KEY);
//   config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

API.interceptors.request.use((config) => {
  const { getItem } = useLocalStorage();
  const authKey = getItem(LOCAL_STORAGE_KEYS.AUTH_KEY);
  if (authKey && authKey.token) {
    config.headers.Authorization = `Bearer ${authKey.token}`;
  }
  return config;
});
