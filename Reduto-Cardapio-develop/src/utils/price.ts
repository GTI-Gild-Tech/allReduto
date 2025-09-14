// src/utils/price.ts
export function toCents(value: unknown): number {
  if (value == null) return 0;
  if (typeof value === "number") {
    // Inteiro grande (>=1000) provavelmente já está em centavos
    if (Number.isInteger(value) && Math.abs(value) >= 1000) return value;
    return Math.round(value * 100); // reais -> centavos
  }
  const s = String(value).trim();

  const onlyNums = s
    .replace(/[^\d,.-]/g, "")       // tira símbolos/moeda
    .replace(/\.(?=\d{3}(\D|$))/g, "") // remove milhares
    .replace(",", ".");                // vírgula -> ponto

  const n = Number(onlyNums);
  if (!Number.isFinite(n)) return 0;

  if (Number.isInteger(n) && Math.abs(n) >= 1000) return n;
  return Math.round(n * 100);
}

export function formatBRL(cents: number): string {
  const v = Number.isFinite(cents) ? cents : 0;
  return (v / 100).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function sizeLabelOf(size: unknown): string {
  const s = String(size ?? "").trim();
  if (!s) return "";
  const dict: Record<string, string> = {
    unico: "Único",
    único: "Único",
    u: "Único",
    p: "P",
    m: "M",
    g: "G",
    pequeno: "P",
    medio: "M",
    médio: "M",
    grande: "G",
  };
  const key = s.toLowerCase();
  return dict[key] ?? s;
}