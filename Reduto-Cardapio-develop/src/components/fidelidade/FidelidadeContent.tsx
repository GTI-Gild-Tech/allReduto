import { useState } from "react";
import { useFidelidade } from "../context/FidelidadeContext";
import { FidelidadeTable } from "./FidelidadeTable";
import { FidelidadeMobileView } from "./FidelidadeMobileView";
import { NewCustomerModal } from "./NewCustomerModal";
import { NewRecordModal } from "./NewRecordModal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Plus } from "lucide-react";
import { TitleCommon } from "../shared/TitleCommon";

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5 1a5.5 5.5 0 1 0 3.45 9.863l3.594 3.594a.75.75 0 1 0 1.06-1.06l-3.593-3.595A5.5 5.5 0 0 0 6.5 1zM2.5 6.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0z"
        fill="white"
      />
    </svg>
  );
}

export function FidelidadeContent() {
  const { customers, refreshCustomers } = useFidelidade();
  const [searchTerm, setSearchTerm] = useState("");
  const [isNewCustomerOpen, setIsNewCustomerOpen] = useState(false);
  const [isNewRecordOpen, setIsNewRecordOpen] = useState(false);

  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-[25px] grow items-center justify-start xl:mx-[20%] lg:mx-[10%] mx-[5%] relative shrink-0"
      data-name="Left side 8 Column"
    >
      {/* Title */}
      <TitleCommon text="Fidelidade" />

      {/* Search bar */}
      <div className="flex flex-row gap-2 md:gap-10 items-center justify-center relative shrink-0">
        {/* Input container */}

        <div className="flex flex-row w-[100%]">
          <div className=" bg-[rgba(248,248,248,0.75)] border-[#b5b5b5] border-solid box-border flex flex-row items-center px-[15px] py-[6px] relative rounded-[5px] shrink-0 w-[100%] border">
          <input
            type="text"
            placeholder="Digite o nome ou telefone do cliente"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-none outline-none text-black placeholder-[#797474] bg-transparent w-full md:min-w-[240px]"
          />
        </div>

        {/* Search button */}
        <button
          onClick={() => {}}
          className="hidden md:flex bg-[#0f4c50] hover:bg-[#0d4247] transition-colors items-center justify-center w-[37px] h-[37px] rounded-md shrink-0 cursor-pointer "
        >
          <SearchIcon className="w-5 h-5"/>
        </button>
        </div>
        

        {/* Adicionar dropdown button */}
        <div className="relative shrink-0">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="bg-[#0f4c50] box-border content-stretch flex gap-2.5 items-center justify-center px-4 py-[11px] relative rounded-[50px] shrink-0 hover:bg-[#0d4247] transition-colors">
                <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-center text-nowrap text-white tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p className="leading-none whitespace-pre">Adicionar</p>
                </div>
                <Plus className="size-4 text-white" />
                
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white min-w-[100px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] rounded-[6px] p-1" sideOffset={5}>
              <DropdownMenuItem onClick={() => {
                  setIsNewCustomerOpen(true);
                }} className="cursor-pointer hover:bg-slate-100">
                Novo cliente
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => {
                  setIsNewRecordOpen(true);
                }} className="cursor-pointer hover:bg-slate-100">
                Novo registro
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="hidden md:block w-full">
        <FidelidadeTable searchTerm={searchTerm} customers={customers} />
      </div>
      <FidelidadeMobileView searchTerm={searchTerm} customers={customers} />

      <NewCustomerModal
        isOpen={isNewCustomerOpen}
        onClose={() => setIsNewCustomerOpen(false)}
      />

      <NewRecordModal
        isOpen={isNewRecordOpen}
        onClose={() => setIsNewRecordOpen(false)}
        onSuccess={() => refreshCustomers()}
      />
    </div>
  );
}