import { Dialog, DialogContent } from "../ui/dialog";
import { VisuallyHidden } from "../ui/visually-hidden";
import { DialogTitle, DialogDescription } from "../ui/dialog";
import { useFidelidade } from "../context/FidelidadeContext";

interface HistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  customerId: string;
}

export function HistoryModal({ isOpen, onClose, customerId }: HistoryModalProps) {
  const { getCustomerById } = useFidelidade();
  const customer = getCustomerById(customerId);

  if (!customer) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-[520px] p-0 gap-0 rounded-2xl overflow-hidden border-0 shadow-xl"
        style={{ backgroundColor: "#faf8f5" }}
      >
        <VisuallyHidden>
          <DialogTitle>Histórico de Fidelidade</DialogTitle>
          <DialogDescription>
            Visualize o histórico completo de pontos de {customer.name}
          </DialogDescription>
        </VisuallyHidden>

        <div className="flex flex-col items-center px-10 pt-10 pb-8 gap-7">
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="text-[#0f4c50] text-[28px] font-bold">Histórico do Fidelidade</h2>
            <p className="text-[#333] text-[15px] font-medium">{customer.name}</p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
              <p className="text-[#797474] text-[13px]">{customer.phone}</p>
              {customer.email && (
                <p className="text-[#797474] text-[13px]">{customer.email}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-5 w-full">
            <div className="rounded-lg border border-[#c0bab4] bg-[#faf8f5] p-3">
              <div className="flex flex-col gap-3 max-h-[400px] overflow-y-auto pr-1">
                {customer.history.length === 0 ? (
                  <p className="text-[#797474] text-center py-8">
                    Nenhum histórico encontrado
                  </p>
                ) : (
                  customer.history.map((record) => (
                    <div
                      key={record.id}
                      className="bg-[#f0eee9] rounded-lg p-4 flex flex-col gap-1 border border-[#e0dbd5]"
                    >
                      <div className="flex justify-between items-start gap-3">
                        <div className="flex flex-col gap-1">
                          <p className="text-[#0f4c50]">{record.description}</p>
                          <p className="text-[#797474] text-[12px]">{record.date}{record.time ? ` ${record.time}` : ""}</p>
                          {record.notes && (
                            <p className="text-[#555] text-[12px] italic">{record.notes}</p>
                          )}
                        </div>
                        <div
                          className={`px-3 py-1 rounded-full shrink-0 ${
                            record.type === "register"
                              ? "bg-[#6b7280] text-white"
                              : record.type === "add"
                              ? "bg-[#0f4c50] text-white"
                              : "bg-[#fd8d14] text-white"
                          }`}
                        >
                          <p className="text-[12px]">
                            {record.type === "register"
                              ? "Cadastro"
                              : `${record.type === "add" ? "+" : ""}${record.points} pts`}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="flex w-full justify-center pt-1">
              <button
                onClick={onClose}
                className="px-6 py-2 border border-[#0f4c50] text-[#0f4c50] rounded-[50px] hover:bg-[#0f4c50] hover:text-white transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
