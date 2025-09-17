// ConfirmDialog.tsx

type Props = {
  open: boolean;
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  isBusy?: boolean;
  onConfirm: () => void | Promise<void>;
  onClose: () => void;
};

export default function ConfirmDialog({
  open,
  title = "Confirmar ação",
  message,
  confirmText = "Cancelar pedido",
  cancelText = "Voltar",
  isBusy = false,
  onConfirm,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <div className=" inset-0 z-10 flex items-center justify-center">
      {/* backdrop */}
      <div className="absolute inset-0 w-full h-full bg-black/50" onClick={onClose} />
      {/* card */}
      <div className="absolute top-[30%] w-[92%] max-w-xl rounded-lg bg-[#f9f8f5] p-6 shadow-2xl md:p-8">
        <header className="mb-3 flex items-start justify-between">
          <h2 className="text-2xl font-semibold text-[#0f4c50]">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="rounded p-1 text-gray-500 hover:bg-gray-100"
            aria-label="Fechar"
          >
            ✕
          </button>
        </header>

        <p className="mb-6 text-gray-600 text-start">{message}</p>

        <div className="flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-lg border border-[#0f4c50]/30 px-5 py-2 text-[#0f4c50] hover:bg-[#0f4c50]/5"
            disabled={isBusy}
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className="rounded-lg bg-[#0f4c50] px-5 py-2 font-medium text-white hover:opacity-90 disabled:opacity-60"
            disabled={isBusy}
          >
            {isBusy ? "Processando..." : confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
