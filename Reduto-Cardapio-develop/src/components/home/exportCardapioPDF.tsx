import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Product } from "../cardapio/KanbanComponents";
import { createRoot } from "react-dom/client";
import { CardapioPDFContent, A4_WIDTH_PX, A4_HEIGHT_PX } from "./CardapioPDF";

export async function exportCardapioPDF(products: Product[], categories: string[]) {
  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.left = "-9999px";
  container.style.top = "0";
  document.body.appendChild(container);

  const root = createRoot(container);
  root.render(<CardapioPDFContent products={products} categories={categories} />);

  await new Promise((r) => setTimeout(r, 1500));

  const pages = container.querySelectorAll(".pdf-page");

  const imgs = container.querySelectorAll("img");
  await Promise.all(
    Array.from(imgs).map((img) => {
      return new Promise<void>((resolve) => {
        img.crossOrigin = "anonymous";
        const src = img.src;
        img.src = "";
        img.onload = () => resolve();
        img.onerror = () => resolve();
        img.src = src;
      });
    })
  );

  await new Promise((r) => setTimeout(r, 500));

  const pdf = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait" });

  for (let i = 0; i < pages.length; i++) {
    const page = pages[i] as HTMLElement;
    const canvas = await html2canvas(page, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      logging: false,
      width: A4_WIDTH_PX,
      height: A4_HEIGHT_PX,
    });

    const imgData = canvas.toDataURL("image/jpeg", 0.95);

    if (i > 0) pdf.addPage();
    pdf.addImage(imgData, "JPEG", 0, 0, 210, 297);
  }

  pdf.save("cardapio.pdf");

  root.unmount();
  document.body.removeChild(container);
}
