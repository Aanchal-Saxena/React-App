import { countriesInstance, postsInstance } from "./axios-interceptor";

// GET method for Countries instance
export const getCountryDetails = (subUrl) => {
  return countriesInstance.get(subUrl);
};

// GET method for Posts instance
export const getPosts = (subUrl) => {
  return postsInstance.get(subUrl);
};


