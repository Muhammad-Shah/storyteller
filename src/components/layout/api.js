import axios from "axios";

const api = axios.create({
  baseURL: "https://storyteller-coral.vercel.app/api",
});

export default api;
