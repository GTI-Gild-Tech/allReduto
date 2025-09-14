import svgPaths from "./svg-6hqazlixmp";

function Frame3() {
  return (
    <div className="bg-[#c1a07b] box-border content-stretch flex gap-2.5 h-[41px] items-center justify-center px-5 py-2.5 relative rounded-[30px] shrink-0">
      <div aria-hidden="true" className="absolute border-[0px_1px_1px_0px] border-[rgba(0,0,0,0.18)] border-solid inset-0 pointer-events-none rounded-[30px] shadow-[2px_2px_2px_0px_rgba(115,82,46,0.3)]" />
      <div className="flex flex-col font-['Rethink_Sans:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[24px] text-center text-nowrap">
        <p className="leading-[40px] whitespace-pre">Pedidos</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#e4ddcd] box-border content-stretch flex gap-2.5 h-[41px] items-center justify-start px-5 py-2.5 relative rounded-[30px] shrink-0">
      <div aria-hidden="true" className="absolute border-[0px_1px_1px_0px] border-[rgba(0,0,0,0.18)] border-solid inset-0 pointer-events-none rounded-[30px] shadow-[2px_2px_2px_0px_rgba(138,107,71,0.2)]" />
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#000000] text-[24px] text-center text-nowrap">
        <p className="leading-[40px] whitespace-pre">Fidelidade</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#e4ddcd] box-border content-stretch flex gap-2.5 h-[41px] items-center justify-start px-5 py-2.5 relative rounded-[30px] shrink-0">
      <div aria-hidden="true" className="absolute border-[0px_1px_1px_0px] border-[rgba(0,0,0,0.18)] border-solid inset-0 pointer-events-none rounded-[30px] shadow-[2px_2px_2px_0px_rgba(138,107,71,0.2)]" />
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#000000] text-[24px] text-center text-nowrap">
        <p className="leading-[40px] whitespace-pre">Cardapio</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#e4ddcd] box-border content-stretch flex gap-2.5 h-[41px] items-center justify-start px-5 py-2.5 relative rounded-[30px] shrink-0">
      <div aria-hidden="true" className="absolute border-[0px_1px_1px_0px] border-[rgba(0,0,0,0.18)] border-solid inset-0 pointer-events-none rounded-[30px] shadow-[2px_2px_2px_0px_rgba(138,107,71,0.2)]" />
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#000000] text-[24px] text-center text-nowrap">
        <p className="leading-[40px] whitespace-pre">Cadastro</p>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="bg-[#f0f0f0] box-border content-stretch flex gap-5 items-start justify-start p-[10px] relative rounded-[30px] shadow-[4px_4px_4px_0px_rgba(130,118,87,0.19)] shrink-0" data-name="Navbar">
      <Frame3 />
      <Frame6 />
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-2 py-[7px] relative w-full">
          <div className="font-['Rethink_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[15px] tracking-[-0.3px] w-full">
            <p className="leading-[1.5]">Pedido</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Table/Cell">
      <div aria-hidden="true" className="absolute border-[#b9b9b9] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-2.5 grow items-start justify-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Table/Cell">
      <TableCell />
    </div>
  );
}

function Content1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-2 py-[7px] relative w-full">
          <div className="font-['Rethink_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[15px] tracking-[-0.3px] w-full">
            <p className="leading-[1.5]">Mesa</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Table/Cell">
      <div aria-hidden="true" className="absolute border-[#b9b9b9] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content1 />
    </div>
  );
}

function TableCell3() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-2.5 grow items-start justify-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Table/Cell">
      <TableCell2 />
    </div>
  );
}

function Content2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-2 py-[7px] relative w-full">
          <div className="font-['Rethink_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[15px] tracking-[-0.3px] w-full">
            <p className="leading-[1.5]">Nome</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Table/Cell">
      <div aria-hidden="true" className="absolute border-[#b9b9b9] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content2 />
    </div>
  );
}

function TableCell5() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-2.5 grow items-start justify-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Table/Cell">
      <TableCell4 />
    </div>
  );
}

function Content3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-2 py-[7px] relative w-full">
          <div className="font-['Rethink_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[15px] tracking-[-0.3px] w-full">
            <p className="leading-[1.5]">Data e horário</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Table/Cell">
      <div aria-hidden="true" className="absolute border-[#b9b9b9] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content3 />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-2.5 grow items-start justify-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Table/Cell">
      <TableCell6 />
    </div>
  );
}

