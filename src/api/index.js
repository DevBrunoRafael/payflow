import axios from "axios"

const api = axios.create({
  baseURL: "https://backend-payflow-app.herokuapp.com"
});

export { api };