import axios from "axios";

export const backendInstance = axios.create({
  baseURL: "https://localhost:3000/api", // Replace with your base URL
  headers: {
    "Content-Type": "application/json",
  },
});
