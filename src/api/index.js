import axios from "axios"

const api = axios.create({
  baseURL: "https://web-production-673f.up.railway.app"
});

export { api };