import { KanbanBoard } from "./KanbanBoard";

export function CardapioContent() {
  return (
    <div className="z-0 basis-0 box-border content-stretch flex flex-col gap-6 md:gap-[25px] grow items-center justify-start min-h-screen w-full px-4 sm:px-6 md:px-8 lg:px-0 py-8 md:py-[50px]">
      <div className="font-['Retrokia:Demo',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#0f4c50] text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-nowrap tracking-[-1.28px]">
        <p className="leading-[1.5] whitespace-pre font-[Retrokia]">Cardapio</p>
      </div>
      <div className="flex-grow w-full bg-[#f0eee9] rounded-lg overflow-hidden">
        <KanbanBoard />
      </div>
    </div>
  );
}