import { REACT_APP_API_BASE_URL } from "./../../Statics";
import axios from "axios";

const api = axios.create({
  baseURL: REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Debugging baseURL


// Request interceptor
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle errors globally
    console.error("API Error:", error || error);
    return Promise.reject(error);
  }
);

export default api;