function Content4() {
  return (
    <div className="h-8 relative shrink-0 w-full" data-name="Content">
      <div className="relative size-full">
        <div className="h-8 w-full" />
      </div>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Table/Cell">
      <div aria-hidden="true" className="absolute border-[#b9b9b9] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content4 />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-2.5 items-start justify-start relative self-stretch shrink-0 w-[145px]" data-name="Table/Cell">
      <TableCell8 />
    </div>
  );
}

function TableRow() {
  return (
    <div className="bg-[#c1a07b] content-stretch flex items-start justify-start overflow-clip relative shrink-0 w-full" data-name="Table/Row">
      <TableCell1 />
      <TableCell3 />
      <TableCell5 />
      <TableCell7 />
      {[...Array(2).keys()].map((_, i) => (
        <TableCell9 key={i} />
      ))}
    </div>
  );
}

function Content6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-2 py-[7px] relative w-full">
          <div className="font-['Fira_Code:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[12px] tracking-[-0.72px] w-full">
            <p className="leading-[1.5]">#232</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Table/Cell">
      <div aria-hidden="true" className="absolute border-[#b9b9b9] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content6 />
    </div>
  );
}

function Content7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-2 py-[7px] relative w-full">
          <div className="font-['Fira_Code:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[12px] tracking-[-0.72px] w-full">
            <p className="leading-[1.5]">02</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Table/Cell">
      <div aria-hidden="true" className="absolute border-[#b9b9b9] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content7 />
    </div>
  );
}

function Content8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-2 py-[7px] relative w-full">
          <div className="font-['Fira_Code:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[12px] tracking-[-0.72px] w-full">
            <p className="leading-[1.5]">Ilca Almeida</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Table/Cell">
      <div aria-hidden="true" className="absolute border-[#b9b9b9] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content8 />
    </div>
  );
}

function Content9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-2 py-[7px] relative w-full">
          <div className="font-['Fira_Code:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[12px] tracking-[-0.72px] w-full">
            <p className="leading-[1.5]">22/07/2025 16h30</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Table/Cell">
      <div aria-hidden="true" className="absolute border-[#b9b9b9] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content9 />
    </div>
  );
}

function Frame4776() {
  return (
    <div className="content-stretch flex gap-[9px] h-0 items-center justify-center relative shrink-0">
      <div className="font-['Rethink_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#0f4c50] text-[14px] text-center text-nowrap tracking-[-0.494px]">
        <p className="leading-[0px] whitespace-pre">Ver pedido</p>
      </div>
    </div>
  );
}

function Frame4782() {
  return (
    <div className="content-stretch flex gap-[52px] h-[23px] items-center justify-center relative rounded-[43px] shrink-0 w-[125px]">
      <div aria-hidden="true" className="absolute border border-[#0f4c50] border-solid inset-0 pointer-events-none rounded-[43px]" />
      <Frame4776 />
    </div>
  );
}

function Content10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-2 py-[7px] relative w-full">
          <Frame4782 />
        </div>
      </div>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start justify-start relative self-stretch shrink-0 w-[145px]" data-name="Table/Cell">
      <div aria-hidden="true" className="absolute border-[#b9b9b9] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content10 />
    </div>
  );
}

function Frame4777() {
  return (
    <div className="content-stretch flex gap-[9px] h-0 items-center justify-center relative shrink-0">
      <div className="font-['Rethink_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap tracking-[-0.494px]">
        <p className="leading-[0px] whitespace-pre">Finalizar</p>
      </div>
    </div>
  );
}

function Frame4783() {
  return (
    <div className="bg-[#0f4c50] content-stretch flex gap-[52px] h-[23px] items-center justify-center relative rounded-[43px] shrink-0 w-[125px]">
      <Frame4777 />
    </div>
  );
}

function Content11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-2 py-[7px] relative w-full">
          <Frame4783 />
        </div>
      </div>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start justify-start relative self-stretch shrink-0 w-[145px]" data-name="Table/Cell">
      <div aria-hidden="true" className="absolute border-[#b9b9b9] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content11 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="content-stretch flex items-start justify-start overflow-clip relative shrink-0 w-full" data-name="Table/Row">
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
    </div>
  );
}

