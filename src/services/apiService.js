import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: parseInt(process.env.VUE_APP_API_TIMEOUT),
  headers: {
    'Content-Type': 'application/json'
  }
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Ошибка при выполнении запроса:', error);
    return Promise.reject(error);
  }
);

export const apiService = {
  get(endpoint, params = {}) {
    return instance.get(endpoint, { params });
  },
  post(endpoint, data) {
    return instance.post(endpoint, data);
  },
  put(endpoint, data) {
    return instance.put(endpoint, data);
  },
  delete(endpoint) {
    return instance.delete(endpoint);
  },
};
