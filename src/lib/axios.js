import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://blueviolet-grasshopper-101010.hostingersite.com" : "https://blueviolet-grasshopper-101010.hostingersite.com",
  withCredentials: true,
});
