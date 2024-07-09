import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://storyteller-liart.vercel.app/" // Replace with correct production URL
      : "http://127.0.0.1:8000", // Local development URL
});

export default api;
