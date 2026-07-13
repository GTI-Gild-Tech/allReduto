import { Product } from "../cardapio/KanbanComponents";
import logoUrl from "../../assets/logo.png";

/* ── Design Tokens ────────────────────────────────────────────── */

export const TOKENS = {
  ink: "#1b2b22",
  cream: "#f6f1e4",
  verde: "#0f4c50",
  line: "rgba(27,43,34,0.18)",
  bege: "#9d825e",
  cardBg: "#fffdf8",
  descColor: "#5b6b5d",
  footerColor: "#7a8a7c",
};

/* ── Constantes de página (mm) ────────────────────────────────── */

export const MM_TO_PX = 96 / 25.4;
export const PAGE_W_MM = 210;
export const PAGE_H_MM = 297;
export const PAD_MM = 16;
const COL_GAP_MM = 8;
const SAFETY_PX = 30;
export const BLEED_MM = 0;

export const SHEET_W_MM = PAGE_W_MM + BLEED_MM * 2;
export const SHEET_H_MM = PAGE_H_MM + BLEED_MM * 2;

export const CONTENT_W_PX = (PAGE_W_MM - PAD_MM * 2) * MM_TO_PX;
export const CONTENT_H_PX = (PAGE_H_MM - PAD_MM * 3) * MM_TO_PX - SAFETY_PX;
export const COLUMN_W_PX =
  ((PAGE_W_MM - PAD_MM * 2 - COL_GAP_MM) / 2) * MM_TO_PX;

/* ── Helpers ──────────────────────────────────────────────────── */

export const PLACEHOLDER_IMG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23ece6d6'/%3E%3Ctext x='32' y='36' text-anchor='middle' fill='%23999' font-size='10' font-family='sans-serif'%3Esem foto%3C/text%3E%3C/svg%3E";

export const formatBRL = (v: number) =>
  (Number.isFinite(v) ? v : 0).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

export const formatTemperature = (temp?: string[] | string | null): string => {
  if (!temp) return "";
  const arr = Array.isArray(temp) ? temp : [temp];
  if (arr.length === 0) return "";
  return arr
    .map((t) => (t === "quente" ? "Quente" : "Gelado"))
    .join(" | ");
};

const COMMON_SIZES = ["PP", "P", "M", "G", "GG", "XG", "XGG"];

function formatSizeLabel(size: string): string {
  const s = size?.trim().toUpperCase();
  if (COMMON_SIZES.includes(s)) return `${size}`;
  return size ?? "Único";
}

function hasImage(p: Product): boolean {
  return !!p.imageUrl && p.imageUrl.trim() !== "";
}

function hasDesc(p: Product): boolean {
  return !!p.description?.trim();
}

function hasSinglePrice(p: Product): boolean {
  return !Array.isArray(p.sizes) || p.sizes.length <= 1;
}

function getCardVariant(p: Product): string {
  const img = hasImage(p);
  const desc = hasDesc(p);
  const single = hasSinglePrice(p);

  if (!img && !desc && single) return "compact-single-price";
  if (img && !desc) return "image-no-desc";
  if (!img && desc) return "no-image";
  if (!img && !desc) return "compact";
  return "default";
}

/* ── Brand Header ─────────────────────────────────────────────── */

export function buildBrandElement(): HTMLElement {
  const el = document.createElement("header");
  el.style.textAlign = "center";
  el.style.marginBottom = "10mm";
  el.style.flexShrink = "0";

  el.innerHTML = `
    <div style="letter-spacing:0.22em;text-transform:uppercase;font-size:11px;color:${TOKENS.verde};font-weight:600;font-family:'Inter',sans-serif">
      Coffee &amp; Office
    </div>
    <img src="${logoUrl}" alt="Reduto" style="padding-top:30px;width:420px;max-width:100%;height:auto;display:block;margin:0 auto 4px" crossorigin="anonymous" />
  `;
  return el;
}

/* ── Category Head ────────────────────────────────────────────── */

