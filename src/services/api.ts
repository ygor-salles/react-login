import axios from "axios";
import { getUserLocalStorage } from "../AuthProvider/util";

export const Api = axios.create({
  baseURL: "https://reqres.in/api/",
});

Api.interceptors.request.use(
  (config) => {
    const user = getUserLocalStorage();

    if (config.headers) config.headers.Authorization = user?.token;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
