interface DateFilterInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

function DateFilterInput({
  value,
  onChange,
  placeholder,
}: DateFilterInputProps) {
  return (
    <div className="bg-[rgba(248,248,248,0.75)] h-[36.8px] relative rounded-[5px] shrink-0 w-[140px]">
      <div
        aria-hidden="true"
        className="absolute border border-[#b5b5b5] border-solid inset-0 pointer-events-none rounded-[5px]"
      />
      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="absolute inset-0 px-2 py-2 bg-transparent text-[13px] font-['Open_Sans:Regular',_sans-serif] font-normal outline-none text-[#000000] cursor-pointer"
        style={{ fontVariationSettings: "'wdth' 100" }}
      />
    </div>
  );
}

interface FilterBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  startDate: string;
  setStartDate: (value: string) => void;
  endDate: string;
  setEndDate: (value: string) => void;
  clearFilters: () => void;
  searchButton: React.ReactNode;
}

export function FilterBar({
  searchTerm,
  setSearchTerm,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  clearFilters,
  searchButton,
}: FilterBarProps) {
  return (
    <div className="content-stretch flex gap-2.5 items-center justify-center relative shrink-0 w-[912px]">
      <div className="content-stretch flex gap-2.5 items-center justify-center relative shrink-0">
        <DateFilterInput
          value={startDate}
          onChange={setStartDate}
          placeholder="Data inicial"
        />
        <DateFilterInput
          value={endDate}
          onChange={setEndDate}
          placeholder="Data final"
        />
        <button
          onClick={clearFilters}
          className="bg-[#797474] hover:bg-[#6a6a6a] transition-colors text-white px-3 py-2 text-[13px] rounded-[5px] h-[36.8px] font-['Open_Sans:Regular',_sans-serif]"
        >
          Limpar
        </button>
      </div>
    </div>
  );
}