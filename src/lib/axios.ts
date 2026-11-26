import axios from "axios";

//AXIOS INSTANCE

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
});

//REQUEST INTERCEPTORS
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// RESPONSE INTERCEPTORS

api.interceptors.response.use(
  (respnose) => {
    return respnose;
  },
  (error) => {
    if (error.response?.status === 401) {
      console.log("Session Expired");
    }
    return Promise.reject(error);
  },
);

export default api;
