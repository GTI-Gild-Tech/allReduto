import { useState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { VisuallyHidden } from "../ui/visually-hidden";
import { DialogTitle, DialogDescription } from "../ui/dialog";
import { useFidelidade } from "../context/FidelidadeContext";
import { toast } from "sonner";

interface RedeemModalProps {
  isOpen: boolean;
  onClose: () => void;
  customerId: string;
}

export function RedeemModal({ isOpen, onClose, customerId }: RedeemModalProps) {
  const { getCustomerById, redeemPoints } = useFidelidade();
  const customer = getCustomerById(customerId);
  const [points, setPoints] = useState("");

  const handleSubmit = () => {
    const pointsValue = parseInt(points);

    if (!points || pointsValue <= 0) {
      toast.error("Por favor, insira uma quantidade válida de pontos");
      return;
    }

    if (!customer || customer.points < pointsValue) {
      toast.error("Pontos insuficientes para resgate");
      return;
    }

    redeemPoints(customerId, pointsValue);
    toast.success(`${pointsValue} pontos resgatados com sucesso!`);
    setPoints("");
    onClose();
  };

  const handleCancel = () => {
    setPoints("");
    onClose();
  };

  if (!customer) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-[520px] p-0 gap-0 rounded-2xl overflow-hidden border-0 shadow-xl"
        style={{ backgroundColor: "#faf8f5" }}
      >
        <VisuallyHidden>
          <DialogTitle>Resgatar Pontos</DialogTitle>
          <DialogDescription>
            Confirme os valores para resgatar pontos do histórico da cliente e aplicar um benefício ou desconto
          </DialogDescription>
        </VisuallyHidden>

        <div className="flex flex-col items-center px-10 pt-10 pb-8 gap-7">
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="text-[#0f4c50] text-[28px] font-bold">Resgatar Pontos</h2>
            <p className="text-[#797474] text-[14px] max-w-[340px]">
              Cliente: {customer.name}
            </p>
          </div>

          <div className="flex flex-col gap-5 w-full">
            <div className="relative rounded-lg border border-[#c0bab4] bg-[#faf8f5]">
              <span className="absolute -top-[10px] left-3 bg-[#faf8f5] px-1 text-[13px] text-[#0f4c50]">
                Pontos disponíveis
              </span>
              <div className="px-4 py-3 text-[#333]">
                <span className="font-medium">{customer.points}</span>
              </div>
            </div>

            <div className="relative rounded-lg border border-[#c0bab4] bg-[#faf8f5]">
              <span className="absolute -top-[10px] left-3 bg-[#faf8f5] px-1 text-[13px] text-[#0f4c50]">
                Pontos a resgatar <span className="text-[#fd8d14]">*</span>
              </span>
              <input
                type="number"
                min="1"
                max={customer.points}
                placeholder="Ex: 5"
                value={points}
                onChange={(e) => setPoints(e.target.value)}
                className="w-full bg-transparent px-4 py-3 outline-none text-[#333] placeholder-[#bbb] rounded-lg"
              />
            </div>

            <div className="rounded-lg border border-[#d4c9b0]" style={{ backgroundColor: "#f5eddb" }}>
              <p className="px-4 py-3 text-[13px] text-[#5a4a2a]">
                <strong>Informação:</strong> Confirme os valores para resgatar pontos do histórico do cliente e aplicar um benefício ou desconto. Após o resgate, os pontos serão removidos do saldo.
              </p>
            </div>
          </div>

          <div className="flex gap-3 w-full justify-center pt-1">
            <button
              onClick={handleCancel}
              className="px-6 py-2 border border-[#0f4c50] text-[#0f4c50] rounded-[50px] hover:bg-[#0f4c50] hover:text-white transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-[#0f4c50] text-white rounded-[50px] hover:bg-[#0d4247] transition-colors"
            >
              Resgatar
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
