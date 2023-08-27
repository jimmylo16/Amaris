import axios from "axios";

export const moviesAxiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/", // Replace with your base URL
  headers: {
    "Content-Type": "application/json",
  },
});
