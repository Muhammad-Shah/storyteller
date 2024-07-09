import axios from "axios";

const api = axios.create({
  baseURL:
    "http://localhost:8000" || "https://storyteller-coral.vercel.app/api",
});

export default api;
