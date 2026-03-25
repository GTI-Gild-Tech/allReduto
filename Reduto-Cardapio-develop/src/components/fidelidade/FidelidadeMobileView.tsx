import { useState } from "react";
import { Customer } from "../context/FidelidadeContext";
import { HistoryModal } from "./HistoryModal";
import { NewRecordModal } from "./NewRecordModal";
import { RedeemModal } from "./RedeemModal";
import { Dialog, DialogContent } from "../ui/dialog";
import { VisuallyHidden } from "../ui/visually-hidden";
import { DialogTitle, DialogDescription } from "../ui/dialog";
import { ChevronRight, X } from "lucide-react";

interface FidelidadeMobileViewProps {
  searchTerm: string;
  customers: Customer[];
}

export function FidelidadeMobileView({ searchTerm, customers }: FidelidadeMobileViewProps) {
  const [selectedCustomerId, setSelectedCustomerId] = useState<string | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isNewRecordOpen, setIsNewRecordOpen] = useState(false);
  const [isRedeemOpen, setIsRedeemOpen] = useState(false);

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedCustomer = customers.find(c => c.id === selectedCustomerId);

  const handleViewMore = (customerId: string) => {
    setSelectedCustomerId(customerId);
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
    setSelectedCustomerId(null);
  };

  const handleViewHistory = (customerId: string) => {
    setSelectedCustomerId(customerId);
    setIsDetailOpen(false);
    // Pequeno delay para garantir que o Dialog anterior fecha
    setTimeout(() => {
      setIsHistoryOpen(true);
    }, 50);
  };

  const handleNewRecord = (customerId: string) => {
    setSelectedCustomerId(customerId);
    setIsDetailOpen(false);
    setTimeout(() => {
      setIsNewRecordOpen(true);
    }, 50);
  };

  const handleRedeem = (customerId: string) => {
    setSelectedCustomerId(customerId);
    setIsDetailOpen(false);
    setTimeout(() => {
      setIsRedeemOpen(true);
    }, 50);
  };

  const getLastRecord = (customer: Customer) => {
    if (customer.history.length === 0) return "—";
    const last = customer.history[0];
    return last.time ? `${last.date} ${last.time}` : last.date;
  };

  function PointsBar({ points }: { points: number }) {
    const MAX = 1000;
    const pct = Math.min(points / MAX, 1) * 100;

    return (
      <div className="flex items-center gap-2 w-full">
        <div className="relative flex-1 h-2 rounded-full overflow-hidden" style={{ backgroundColor: "#D9D9D9" }}>
          <div
            className="absolute inset-y-0 left-0 rounded-full transition-all duration-300"
            style={{
              width: `${pct}%`,
              backgroundColor: "#DBB723",
              backgroundImage:
                points >= MAX
                  ? "linear-gradient(90deg, #DBB723 0%, #f0c940 100%)"
                  : "linear-gradient(90deg, #c8a96e 0%, #DBB723 100%)",
            }}
          />
        </div>
        <span
          className="shrink-0 text-[12px] tabular-nums font-medium"
          style={{ color: points >= MAX ? "#c08a00" : "#555", minWidth: "40px" }}
        >
          {points}
        </span>
      </div>
    );
  }

  return (
    <>
      {/* Mobile List View - Hidden on larger screens */}
      <div className="md:hidden flex flex-col gap-3 w-full">
        {filteredCustomers.length === 0 ? (
          <div className="w-full bg-white py-8 flex items-center justify-center rounded-lg border border-[#e0dbd5]">
            <span className="text-[#797474]">Nenhum cliente encontrado</span>
          </div>
        ) : (
          filteredCustomers.map((customer, index) => (
            <div
              key={customer.id}
              className={`flex flex-row items-center justify-between px-4 py-3 rounded-lg border border-[#e0dbd5] ${
                index % 2 === 0 ? "bg-white" : "bg-[#fcf9f5]"
              }`}
            >
              <div className="flex-1 min-w-0">
                <p
                  className="text-[#0f4c50] font-medium truncate text-sm"
                  title={customer.name}
                >
                  {customer.name}
                </p>
              </div>
              <button
                onClick={() => handleViewMore(customer.id)}
                className="ml-2 flex items-center justify-center p-2 hover:bg-[#f0ece6] rounded transition-colors shrink-0"
              >
                <ChevronRight className="w-5 h-5 text-[#0f4c50]" />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Detail Modal */}
      <Dialog open={isDetailOpen} onOpenChange={handleCloseDetail}>
        <DialogContent
          showCloseButton={false}
          className="max-w-[520px] p-0 gap-0 rounded-2xl overflow-hidden border-0 shadow-xl md:max-w-lg"
          style={{ backgroundColor: "#faf8f5" }}
        >
          <VisuallyHidden>
            <DialogTitle>Detalhes do Cliente</DialogTitle>
            <DialogDescription>
              Informações completas e ações para o cliente {selectedCustomer?.name}
            </DialogDescription>
          </VisuallyHidden>

          <div className="flex flex-col items-start w-full">
            {/* Header */}
            <div className="flex items-center justify-between w-full px-6 py-5 border-b border-[#e0dbd5]">
              <h2 className="text-[#0f4c50] text-[20px] font-bold">
                Detalhes do Cliente
              </h2>
              <button
                onClick={handleCloseDetail}
                className="p-1 hover:bg-[#f0ece6] rounded transition-colors"
              >
                <X className="w-5 h-5 text-[#555]" />
              </button>
            </div>

            {/* Content */}
            {selectedCustomer && (
              <div className="flex flex-col items-start gap-6 px-6 py-6 w-full">
                {/* Customer Info */}
                <div className="flex flex-col gap-3 w-full">
                  <div>
                    <p className="text-[#797474] text-[12px] font-medium">Nome</p>
                    <p className="text-[#0f4c50] text-[16px] font-semibold">
                      {selectedCustomer.name}
                    </p>
                  </div>

                  <div>
                    <p className="text-[#797474] text-[12px] font-medium">Telefone</p>
                    <p className="text-[#333] text-[14px]">
                      {selectedCustomer.phone}
                    </p>
                  </div>

                  {selectedCustomer.email && (
                    <div>
                      <p className="text-[#797474] text-[12px] font-medium">Email</p>
                      <p className="text-[#333] text-[14px]">
                        {selectedCustomer.email}
                      </p>
                    </div>
                  )}
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-[#e0dbd5]" />

                {/* Points Info */}
                <div className="flex flex-col gap-3 w-full">
                  <div>
                    <p className="text-[#797474] text-[12px] font-medium mb-2">
                      Pontos de Fidelidade
                    </p>
                    <PointsBar points={selectedCustomer.points} />
                  </div>

                  <div>
                    <p className="text-[#797474] text-[12px] font-medium">
                      Último Registro
                    </p>
                    <p className="text-[#555] text-[13px] mt-1">
                      {getLastRecord(selectedCustomer)}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-[#e0dbd5]" />

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 w-full">
                  <button
                    onClick={() => {
                      handleNewRecord(selectedCustomerId!);
                    }}
                    className="w-full px-4 py-3 bg-[#0f4c50] text-white font-medium rounded-lg hover:opacity-90 transition-opacity text-sm"
                  >
                    Adicionar Pontos
                  </button>

                  <button
                    onClick={() => {
                      handleViewHistory(selectedCustomerId!);
                    }}
                    className="w-full px-4 py-3 border border-[#b0a89a] text-[#555] font-medium rounded-lg hover:bg-[#f0ece6] transition-colors text-sm"
                  >
                    Ver Histórico
                  </button>

                  <button
                    onClick={() => {
                      handleRedeem(selectedCustomerId!);
                    }}
                    className="w-full px-4 py-3 bg-[#DBB723] text-[#333] font-medium rounded-lg hover:opacity-90 transition-opacity text-sm"
                  >
                    Resgatar Pontos
                  </button>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Modals */}
      {selectedCustomerId && (
        <>
          <HistoryModal
            isOpen={isHistoryOpen}
            onClose={() => {
              setIsHistoryOpen(false);
              setSelectedCustomerId(null);
            }}
            customerId={selectedCustomerId}
          />
          <NewRecordModal
            isOpen={isNewRecordOpen}
            onClose={() => {
              setIsNewRecordOpen(false);
              setSelectedCustomerId(null);
            }}
            customerId={selectedCustomerId}
          />
          <RedeemModal
            isOpen={isRedeemOpen}
            onClose={() => {
              setIsRedeemOpen(false);
              setSelectedCustomerId(null);
            }}
            customerId={selectedCustomerId}
          />
        </>
      )}
    </>
  );
}