export function buildCategoryHeadElement(name: string): HTMLElement {
  const el = document.createElement("div");
  el.style.display = "flex";
  el.style.alignItems = "baseline";
  el.style.gap = "12px";
  el.style.marginBottom = "5mm";

  el.innerHTML = `
    <h2 style="font-family:'Retrokia',sans-serif;font-weight:600;font-size:26px;color:${TOKENS.verde};margin:0;white-space:nowrap">${name}</h2>
    <div style="flex:1;padding-bottom:5px;border-bottom:2px solid ${TOKENS.bege};transform:translateY(-5px)"></div>
  `;
  return el;
}

/* ── Price HTML ───────────────────────────────────────────────── */

function buildPriceHtml(product: Product): string {
  const sizes = Array.isArray(product.sizes) ? product.sizes : [];

  if (sizes.length === 0) {
    return `<div style="font-family:'Fraunces',serif;font-weight:700;font-size:16px;color:${TOKENS.verde};white-space:nowrap;background:${TOKENS.cream};border-radius:6px;padding:2px 6px">R$ 0,00</div>`;
  }

  if (sizes.length === 1) {
    return `<div style="font-family:'Fraunces',serif;font-weight:700;font-size:16px;color:${TOKENS.verde};white-space:nowrap;background:${TOKENS.cream};border-radius:6px;padding:2px 6px">${formatBRL(Number(sizes[0].price))}</div>`;
  }

  const rows = sizes
    .map(
      (s) => `
        <div style="display:flex;flex-direction:row;align-items:center;gap:5px;white-space:nowrap;background:${TOKENS.cream};border-radius:6px;padding:2px 6px">
          <span style="font-family:'Inter',sans-serif;font-size:12px;font-weight:600;letter-spacing:0.04em;text-transform:uppercase;color:${TOKENS.bege}">${formatSizeLabel(String(s.size))}</span>
          <span style="font-family:'Fraunces',serif;font-weight:700;font-size:14px;color:${TOKENS.verde}">${formatBRL(Number(s.price))}</span>
        </div>`,
    )
    .join("");

  return `<div style="display:flex;flex-direction:row;flex-wrap:wrap;row-gap:6px;column-gap:8px">${rows}</div>`;
}

/* ── Card Element ─────────────────────────────────────────────── */

export function buildCardElement(product: Product): HTMLElement {
  const variant = getCardVariant(product);
  const el = document.createElement("div");
  el.style.display = "flex";
  el.style.flexDirection = "column";
  el.style.gap = "3mm";
  el.style.padding = "4mm";
  el.style.border = `1px solid ${TOKENS.line}`;
  el.style.borderRadius = "10px";
  el.style.background = TOKENS.cardBg;

  const thumbHtml = hasImage(product)
    ? `<img src="${product.imageUrl}" crossorigin="anonymous" alt="${product.name}" style="width:22mm;height:22mm;flex-shrink:0;border-radius:8px;object-fit:cover;background:#ece6d6" />`
    : `<div style="width:22mm;height:22mm;flex-shrink:0;border-radius:8px;background:repeating-linear-gradient(45deg,#ece6d6,#ece6d6 6px,#e2dcc9 6px,#e2dcc9 12px)"></div>`;

  const descHtml = hasDesc(product)
    ? `<p style="font-size:12.5px;line-height:1.5;color:${TOKENS.descColor};margin:0">${product.description}</p>`
    : "";

  const tempText = formatTemperature(product.temperature);
  const tempHtml = tempText
    ? `<span style="font-size:11px;color:#797474;font-style:italic;margin-left:6px">${tempText}</span>`
    : "";

  const nameHtml = `<p style="font-family:'Inter',sans-serif;font-weight:600;font-size:16px;margin:0 0 3px">${product.name}${tempHtml}</p>`;

  const priceHtml = buildPriceHtml(product);

  if (variant === "compact-single-price") {
    el.innerHTML = `
      <div style="display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%">
        ${nameHtml}
        <div>${priceHtml}</div>
      </div>
    `;
    return el;
  }

  if (variant === "compact") {
    el.innerHTML = `
      <div style="display:flex;align-items:flex-start;gap:12px">
        <div style="flex:1;min-width:0;align-self:center;width:100%">${nameHtml}</div>
      </div>
      <div style="display:flex;justify-content:flex-end;align-items:center;gap:16px;padding-top:3mm">${priceHtml}</div>
    `;
    return el;
  }

  if (variant === "image-no-desc") {
    el.innerHTML = `
      <div style="display:flex;align-items:center;gap:12px">
        ${thumbHtml}
        <div style="flex:1;min-width:0;align-self:center;width:100%">
          ${nameHtml}
          <div style="display:flex;justify-content:flex-end;align-items:center;gap:16px;padding-top:3mm">${priceHtml}</div>
        </div>
      </div>
    `;
    return el;
  }

  if (variant === "no-image") {
    el.innerHTML = `
      <div style="display:flex;align-items:flex-start;gap:12px">
        <div style="flex:1;min-width:0">
          ${nameHtml}
          ${descHtml}
        </div>
      </div>
      <div style="display:flex;justify-content:flex-end;align-items:center;gap:16px;padding-top:3mm;border-top:1px dashed ${TOKENS.line}">${priceHtml}</div>
    `;
    return el;
  }

  // default: has image + has description
  el.innerHTML = `
    <div style="display:flex;align-items:flex-start;gap:12px">
      ${thumbHtml}
      <div style="flex:1;min-width:0">
        ${nameHtml}
        ${descHtml}
      </div>
    </div>
    <div style="display:flex;justify-content:flex-end;align-items:center;gap:16px;padding-top:3mm;border-top:1px dashed ${TOKENS.line}">${priceHtml}</div>
  `;
  return el;
}

