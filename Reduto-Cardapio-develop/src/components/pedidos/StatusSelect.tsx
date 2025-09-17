// src/components/pedidos/StatusSelect.tsx
import React from "react";
import type { PtStatus } from "../../services/status";

const OPTIONS: { value: PtStatus; label: string }[] = [
  { value: "pendente",    label: "Pendente" },
  { value: "preparando",  label: "Preparando" },
  { value: "pronto",      label: "Pronto" },
  { value: "enviado",     label: "Enviado" },
];

type Props = {
  value: PtStatus;
  onChange: (v: PtStatus) => void | Promise<void>;
  disabled?: boolean;
  className?: string;
};

export default function StatusSelect({ value, onChange, disabled, className }: Props) {
  return (
    <select
      value={value}
      disabled={disabled}
      onChange={(e) => onChange(e.target.value as PtStatus)}
      className={`rounded border px-2 py-1 text-sm ${className ?? ""}`}
    >
      {OPTIONS.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}
