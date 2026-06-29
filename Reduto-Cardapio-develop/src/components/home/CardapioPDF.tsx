import { Product } from "../cardapio/KanbanComponents";

export const A4_WIDTH_PX = 794;
export const A4_HEIGHT_PX = 1123;
const MARGIN_PX = 96;
export const A4_CONTENT_HEIGHT = A4_HEIGHT_PX - MARGIN_PX * 2;

const COLUMN_GAP = 24;
const COL_WIDTH = (A4_WIDTH_PX - MARGIN_PX * 2 - COLUMN_GAP) / 2;

const HEADER_HEIGHT = 80;
const CATEGORY_TITLE_HEIGHT = 42;
const BASE_CARD_HEIGHT = 92;
const DESC_LINE_HEIGHT = 14;
const CHARS_PER_LINE = 50;
const MAX_DESC_LINES = 2;

const COMMON_SIZES = ["PP", "P", "M", "G", "GG", "XG", "XGG"];

function formatSizeLabel(size: string): string {
  const s = size?.trim().toUpperCase();
  if (COMMON_SIZES.includes(s)) return `Tam ${size}`;
  return size ?? "Único";
}

const formatBRL = (v: number) =>
  (Number.isFinite(v) ? v : 0).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

const formatTemperature = (temp?: string[] | null): string => {
  if (!temp || temp.length === 0) return '';
  return temp.map(t => t === 'quente' ? 'Quente' : 'Gelado').join(' | ');
};

const PLACEHOLDER_IMG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23d6cfc4'/%3E%3Ctext x='32' y='36' text-anchor='middle' fill='%23999' font-size='10' font-family='sans-serif'%3Esem foto%3C/text%3E%3C/svg%3E";

function estimateCardHeight(product: Product): number {
  const desc = product.description?.trim() ?? "";
  const descLines = desc.length > 0 ? Math.min(Math.ceil(desc.length / CHARS_PER_LINE), MAX_DESC_LINES) : 0;
  return BASE_CARD_HEIGHT + descLines * DESC_LINE_HEIGHT;
}

interface PageItem {
  category: string;
  product: Product;
}

interface PageData {
  left: PageItem[];
  right: PageItem[];
}

function buildPages(products: Product[], categories: string[]): PageData[] {
  const grouped = categories.reduce((acc, cat) => {
    acc[cat] = products.filter((p) => p.category === cat);
    return acc;
  }, {} as Record<string, Product[]>);

  const allItems: PageItem[] = [];
  for (const cat of categories) {
    const items = grouped[cat] ?? [];
    for (const item of items) {
      allItems.push({ category: cat, product: item });
    }
  }

  const usableHeight = A4_CONTENT_HEIGHT - HEADER_HEIGHT;
  const pages: PageData[] = [];
  let idx = 0;

  while (idx < allItems.length) {
    let leftHeight = usableHeight;
    let rightHeight = usableHeight;
    const left: PageItem[] = [];
    const right: PageItem[] = [];
    let lastLeftCat = "";
    let lastRightCat = "";

    while (idx < allItems.length) {
      const item = allItems[idx];
      const cardH = estimateCardHeight(item.product);
      const titleH = item.category !== lastLeftCat ? CATEGORY_TITLE_HEIGHT : 0;
      const totalH = titleH + cardH;

      if (totalH <= leftHeight) {
        left.push(item);
        leftHeight -= totalH;
        lastLeftCat = item.category;
        idx++;
      } else {
        break;
      }
    }

    while (idx < allItems.length) {
      const item = allItems[idx];
      const cardH = estimateCardHeight(item.product);
      const titleH = item.category !== lastRightCat ? CATEGORY_TITLE_HEIGHT : 0;
      const totalH = titleH + cardH;

      if (totalH <= rightHeight) {
        right.push(item);
        rightHeight -= totalH;
        lastRightCat = item.category;
        idx++;
      } else {
        break;
      }
    }

    pages.push({ left, right });
  }

  return pages;
}