/* ── Footer ───────────────────────────────────────────────────── */

export function buildFooterElement(): HTMLElement {
  const el = document.createElement("footer");
  el.style.marginTop = "auto";
  el.style.paddingTop = "6mm";
  el.style.borderTop = `1px dashed ${TOKENS.line}`;
  el.style.fontSize = "11px";
  el.style.color = TOKENS.footerColor;
  el.style.textAlign = "center";
  el.style.flexShrink = "0";
  el.textContent =
    "Endereço: Rua Manoel Clementino, 1201, Centro · Instagram: @redutocofficepnz · Telefone: (87) 9 9610-8222";
  return el;
}

/* ── Medição ──────────────────────────────────────────────────── */

export function measure(container: HTMLElement, widthPx: number): number {
  const sandbox = document.createElement("div");
  sandbox.style.position = "absolute";
  sandbox.style.visibility = "hidden";
  sandbox.style.left = "-99999px";
  sandbox.style.top = "0";
  sandbox.style.width = (widthPx || CONTENT_W_PX) + "px";
  sandbox.appendChild(container);
  document.body.appendChild(sandbox);
  const height = container.getBoundingClientRect().height;
  document.body.removeChild(sandbox);
  return height;
}

/* ── Paginação ────────────────────────────────────────────────── */

export interface CategoryChunk {
  category: string;
  isFirst: boolean;
  height: number;
  products: Product[];
}

