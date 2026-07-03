import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Product } from "../cardapio/KanbanComponents";
import {
  paginate,
  SHEET_W_MM,
  SHEET_H_MM,
  TOKENS,
} from "./CardapioPDF";

/* ── waitForImages ────────────────────────────────────────────── */

async function waitForImages(container: HTMLElement) {
  const imgs = container.querySelectorAll("img");
  await Promise.all(
    Array.from(imgs).map(
      (img) =>
        new Promise<void>((resolve) => {
          if (img.complete && img.naturalWidth > 0) {
            resolve();
            return;
          }
          img.crossOrigin = "anonymous";
          const src = img.src;
          img.src = "";
          img.onload = () => resolve();
          img.onerror = () => resolve();
          img.src = src;
        }),
    ),
  );
}

/* ── Cleanup ──────────────────────────────────────────────────── */

let currentContainer: HTMLElement | null = null;

export function cleanupPreview() {
  if (currentContainer) {
    currentContainer.remove();
    currentContainer = null;
  }
}

/* ── Exportação principal ─────────────────────────────────────── */

export async function exportCardapioPDF(
  products: Product[],
  categories: string[],
): Promise<void> {
  cleanupPreview();

  // Filtrar apenas produtos visíveis
  const visibleProducts = products.filter((p) => p.is_visible !== false);

  // Paginar com DOM real
  const { pages } = paginate(visibleProducts, categories);

  // Criar container visível para preview
  const container = document.createElement("div");
  container.id = "cardapio-preview";
  container.style.position = "fixed";
  container.style.inset = "0";
  container.style.zIndex = "9999";
  container.style.background = "#cfc9b8";
  container.style.overflow = "auto";
  container.style.padding = "32px 16px 80px";
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.alignItems = "center";
  container.style.gap = "18px";

  // Toolbar
  const toolbar = document.createElement("div");
  toolbar.style.position = "fixed";
  toolbar.style.top = "16px";
  toolbar.style.right = "16px";
  toolbar.style.zIndex = "10000";
  toolbar.style.display = "flex";
  toolbar.style.gap = "8px";

  const btnClose = document.createElement("button");
  btnClose.textContent = "Fechar";
  btnClose.style.fontFamily = "'Inter', sans-serif";
  btnClose.style.fontWeight = "600";
  btnClose.style.fontSize = "14px";
  btnClose.style.padding = "10px 18px";
  btnClose.style.borderRadius = "999px";
  btnClose.style.border = `1px solid ${TOKENS.ink}`;
  btnClose.style.background = "white";
  btnClose.style.color = TOKENS.ink;
  btnClose.style.cursor = "pointer";
  btnClose.onclick = () => cleanupPreview();

  const btnPdf = document.createElement("button");
  btnPdf.id = "btn-pdf";
  btnPdf.textContent = "Baixar PDF";
  btnPdf.style.fontFamily = "'Inter', sans-serif";
  btnPdf.style.fontWeight = "600";
  btnPdf.style.fontSize = "14px";
  btnPdf.style.padding = "10px 18px";
  btnPdf.style.borderRadius = "999px";
  btnPdf.style.border = `1px solid ${TOKENS.ink}`;
  btnPdf.style.background = TOKENS.ink;
  btnPdf.style.color = TOKENS.cream;
  btnPdf.style.cursor = "pointer";
  btnPdf.style.boxShadow = "0 4px 14px rgba(0,0,0,0.18)";

  toolbar.appendChild(btnClose);
  toolbar.appendChild(btnPdf);
  container.appendChild(toolbar);

  // Status
  const status = document.createElement("p");
  status.style.fontSize = "12px";
  status.style.color = "#5b5b4f";
  status.style.marginBottom = "14px";
  status.style.textAlign = "center";
  status.style.maxWidth = "600px";
  status.textContent = "Montando as páginas…";
  container.appendChild(status);

  // Pdf root
  const pdfRoot = document.createElement("div");
  pdfRoot.id = "pdf-root";
  pdfRoot.style.display = "flex";
  pdfRoot.style.flexDirection = "column";
  pdfRoot.style.alignItems = "center";
  pdfRoot.style.gap = "18px";
  container.appendChild(pdfRoot);

  document.body.appendChild(container);
  currentContainer = container;

  // Renderizar páginas
  for (const page of pages) {
    pdfRoot.appendChild(page);
  }

  await new Promise((r) => setTimeout(r, 500));
  await waitForImages(container);
  await new Promise((r) => setTimeout(r, 300));

  status.textContent = `Pré-visualização pronta: ${pages.length} página(s). O PDF vai sair exatamente assim.`;

  // Botão de exportar
  btnPdf.addEventListener("click", async () => {
    btnPdf.disabled = true;
    const originalLabel = btnPdf.textContent;
    pdfRoot.classList.add("exporting");

    try {
      const pdf = new jsPDF({
        unit: "mm",
        format: [SHEET_W_MM, SHEET_H_MM],
        orientation: "portrait",
      });

      const pageEls = pdfRoot.querySelectorAll(".pdf-page");
      for (let idx = 0; idx < pageEls.length; idx++) {
        btnPdf.textContent = `Gerando página ${idx + 1}/${pageEls.length}…`;

        const canvas = await html2canvas(pageEls[idx] as HTMLElement, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: TOKENS.cream,
        });

        const imgData = canvas.toDataURL("image/jpeg", 0.98);
        if (idx > 0) pdf.addPage([SHEET_W_MM, SHEET_H_MM], "portrait");
        pdf.addImage(imgData, "JPEG", 0, 0, SHEET_W_MM, SHEET_H_MM);
      }

      pdf.save("cardapio.pdf");
    } catch (err) {
      console.error(err);
      alert("Ocorreu um erro ao gerar o PDF. Veja o console (F12) para detalhes.");
    } finally {
      pdfRoot.classList.remove("exporting");
      btnPdf.disabled = false;
      btnPdf.textContent = originalLabel;
    }
  });
}