function ColumnItems({ items, shownCategories }: { items: PageItem[]; shownCategories: Set<string> }) {
  return (
    <div style={{ width: `${COL_WIDTH}px`, flexShrink: 0, display: "flex", flexDirection: "column" as const, justifyContent: "space-between", height: "100%" }}>
      {items.map((item) => {
        const showCatTitle = !shownCategories.has(item.category);
        if (showCatTitle) shownCategories.add(item.category);
        return (
          <div key={item.product.id}>
            {showCatTitle && (
              <div style={{ borderBottom: "2px solid #c1a07b" }}>
                <h2 style={{ fontFamily: "'Retrokia', sans-serif", color: "#0f4c50", fontSize: "22px", padding: "10px 0", marginBottom: "10px", marginTop: "8px" }}>
                  {item.category}
                </h2>
              </div>
            )}
            <ProductCard product={item.product} />
          </div>
        );
      })}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div style={{ display: "flex", gap: "10px", padding: "12px 10px", borderBottom: "1px solid #d6cfc4", alignItems: "flex-start" }}>
      <img src={product.imageUrl || PLACEHOLDER_IMG} alt={product.name} style={{ width: "80px", height: "80px", borderRadius: "6px", objectFit: "cover", flexShrink: 0, background: "#d6cfc4" }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <h3 style={{ color: "#0f4c50", fontSize: "16px", fontWeight: 600, marginBottom: "5px" }}>{product.name}</h3>
        {formatTemperature(product.temperature) && (
          <p style={{ color: "#797474", fontSize: "11px", marginBottom: "3px" }}>
            {formatTemperature(product.temperature)}
          </p>
        )}
        {product.description?.trim() && (
          <p style={{ color: "#797474", fontSize: "11px", marginBottom: "3px", lineHeight: "1.3" }}>{product.description}</p>
        )}
        {Array.isArray(product.sizes) && product.sizes.length > 0 && (
          <div>
            {product.sizes.map((s, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2px" }}>
                <span style={{ color: "#0f4c50", fontSize: "12px", fontWeight: 600 }}>
                  {formatSizeLabel(String(s.size))}
                </span>
                <span style={{ color: "#2f1b04", fontSize: "12px" }}>
                  {formatBRL(Number(s.price))}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

interface CardapioPDFContentProps {
  products: Product[];
  categories: string[];
}

export function CardapioPDFContent({ products, categories }: CardapioPDFContentProps) {
  const pages = buildPages(products, categories);

  return (
    <div>
      {pages.map((page, pageIdx) => {
        const shownCategories = new Set<string>();
        const contentHeight = A4_CONTENT_HEIGHT - (pageIdx === 0 ? HEADER_HEIGHT : 0);
        return (
          <div
            key={pageIdx}
            className="pdf-page"
            style={{
              width: `${A4_WIDTH_PX}px`,
              height: `${A4_HEIGHT_PX}px`,
              padding: `${MARGIN_PX}px`,
              boxSizing: "border-box" as const,
              background: "#f0eee9",
              fontFamily: "'Rethink Sans', sans-serif",
              overflow: "hidden",
              pageBreakAfter: pageIdx < pages.length - 1 ? "always" : undefined,
            }}
          >
            {pageIdx === 0 && (
              <>
                <h1 style={{ fontFamily: "'Retrokia', sans-serif", color: "#0f4c50", fontSize: "30px", textAlign: "center", marginBottom: "4px" }}>
                  Cardapio
                </h1>
                <p style={{ color: "#797474", fontSize: "16px", textAlign: "center", marginBottom: "16px" }}>
                  Conheça nossos sabores e ingredientes selecionados
                </p>
              </>
            )}

            <div style={{ display: "flex", gap: `${COLUMN_GAP}px`, height: `${contentHeight}px` }}>
              <ColumnItems items={page.left} shownCategories={shownCategories} />
              <ColumnItems items={page.right} shownCategories={shownCategories} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