function Table() {
  return (
    <div className="bg-[rgba(255,255,255,0.3)] content-stretch flex flex-col items-start justify-start relative shrink-0 w-[912px]" data-name="Table">
      <div aria-hidden="true" className="absolute border border-[#b9b9b9] border-solid inset-0 pointer-events-none" />
      <TableRow />
      {[...Array(17).keys()].map((_, i) => (
        <TableRow1 key={i} />
      ))}
    </div>
  );
}

function Frame27() {
  return (
    <div className="relative shrink-0 size-4">
      <div className="absolute bottom-0 left-0 right-[-3.13%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 16">
          <g id="Frame 27">
            <path d={svgPaths.p1ca2d600} fill="var(--fill-0, #A9A9A9)" fillOpacity="0.73" id="Vector" />
            <path d={svgPaths.p18f8fd40} fill="var(--fill-0, #A9A9A9)" fillOpacity="0.73" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="h-4 relative shrink-0 w-2">
      <div className="absolute bottom-0 left-0 right-[-6.25%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 16">
          <g id="Frame 26">
            <path d={svgPaths.p1ca2d600} fill="var(--fill-0, #A9A9A9)" fillOpacity="0.73" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[15px] items-center justify-start relative shrink-0">
      <Frame27 />
      <Frame26 />
    </div>
  );
}

function Frame120() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex font-['Lato:SemiBold',_sans-serif] gap-6 items-start justify-start ml-[7px] mt-[7px] not-italic relative text-[12px] text-center">
      <div className="flex flex-col h-[13px] justify-end relative shrink-0 text-[#fbfbfb] w-3.5">
        <p className="leading-[normal]">1</p>
      </div>
      <div className="flex flex-col h-[13px] justify-end relative shrink-0 text-[#0f4c50] w-3.5">
        <p className="leading-[normal]">2</p>
      </div>
      <div className="flex flex-col h-[13px] justify-end relative shrink-0 text-[#0f4c50] w-3.5">
        <p className="leading-[normal]">3</p>
      </div>
      <div className="flex flex-col h-[13px] justify-end relative shrink-0 text-[#0f4c50] w-3.5">
        <p className="leading-[normal]">4</p>
      </div>
      <div className="flex flex-col h-[13px] justify-end relative shrink-0 text-[#0f4c50] w-3.5">
        <p className="leading-[normal]">5</p>
      </div>
      <div className="flex flex-col h-[13px] justify-end relative shrink-0 text-[#0f4c50] w-3.5">
        <p className="leading-[normal]">6</p>
      </div>
      <div className="flex flex-col h-[13px] justify-end relative shrink-0 text-[#0f4c50] w-3.5">
        <p className="leading-[normal]">7</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="1">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-7">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <circle cx="14" cy="14" fill="var(--fill-0, #0F4C50)" id="Ellipse 1" r="14" />
        </svg>
      </div>
      <Frame120 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="h-4 relative w-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 16">
        <g id="Frame 29">
          <path d={svgPaths.p4172e00} fill="var(--fill-0, #A9A9A9)" fillOpacity="0.73" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame28() {
  return (
    <div className="relative size-4">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame 28">
          <path d={svgPaths.p4172e00} fill="var(--fill-0, #A9A9A9)" fillOpacity="0.73" id="Vector" />
          <path d={svgPaths.p10528400} fill="var(--fill-0, #A9A9A9)" fillOpacity="0.73" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[15px] h-4 items-center justify-start relative shrink-0 w-[39px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Frame29 />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Frame28 />
        </div>
      </div>
    </div>
  );
}

function Frame121() {
  return (
    <div className="content-stretch flex gap-[25px] items-center justify-center relative shrink-0">
      <Frame30 />
      <Component1 />
      <Frame31 />
    </div>
  );
}

function LeftSide8Column() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[25px] grow items-center justify-start min-h-px min-w-px px-0 py-[50px] relative shrink-0 w-full" data-name="Left side 8 Column">
      <div className="font-['Retrokia:Demo',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#0f4c50] text-[64px] text-nowrap tracking-[-1.28px]">
        <p className="leading-[1.5] whitespace-pre">Pedidos</p>
      </div>
      <Table />
      <Frame121 />
    </div>
  );
}

function MainContainer() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-8 inset-0 items-center justify-center p-[32px]" data-name="Main Container">
      <Navbar />
      <LeftSide8Column />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-[#f0eee9] relative size-full" data-name="Desktop">
      <MainContainer />
    </div>
  );
}