import axios from 'axios';
import {errorMessage} from '@/utils/helpers';

axios.defaults.baseURL = import.meta.env.VITE_API_URL
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  const response = error.response
  const message = errorMessage(response.data.error)

  return Promise.reject({
    message,
    status: response.status
  });
});
