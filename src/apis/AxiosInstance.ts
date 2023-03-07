import axios from "axios";

const instance = axios.create({
  // baseURL: "http://182.230.187.241:8080",
  // baseURL: "http://127.0.0.1:8080",
  baseURL: "http://100.101.113.79:8080",
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export { instance };
