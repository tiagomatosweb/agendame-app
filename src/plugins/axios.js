import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_URL
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error.response.data);
});
