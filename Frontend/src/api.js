import axios from "axios";

const API_BASE_URL = "https://todo-backend-qfx5.onrender.com";

export const api = axios.create({
  baseURL: API_BASE_URL,
});
