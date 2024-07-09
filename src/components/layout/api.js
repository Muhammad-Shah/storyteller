import axios from "axios";

const api = axios.create({
  baseURL: "https://storyteller-coral.vercel.app/api || http://127.0.0.1:8000/",
});

export default api;
