interface FormFieldProps {
  label: string;
  placeholder?: string;
}

export function FormField({ label, placeholder }: FormFieldProps) {
  return (
    <div className="relative h-[59.8px] w-[350px]">
      <div className="absolute h-[36.8px] left-0 rounded-[5px] top-[23px] w-[350px]">
        <div
          aria-hidden="true"
          className="absolute border border-[#b5b5b5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.25)]"
        />
        <input
          type="text"
          placeholder={placeholder}
          className="absolute inset-0 px-3 py-2 bg-transparent text-[13px] font-['Open_Sans:Regular',_sans-serif] font-normal outline-none"
        />
      </div>
      <div
        className="absolute font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] left-0 text-[#000000] text-[13px] text-nowrap top-0 tracking-[0.52px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal] whitespace-pre">
          {label}
        </p>
      </div>
    </div>
  );
}

interface CadastroBadgeGhostProps {
  children: React.ReactNode;
  className?: string;
}

export function CadastroBadgeGhost({ children, className = "" }: CadastroBadgeGhostProps) {
  return (
    <div
      className={`box-border content-stretch flex gap-2.5 items-center justify-start px-2 py-0.5 relative rounded-sm shrink-0 ${className}`}
      data-name="badge ghost"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#0f4c50] border-solid inset-0 pointer-events-none rounded-sm"
      />
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#0f4c50] text-[14px] text-nowrap">
        <p className="leading-[1.4] whitespace-pre">
          {children}
        </p>
      </div>
    </div>
  );
}

export function CadastroSizeQuantityTags() {
  return (
    <div
      className="box-border content-stretch flex gap-2 h-10 items-center justify-start overflow-clip px-0 py-1 relative shrink-0 w-full"
      data-name="tags"
    >
      <CadastroBadgeGhost>Tamanho</CadastroBadgeGhost>
      <CadastroBadgeGhost>Porção</CadastroBadgeGhost>
    </div>
  );
}

export function CadastroSizeOptions() {
  return (
    <div
      className="box-border content-stretch flex gap-2 h-10 items-center justify-start overflow-clip px-0 py-1 relative shrink-0 w-full"
      data-name="tags"
    >
      <CadastroBadgeGhost>Tamanho P</CadastroBadgeGhost>
      <CadastroBadgeGhost>Tamanho M</CadastroBadgeGhost>
      <CadastroBadgeGhost>Tamanho G</CadastroBadgeGhost>
    </div>
  );
}

interface CadastroSizeValueRowProps {
  size: string;
}

export function CadastroSizeValueRow({ size }: CadastroSizeValueRowProps) {
  return (
    <div className="content-stretch flex gap-[11px] items-center justify-start relative shrink-0">
      <CadastroBadgeGhost className="w-[92px]">
        {size}
      </CadastroBadgeGhost>
      <div className="h-9 relative rounded-[5px] shrink-0 w-[166px]">
        <div
          aria-hidden="true"
          className="absolute border border-[#b5b5b5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.25)]"
        />
        <input
          type="text"
          placeholder=""
          className="absolute inset-0 px-3 py-2 bg-transparent text-[13px] font-['Open_Sans:Regular',_sans-serif] font-normal outline-none"
        />
      </div>
    </div>
  );
}

export function CadastroSizeValues() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 h-[126px] items-start justify-center overflow-clip px-0 py-1 relative shrink-0 w-full"
      data-name="tags"
    >
      <CadastroSizeValueRow size="Tamanho P" />
      <CadastroSizeValueRow size="Tamanho M" />
      <CadastroSizeValueRow size="Tamanho G" />
    </div>
  );
}