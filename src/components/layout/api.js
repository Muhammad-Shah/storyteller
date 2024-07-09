import axios from "axios";

const api = axios.create({
  baseURL:
    // "http://localhost:8000" ||
    "https://storyteller-liart.vercel.app/" ||
    "https://storyteller-git-master-muhammad-shahs-projects.vercel.app/" ||
    "https://storyteller-60m87xh7q-muhammad-shahs-projects.vercel.app/",
});

export default api;
