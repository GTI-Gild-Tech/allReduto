import { useEffect, useRef } from "react";
import { Download, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";

interface CardapioPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  pages: HTMLElement[];
  pageCount: number;
  isGenerating: boolean;
  onDownload: () => void;
}

export function CardapioPreviewModal({
  isOpen,
  onClose,
  pages,
  pageCount,
  isGenerating,
  onDownload,
}: CardapioPreviewModalProps) {
  const pdfRootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen || !pdfRootRef.current || pages.length === 0) return;

    const root = pdfRootRef.current;
    root.innerHTML = "";

    for (const page of pages) {
      root.appendChild(page.cloneNode(true));
    }
  }, [isOpen, pages]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="sm:max-w-4xl max-h-[85vh] flex flex-col p-0 gap-0"
        showCloseButton={true}
      >
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle>Pré-visualização do Cardápio</DialogTitle>
          <DialogDescription>
            {pageCount} página(s). O PDF vai sair exatamente assim.
          </DialogDescription>
        </DialogHeader>

        <div
          className="flex-1 overflow-y-auto mx-6 rounded-lg"
          style={{ background: "#cfc9b8" }}
        >
          <div
            ref={pdfRootRef}
            id="pdf-root"
            className="flex flex-col items-center gap-4 py-4"
          />
        </div>

        <DialogFooter className="px-6 py-4 border-t">
          <Button
            variant="outline"
            onClick={onClose}
            disabled={isGenerating}
          >
            Fechar
          </Button>
          <Button
            onClick={onDownload}
            disabled={isGenerating}
            className="bg-[#0f4c50] hover:bg-[#0d4247] text-white"
          >
            {isGenerating ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              <Download className="size-4" />
            )}
            {isGenerating ? "Gerando..." : "Baixar PDF"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
