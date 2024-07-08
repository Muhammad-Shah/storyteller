import axios from "axios";

const api = axios.create({
  baseURL: 'https://storyteller-beta.vercel.app',
});

export default api;
