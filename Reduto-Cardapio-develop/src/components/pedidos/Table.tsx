import { useMemo, useState } from "react";
import { ActionButton } from "../shared/ActionButton";
import { OrderModal } from "../modals/OrderModal";
import { useOrders, type Order } from "../context/OrdersContext";

// ======= helpers =======
function formatDateTime(ts: number) {
  const d = new Date(ts);
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  const hh = String(d.getHours()).padStart(2, "0");
  const min = String(d.getMinutes()).padStart(2, "0");
  return `${dd}/${mm}/${yyyy} ${hh}:${min}`;
}

function parseDateInput(value: string | undefined) {
  // value esperado: "YYYY-MM-DD"
  if (!value) return undefined;
  const [y, m, d] = value.split("-").map(Number);
  if (!y || !m || !d) return undefined;
  return new Date(y, m - 1, d).getTime();
}

interface TableHeaderCellProps {
  children: React.ReactNode;
}
function TableHeaderCell({ children }: TableHeaderCellProps) {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#b9b9b9] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="relative shrink-0 w-full">
        <div className="overflow-clip relative size-full">
          <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-2 py-[7px] relative w-full">
            <div className="font-['Rethink_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-white text-[15px] tracking-[-0.3px] w-full">
              <p className="leading-[1.5]">{children}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface TableDataCellProps {
  children: React.ReactNode;
  width?: string;
}
function TableDataCell({ children, width }: TableDataCellProps) {
  return (
    <div
      className={`bg-[rgba(255,255,255,0)] border-[1px] border-slate-900/10 content-stretch flex flex-col items-start justify-start relative self-stretch shrink-0 ${
        width || "basis-0 grow min-h-px min-w-px"
      }`}
    >
      <div aria-hidden className="absolute border-[#b9b9b9] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="relative shrink-0 w-full">
        <div className="overflow-clip relative size-full">
          <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-2 py-[7px] relative w-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// ======= props =======
interface TableProps {
  searchTerm: string;
  startDate: string; // YYYY-MM-DD
  endDate: string;   // YYYY-MM-DD
  orders: Order[];
}

// ======= component =======
export function Table({ searchTerm, startDate, endDate, orders }: TableProps) {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [confirmOrder, setConfirmOrder] = useState<Order | null>(null);

  const { updateOrderStatus } = useOrders();

  const handleViewOrder = (order: Order) => setSelectedOrder(order);
  const handleCloseModal = () => setSelectedOrder(null);

  const handleStatusClick = (order: Order) => {
    const isFinalizado = order.status === "done";
    if (isFinalizado) {
      setConfirmOrder(order); // confirmar reabertura
    } else {
      updateOrderStatus(order.id, "done");
    }
  };

  const confirmReopen = () => {
    if (confirmOrder) {
      // reabrir volta para "pending" (ou escolha "preparing")
      updateOrderStatus(confirmOrder.id, "pending");
    }
    setConfirmOrder(null);
  };
  const cancelReopen = () => setConfirmOrder(null);

  const filteredOrders = useMemo(() => {
    const q = (searchTerm || "").trim().toLowerCase();

    const startTs = parseDateInput(startDate);
    // para incluir o dia final por completo, somamos 1 dia - 1ms
    const endTsRaw = parseDateInput(endDate);
    const endTs = endTsRaw ? endTsRaw + 24 * 60 * 60 * 1000 - 1 : undefined;

    return orders.filter((order) => {
      // texto: número do pedido + nome do cliente
      const txtA =
        (order.orderNumber || "").toLowerCase() +
        " " +
        (order.customer?.name || "").toLowerCase();

      const matchesSearch = q === "" || txtA.includes(q);

      // data/hora: createdAt
      const t = order.createdAt || 0;
      const matchesDate =
        (!startTs || t >= startTs) && (!endTs || t <= endTs);

      return matchesSearch && matchesDate;
    });
  }, [orders, searchTerm, startDate, endDate]);

  return (
    <>
      <div
        className="bg-[rgba(255,255,255,0.3)] content-stretch flex flex-col items-start justify-start relative shrink-0 w-[912px]"
        data-name="Table"
      >
        <div aria-hidden className="absolute border border-[#b9b9b9] border-solid inset-0 pointer-events-none" />

        {/* Header */}
        <div className="bg-[#c1a07b] content-stretch flex items-start justify-start overflow-clip relative shrink-0 w-full">
          <div className="basis-0 content-stretch flex flex-col gap-2.5 grow items-start justify-start min-h-px min-w-px relative self-stretch shrink-0">
            <TableHeaderCell>Número</TableHeaderCell>
          </div>
          <div className="basis-0 content-stretch flex flex-col gap-2.5 grow items-start justify-start min-h-px min-w-px relative self-stretch shrink-0">
            <TableHeaderCell>Mesa</TableHeaderCell>
          </div>
          <div className="basis-0 content-stretch flex flex-col gap-2.5 grow items-start justify-start min-h-px min-w-px relative self-stretch shrink-0">
            <TableHeaderCell>Cliente</TableHeaderCell>
          </div>
          <div className="basis-0 content-stretch flex flex-col gap-2.5 grow items-start justify-start min-h-px min-w-px relative self-stretch shrink-0">
            <TableHeaderCell>Data/Horário</TableHeaderCell>
          </div>
          <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative self-stretch shrink-0 w-[145px]">
            <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
              <div aria-hidden className="absolute border-[#b9b9b9] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
              <div className="h-8 relative shrink-0 w-full">
                <div className="relative size-full">
                  <TableHeaderCell>Pedido</TableHeaderCell>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative self-stretch shrink-0 w-[145px]">
            <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
              <div aria-hidden className="absolute border-[#b9b9b9] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
              <div className="h-8 relative shrink-0 w-full">
                <div className="relative size-full">
                  <TableHeaderCell>Status</TableHeaderCell>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rows */}
        {filteredOrders.map((order) => {
          const number = order.orderNumber;
          const cliente = order.name;
          const mesa = order.table;
          const dt = new Date(order.createdAt);
          const dataHora = `${String(dt.getDate()).padStart(2,"0")}/${String(dt.getMonth()+1).padStart(2,"0")}/${dt.getFullYear()} ${String(dt.getHours()).padStart(2,"0")}:${String(dt.getMinutes()).padStart(2,"0")}`;
          const isFinalizado = order.status === "done";

          return (
            <div
              key={order.id}
              className="content-stretch flex items-start justify-start overflow-clip relative shrink-0 w-full"
            >
              <TableDataCell>
                <p className="font-['Fira_Code:Regular'] text-[12px]">{number}</p>
              </TableDataCell>
               <TableDataCell>
                <p className="font-['Fira_Code:Regular'] text-[12px]">{mesa}</p>
              </TableDataCell>
              <TableDataCell>
                <p className="font-['Fira_Code:Regular'] text-[12px]">{cliente}</p>
              </TableDataCell>
              <TableDataCell>
                <p className="font-['Fira_Code:Regular'] text-[12px]">{dataHora}</p>
              </TableDataCell>
              <TableDataCell width="w-[145px]">
                <ActionButton variant="outline" onClick={() => handleViewOrder(order)}>
                  Ver pedido
                </ActionButton>
              </TableDataCell>
              <TableDataCell width="w-[145px]">
                <div className={isFinalizado ? "opacity-40 cursor-pointer" : "opacity-100"}>
                  <ActionButton variant="filled" onClick={() => handleStatusClick(order)}>
                    {isFinalizado ? "Finalizado" : "Aberto"}
                  </ActionButton>
                </div>
              </TableDataCell>
            </div>
          );
        })}
      </div>

      {selectedOrder && (
        <OrderModal order={selectedOrder} onClose={handleCloseModal} />
      )}

      {confirmOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={cancelReopen} />
          <div className="relative bg-white w-full max-w-md rounded-lg shadow-xl p-6">
            <h3 className="text-lg font-bold text-[#0f4c50] mb-2">Reabrir pedido?</h3>
            <p className="text-sm text-gray-700 mb-4">
              Você deseja reabrir o pedido{" "}
              <span className="font-semibold">{confirmOrder.orderNumber || confirmOrder.id}</span>?
            </p>
            <div className="flex gap-2 justify-end">
              <button onClick={cancelReopen} className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-800">
                Cancelar
              </button>
              <button onClick={confirmReopen} className="px-4 py-2 rounded-md bg-[#0f4c50] hover:bg-[#0d4247] text-white">
                Reabrir
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
