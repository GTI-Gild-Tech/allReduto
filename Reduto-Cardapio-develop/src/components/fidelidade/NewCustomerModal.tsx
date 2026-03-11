import { useState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { VisuallyHidden } from "../ui/visually-hidden";
import { DialogTitle, DialogDescription } from "../ui/dialog";
import { useFidelidade } from "../context/FidelidadeContext";
import { toast } from "sonner";

interface NewCustomerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NewCustomerModal({ isOpen, onClose }: NewCustomerModalProps) {
  const { addCustomer } = useFidelidade();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 10) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    }
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  const normalizeEmail = (value: string) =>
    value.replace(/\s/g, "").toLowerCase();

  const handleSubmit = () => {
    if (!name || !phone) {
      toast.error("Por favor, preencha o nome e telefone");
      return;
    }
    addCustomer(name, phone, email);
    toast.success("Cliente cadastrado com sucesso!");
    handleCancel();
  };

  const handleCancel = () => {
    setName("");
    setPhone("");
    setEmail("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[520px] p-0 gap-0 rounded-2xl overflow-hidden border-0 shadow-xl" style={{ backgroundColor: "#faf8f5" }}>
        <VisuallyHidden>
          <DialogTitle>Novo Cliente</DialogTitle>
          <DialogDescription>
            Preencha os dados para cadastrar um novo cliente no sistema de fidelidade
          </DialogDescription>
        </VisuallyHidden>

        <div className="flex flex-col items-center px-10 pt-10 pb-8 gap-7">
          {/* Header */}
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="text-[#0f4c50] text-[28px] font-bold">Novo Cliente</h2>
            <p className="text-[#797474] text-[14px] max-w-[340px]">
              Preencha os dados para cadastrar um novo cliente no sistema de fidelidade.
            </p>
          </div>

          {/* Fields */}
          <div className="flex flex-col gap-5 w-full">
            <div className="relative rounded-lg border border-[#c0bab4]">
              <span className="absolute -top-[10px] left-3 bg-[#faf8f5] px-1 text-[13px] text-[#0f4c50]">
                Nome<span className="text-[#fd8d14] ml-0.5">*</span>
              </span>
              <input
                type="text"
                placeholder="Digite o nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent px-4 py-3 outline-none text-[#333] placeholder-[#bbb] rounded-lg"
              />
            </div>

            <div className="relative rounded-lg border border-[#c0bab4]">
              <span className="absolute -top-[10px] left-3 bg-[#faf8f5] px-1 text-[13px] text-[#0f4c50]">
                Telefone<span className="text-[#fd8d14] ml-0.5">*</span>
              </span>
              <input
                type="tel"
                placeholder="(11) 99999-9999"
                value={phone}
                onChange={(e) => setPhone(formatPhone(e.target.value))}
                className="w-full bg-transparent px-4 py-3 outline-none text-[#333] placeholder-[#bbb] rounded-lg"
              />
            </div>

            <div className="relative rounded-lg border border-[#c0bab4]">
              <span className="absolute -top-[10px] left-3 bg-[#faf8f5] px-1 text-[13px] text-[#0f4c50]">
                Email
              </span>
              <input
                type="email"
                placeholder="cliente@email.com"
                value={email}
                onChange={(e) => setEmail(normalizeEmail(e.target.value))}
                className="w-full bg-transparent px-4 py-3 outline-none text-[#333] placeholder-[#bbb] rounded-lg"
              />
            </div>
          </div>

          {/* Buttons */}
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
              Cadastrar
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
