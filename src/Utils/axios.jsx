import axios from "axios";

const axiosInstance = axios.create({});

axiosInstance.interceptors.request.use(
    (config) => {
        config.headers.Authorization = 'Bearer token';
        return config;
    },
    (error) => {
         return error.getMessage();
    },

);
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return error.getMessage();
    },
);

export default axiosInstance;