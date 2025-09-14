// src/components/pedidos/StatusPill.tsx
import React from "react";
import type { PtStatus } from "../../services/status";

const COLORS: Record<PtStatus, { bg: string; text: string }> = {
  pendente:   { bg: "bg-yellow-100", text: "text-yellow-800" },
  preparando: { bg: "bg-amber-100",  text: "text-amber-800"  },
  pronto:     { bg: "bg-emerald-100",text: "text-emerald-800"},
  enviado:    { bg: "bg-blue-100",   text: "text-blue-800"   },
  cancelado:  { bg: "bg-red-100",    text: "text-red-700"    },
};

const LABELS: Record<PtStatus, string> = {
  pendente: "Pendente",
  preparando: "Preparando",
  pronto: "Pronto",
  enviado: "Enviado",
  cancelado: "Cancelado",
};

export default function StatusPill({ status }: { status: PtStatus }) {
  const c = COLORS[status] ?? COLORS.pendente;
  const label = LABELS[status] ?? status;
  return (
    <span className={`px-2 py-0.5 rounded text-xs ${c.bg} ${c.text}`}>
      {label}
    </span>
  );
}