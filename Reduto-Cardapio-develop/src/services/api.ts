import axios from "axios";

// Se a variável VITE_ não existir (ex: no Netlify), ele assume a rota do proxy
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api",
});

export const ASSETS_BASE = import.meta.env.VITE_ASSETS_BASE_URL || "/uploads";

export const assetUrl = (path: string) => {
  // Blinda a função determinando a origem absoluta, evitando crashes no navegador em produção
  const baseUrl = ASSETS_BASE.startsWith("http")
    ? ASSETS_BASE
    : `${window.location.origin}${ASSETS_BASE.startsWith("/") ? "" : "/"}${ASSETS_BASE}`;
    
  return new URL(path, baseUrl).href;
};

export default api;