export function paginate(
  products: Product[],
  categories: string[],
): {
  pages: HTMLElement[];
  brandHeight: number;
  footerHeight: number;
} {
  const pages: HTMLElement[] = [];

  const brandEl = buildBrandElement();
  const brandH = measure(brandEl.cloneNode(true) as HTMLElement, CONTENT_W_PX);

  const footerEl = buildFooterElement();
  const footerH = measure(footerEl.cloneNode(true) as HTMLElement, CONTENT_W_PX);

  let page: HTMLElement = document.createElement("div");
  let columnEls: HTMLElement[] = [];
  let colUsed: number[] = [0, 0];
  let curCol: number = 0;
  let pageAvailableH: number = 0;

  function newPage(withBrand: boolean) {
    page = document.createElement("div");
    page.className = "pdf-page";
    page.style.width = SHEET_W_MM + "mm";
    page.style.height = SHEET_H_MM + "mm";
    page.style.padding = PAD_MM + BLEED_MM + "mm";
    page.style.position = "relative";
    page.style.background = TOKENS.cream;
    page.style.overflow = "hidden";
    page.style.display = "flex";
    page.style.flexDirection = "column";

    if (BLEED_MM > 0) {
      // crop marks placeholder
    }

    pageAvailableH = CONTENT_H_PX;

    if (withBrand) {
      page.appendChild(brandEl.cloneNode(true));
      pageAvailableH -= brandH;
    }

    const wrap = document.createElement("div");
    wrap.style.display = "flex";
    wrap.style.gap = COL_GAP_MM + "mm";
    wrap.style.alignItems = "flex-start";
    wrap.style.flex = "1";

    const col0 = document.createElement("div");
    col0.style.flex = "1 1 0";
    col0.style.minWidth = "0";
    col0.style.display = "flex";
    col0.style.flexDirection = "column";

    const col1 = document.createElement("div");
    col1.style.flex = "1 1 0";
    col1.style.minWidth = "0";
    col1.style.display = "flex";
    col1.style.flexDirection = "column";

    wrap.appendChild(col0);
    wrap.appendChild(col1);
    page.appendChild(wrap);

    columnEls = [col0, col1];
    colUsed = [0, 0];
    curCol = 0;
    pages.push(page);
  }

  function ensureRoom(neededHeight: number) {
    let safety = 0;
    while (colUsed[curCol] + neededHeight > pageAvailableH) {
      if (curCol === 0) {
        curCol = 1;
      } else {
        newPage(false);
      }
      safety++;
      if (safety > 50) break;
    }
  }

  newPage(true);

  for (const cat of categories) {
    const catProducts = products.filter((p) => p.category === cat);
    if (catProducts.length === 0) continue;

    let isFirstChunkOfCategory = true;
    let i = 0;

    while (i < catProducts.length) {
      let headEl: HTMLElement | null = null;
      let headH = 0;

      if (isFirstChunkOfCategory) {
        headEl = buildCategoryHeadElement(cat);
        headH = measure(headEl.cloneNode(true) as HTMLElement, COLUMN_W_PX);
      }

      const firstCardEl = buildCardElement(catProducts[i]);
      const firstCardH = measure(firstCardEl.cloneNode(true) as HTMLElement, COLUMN_W_PX);

      if (colUsed[curCol] > 0) {
        ensureRoom(headH + firstCardH);
      }

      const chunk = document.createElement("div");
      chunk.style.marginBottom = "9mm";

      if (headEl) {
        chunk.appendChild(headEl);
      }

      const itemsWrap = document.createElement("div");
      itemsWrap.style.display = "flex";
      itemsWrap.style.flexDirection = "column";
      itemsWrap.style.gap = "4mm";
      chunk.appendChild(itemsWrap);

      let chunkHeight = headH;
      let addedAny = false;

      while (i < catProducts.length) {
        const cardEl = buildCardElement(catProducts[i]);
        const cardH = measure(cardEl.cloneNode(true) as HTMLElement, COLUMN_W_PX);
        const gap = addedAny ? 4 * MM_TO_PX : 0;

        if (colUsed[curCol] + chunkHeight + gap + cardH > pageAvailableH) {
          break;
        }

        itemsWrap.appendChild(cardEl);
        chunkHeight += gap + cardH;
        addedAny = true;
        i++;
      }

      if (!addedAny) {
        itemsWrap.appendChild(buildCardElement(catProducts[i]));
        i++;
      }

      columnEls[curCol].appendChild(chunk);
      colUsed[curCol] += chunkHeight + 9 * MM_TO_PX;

      isFirstChunkOfCategory = false;
    }
  }

  // Footer: append to last page if it fits, else new page
  const lastPageUsed = Math.max(colUsed[0], colUsed[1]);
  if (lastPageUsed + footerH > pageAvailableH) {
    newPage(false);
  }
  page.appendChild(footerEl);

  return { pages, brandHeight: brandH, footerHeight: footerH };
}

/* ── Componente React para renderização final ─────────────────── */

export interface CardapioPDFContentProps {
  pages: HTMLElement[];
}

export function CardapioPDFContent({ pages }: CardapioPDFContentProps) {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {pages.map((page, pageIdx) => (
        <div
          key={pageIdx}
          className="pdf-page"
          style={{
            width: `${SHEET_W_MM}mm`,
            height: `${SHEET_H_MM}mm`,
            padding: `${PAD_MM + BLEED_MM}mm`,
            boxSizing: "border-box" as const,
            background: TOKENS.cream,
            overflow: "hidden",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            pageBreakAfter: pageIdx < pages.length - 1 ? "always" : undefined,
          }}
          dangerouslySetInnerHTML={{ __html: page.innerHTML }}
        />
      ))}
    </div>
  );
}
