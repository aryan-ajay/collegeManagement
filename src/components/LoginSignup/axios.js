import axios from 'axios';
import { useNavigate } from 'react-router-dom';

console.log("Base URL:", import.meta.env.VITE_API_BASE_URL);

  const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
    headers: {
        'Content-Type': 'application/json',
    }
  });


  axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // Response interceptor to handle token expiration
  axiosInstance.interceptors.response.use(
    (response) => {
      // Return the response if everything is fine
      return response;
    },
    (error) => {
      // Check if the error response is a 401 with a specific message
      if (error.response.status === 401 && error.response.data.message === "JWT token is expired") {
        // Remove the token from localStorage
        localStorage.removeItem('token');

        // Redirect to the login page using window.location
        window.location.href = '/login';

        // Optionally, you can return a specific error message or handle the promise rejection
        return Promise.reject("Session expired. Please log in again.");
      } 
      // else if(error.response && error.response.status === 401 && error.response.data.message === "Full authentication is required to access this resource") {
      //  // Remove the token from localStorage
      //  localStorage.removeItem('token');

      //  // Redirect to the login page
      //  const navigate = useNavigate();
      //  navigate('/login');

      //  // Optionally, you can return a specific error message or handle the promise rejection
      //  return Promise.reject("Session expired. Please log in again.");
      // }

      // Return any other errors
      return Promise.reject(error);
    }
  );
    


  
  export default axiosInstance;