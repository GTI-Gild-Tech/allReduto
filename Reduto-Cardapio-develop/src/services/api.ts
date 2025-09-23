import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const ASSETS_BASE = import.meta.env.VITE_ASSETS_BASE_URL;

export const assetUrl = (path: string) =>
  new URL(path, ASSETS_BASE).href;

export default api;
