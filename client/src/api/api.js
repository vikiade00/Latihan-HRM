import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api", // Ganti dengan base URL API Anda
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
