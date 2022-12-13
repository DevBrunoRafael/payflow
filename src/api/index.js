import axios from "axios"

const api = axios.create({
  baseURL: "htpps://api-payflow-app-production.up.railway.app"
});

export { api };