import axios from "axios";

const api = axios.create({
  baseURL:
    // "http://localhost:8000" ||
    "https://storyteller-liart.vercel.app/api" ||
    "https://storyteller-git-master-muhammad-shahs-projects.vercel.app/api" ||
    "https://storyteller-60m87xh7q-muhammad-shahs-projects.vercel.app/api",
});

export default api;
