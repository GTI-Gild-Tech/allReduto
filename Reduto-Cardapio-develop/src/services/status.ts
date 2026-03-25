// src/services/status.ts

// Status em PT para o front
export type PtStatus =
  | "pendente"
  | "preparando"
  | "pronto"
  | "enviado"
  | "cancelado";

// Status que a API usa (ajuste se necessário)
export type ApiStatus =
  | "pending"
  | "processing"
  | "delivered"
  | "shipped"
  | "canceled";

const ptToApiMap: Record<PtStatus, ApiStatus> = {
  pendente: "pending",
  preparando: "processing",
  pronto: "delivered", // mapeie conforme seu fluxo
  enviado: "shipped",
  cancelado: "canceled",
};

const apiToPtMap: Record<ApiStatus, PtStatus> = {
  pending: "pendente",
  processing: "preparando",
  delivered: "pronto",
  shipped: "enviado",
  canceled: "cancelado",
};

export function toApiStatus(pt: PtStatus): ApiStatus {
  return ptToApiMap[pt];
}

export function fromApiStatus(api?: ApiStatus | string): PtStatus {
  if (!api) return "pendente";
  const key = api as ApiStatus;
  return apiToPtMap[key] ?? "pendente";
}