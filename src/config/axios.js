import axios from 'axios';
import { baseUrl } from '@/config/env';

axios.defaults.baseURL = baseUrl;
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';

// 请求拦截器
axios.interceptors.request.use((config) => {
  return config;
}, error => {
  Promise.reject(error);
});

// 响应拦截器
axios.interceptors.response.use((response) => {
  return response.data.response;
}, (error) => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        window.location.href = '#/login';
        break;
      default:
        break;
    }
  }
  return error;
});
export default axios;