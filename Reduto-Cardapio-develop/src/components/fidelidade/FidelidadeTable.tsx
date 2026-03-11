import { useState } from "react";
import { Customer } from "../context/FidelidadeContext";
import { HistoryModal } from "./HistoryModal";
import { NewRecordModal } from "./NewRecordModal";
import { RedeemModal } from "./RedeemModal";

interface FidelidadeTableProps {
  searchTerm: string;
  customers: Customer[];
}

export function FidelidadeTable({ searchTerm, customers }: FidelidadeTableProps) {
  const [selectedCustomerId, setSelectedCustomerId] = useState<string | null>(null);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isNewRecordOpen, setIsNewRecordOpen] = useState(false);
  const [isRedeemOpen, setIsRedeemOpen] = useState(false);

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewHistory = (customerId: string) => {
    setSelectedCustomerId(customerId);
    setIsHistoryOpen(true);
  };

  const handleRedeem = (customerId: string) => {
    setSelectedCustomerId(customerId);
    setIsRedeemOpen(true);
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
      <div className="flex items-center gap-3 w-full">
        {/* Track */}
        <div className="relative flex-1 h-2.5 rounded-full overflow-hidden" style={{ backgroundColor: "#D9D9D9" }}>
          {/* Fill */}
          <div
            className="absolute inset-y-0 left-0 rounded-full transition-all duration-300"
            style={{
              width: `${pct}%`,
              backgroundColor: points >= MAX ? "#DBB723" : "#DBB723",
              backgroundImage:
                points >= MAX
                  ? "linear-gradient(90deg, #DBB723 0%, #f0c940 100%)"
                  : "linear-gradient(90deg, #c8a96e 0%, #DBB723 100%)",
            }}
          />
        </div>
        {/* Value */}
        <span
          className="shrink-0 text-[12px] tabular-nums"
          style={{ color: points >= MAX ? "#c08a00" : "#555", minWidth: "36px" }}
        >
          {points.toLocaleString("pt-BR")}
        </span>
      </div>
    );
  }

  return (
    <>
      <div className="box-border content-stretch flex flex-col gap-0 items-start justify-start overflow-hidden relative shrink-0 w-full rounded-sm">
        {/* Table Header */}
        <div
          className="box-border content-stretch flex flex-row gap-0 items-stretch justify-start overflow-hidden relative shrink-0 w-full bg-[#C1A07B]"
        >
          {/* Nome */}
          <div className="w-[200px] box-border flex flex-row gap-2.5 items-center justify-start px-5 py-3 relative shrink-0">
            <span className="not-italic relative shrink-0 text-nowrap text-white font-bold">
              Nome
            </span>
          </div>
          {/* Telefone */}
          <div className="basis-0 grow box-border flex flex-row gap-2.5 items-center justify-start min-w-px px-5 py-3 relative shrink-0">
            <span className="not-italic relative shrink-0 text-nowrap text-white font-bold">
              Telefone
            </span>
          </div>
          {/* Fidelidade */}
           <div className="basis-0 grow box-border flex flex-row gap-2.5 items-center justify-start min-w-px px-5 py-3 relative shrink-0">
            <span className="not-italic relative shrink-0 text-nowrap text-white font-bold">
              Fidelidade
            </span>
          </div>
          {/* Último registro */}
          <div className="w-[180px] box-border flex flex-row gap-2.5 items-center justify-start px-5 py-3 relative shrink-0">
            <span className="not-italic relative shrink-0 text-nowrap text-white font-bold">
              Último registro
            </span>
          </div>
          {/* Actions spacer */}
          <div className="w-[200px] box-border flex flex-row gap-2.5 items-center justify-start px-5 py-3 relative shrink-0" />
        </div>

        {/* Table Rows */}
        {filteredCustomers.map((customer, index) => (
          <div
            key={customer.id}
            className={`box-border content-stretch flex flex-row gap-0 items-center justify-start overflow-hidden relative shrink-0 w-full ${
              index % 2 === 0 ? "bg-white" : "bg-[#f5f0ea]"
            }`}
          >
            {/* Nome */}
            <div className="w-[200px] box-border flex flex-row gap-2.5 items-center justify-start px-5 py-2.5 relative shrink-0 min-w-0">
              <span
                className="not-italic relative block w-full overflow-hidden text-ellipsis whitespace-nowrap text-[#0f4c50]"
                title={customer.name}
              >
                {customer.name}
              </span>
            </div>

            {/* Telefone */}
            <div className=" box-border flex flex-row gap-2.5 items-center justify-start px-5 py-2.5 relative shrink-0">
              <span className="not-italic relative shrink-0 text-[#0f4c50] text-nowrap">
                {customer.phone}
              </span>
            </div>

            {/* Fidelidade (progress bar) */}
            <div className="basis-0 grow box-border flex flex-row items-center justify-start min-w-px  py-2.5 relative shrink-0">
              <PointsBar points={customer.points} />
            </div>

            {/* Último registro */}
            <div className="w-[180px] box-border flex flex-row gap-2.5 items-center justify-start px-5 py-2.5 relative shrink-0">
              <span className="not-italic relative shrink-0 text-[#555] text-nowrap text-[13px]">
                {getLastRecord(customer)}
              </span>
            </div>

            {/* Actions */}
            <div className="w-[200px] box-border flex flex-row gap-2 items-center justify-end px-4 py-2.5 relative shrink-0">
              <button
                onClick={() => handleViewHistory(customer.id)}
                className="box-border flex flex-row gap-1 items-center justify-center px-3 py-1.5 relative rounded-[5px] shrink-0 cursor-pointer transition-colors border border-[#b0a89a] bg-white hover:bg-[#f0ece6] text-[#555] text-[12px]"
              >
                Ver histórico
              </button>
              <button
                onClick={() => handleRedeem(customer.id)}
                className="bg-[#0f4c50] box-border flex flex-row gap-1 items-center justify-center px-3 py-1.5 relative rounded-[5px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity text-white text-[12px]"
              >
                Resgatar
              </button>
            </div>
          </div>
        ))}

        {filteredCustomers.length === 0 && (
          <div className="w-full bg-white py-8 flex items-center justify-center">
            <span className="text-[#797474]">Nenhum cliente encontrado</span>
          </div>
        )}
      </div>

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