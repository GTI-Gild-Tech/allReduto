import svgPaths from "./svg-jrmubkrrio";

function Frame4891() {
  return (
    <div className="bg-[rgba(248,248,248,0.75)] h-[36.8px] relative rounded-[5px] shrink-0 w-[350px]">
      <div aria-hidden="true" className="absolute border border-[#b5b5b5] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <div className="absolute font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] left-3.5 text-[#797474] text-[13px] text-nowrap top-[9px] tracking-[0.52px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">Nome do cliente</p>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-4" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="search">
          <path d={svgPaths.p24e77f00} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Depth11Frame0() {
  return (
    <div className="content-stretch flex flex-col items-center justify-start overflow-clip relative shrink-0" data-name="Depth 11, Frame 0">
      <Search />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#c1a07b] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-[10px] shrink-0 size-[35px]">
      <Depth11Frame0 />
    </div>
  );
}

function Frame4892() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <Frame4891 />
      <Frame9 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#c1a07b] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-[10px] shrink-0 size-[35px]">
      <Frame />
    </div>
  );
}

export default function Frame4893() {
  return (
    <div className="content-stretch flex gap-2.5 items-center justify-center relative size-full">
      <Frame4892 />
      <Frame10 />
    </div>
  );
}