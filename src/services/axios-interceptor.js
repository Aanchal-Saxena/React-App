import axios from "axios";
import apiUrls from "../utils/api-urls"; // Import the API URLs configuration

// Create Axios instances for each base URL
export const countriesInstance = axios.create({
  baseURL: apiUrls.countryDetails.baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const postsInstance = axios.create({
  baseURL: apiUrls.postsUrl.baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Error handling interceptor
const setupInterceptors = (instance) => {
  instance.interceptors.response.use(
    (response) => response, // Pass successful responses
    (error) => {
      console.error("API Error:", error.response || error.message);
      return Promise.reject(
        error.response?.data?.message || "Something went wrong with the API."
      );
    }
  );
};

// Apply interceptors
setupInterceptors(countriesInstance);
setupInterceptors(postsInstance);
