import axios from "axios"

const api = axios.create({
  baseURL: "https://api-payflow-app-production.up.railway.app"
});

export { api };