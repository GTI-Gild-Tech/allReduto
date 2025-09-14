import svgPaths from "./logo";
import imgBackground from "figma:asset/28fc783ae0566eeb1879aa672ed5c5362de02876.png";

function Background() {
  return (
    <div
      className="absolute bg-[#ffffff] bg-[position:0%_0%,_50%_50%,_0%_0%] bg-size-[auto,cover,auto] blur-[9.9px] filter h-[1107px] left-0 top-0 w-[1743px]"
      data-name="Background"
      style={{ backgroundImage: `url('${imgBackground}')` }}
    />
  );
}

function Background1() {
  return (
    <div className="absolute h-[1088px] left-0 overflow-clip top-0 w-[1728px]" data-name="Background">
      <Background />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-16" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="Frame">
          <path d={svgPaths.p1168e00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-16" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="Frame">
          <path d={svgPaths.p18818200} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Navbar() {
  return (
    <div
      className="absolute bg-[#c1a07b] box-border content-stretch flex flex-row gap-5 items-start justify-start left-1/2 px-[200px] py-10 rounded-bl-[50px] rounded-br-[50px] top-0 translate-x-[-50%]"
      data-name="Navbar"
    >
      <Frame />
      <Frame1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute flex flex-col font-['Retrokia:Demo',_sans-serif] justify-center leading-[0] left-px not-italic text-[#0f4c50] text-[64px] text-left text-nowrap top-[87px] translate-y-[-50%]">
      <p className="block leading-[0px] whitespace-pre">Cappuccinos</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
      <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
    </div>
  );
}

function Camada2() {
  return (
    <div
      className="absolute h-[455px] top-[338px] translate-x-[-50%] w-[663px]"
      data-name="Camada_2"
      style={{ left: "calc(50% + 0.5px)" }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 663 455">
        <g clipPath="url(#clip0_1_1169)" id="Camada_2">
          <g id="Group">
            <path d={svgPaths.p34ed4580} fill="var(--fill-0, #E4DDCD)" id="Vector" />
            <path d={svgPaths.pc665b00} fill="var(--fill-0, #E4DDCD)" id="Vector_2" />
            <path d={svgPaths.pdcc5180} fill="var(--fill-0, #E4DDCD)" id="Vector_3" />
            <path d={svgPaths.p46fe500} fill="var(--fill-0, #E4DDCD)" id="Vector_4" />
            <path d={svgPaths.p23d9ca80} fill="var(--fill-0, #E4DDCD)" id="Vector_5" />
            <path d={svgPaths.p15e99a00} fill="var(--fill-0, #E4DDCD)" id="Vector_6" />
            <path d={svgPaths.p10ace700} fill="var(--fill-0, #E4DDCD)" id="Vector_7" />
          </g>
          <g id="Group_2">
            <path d={svgPaths.p1bdb7f00} fill="var(--fill-0, #E4DDCD)" id="Vector_8" />
            <path d={svgPaths.p23493a00} fill="var(--fill-0, #E4DDCD)" id="Vector_9" />
          </g>
          <path d={svgPaths.p895d200} fill="var(--fill-0, #C1A07B)" id="Vector_10" />
        </g>
        <defs>
          <clipPath id="clip0_1_1169">
            <rect fill="white" height="455" width="663" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame4780() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4778() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4780 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame8 />
      <Frame7 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame2 />
          <Frame3 />
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame9 />
    </div>
  );
}

function Frame4779() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4778 />
      <Frame11 />
      <Frame10 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-0 rounded-[10px] top-[179px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4779 />
    </div>
  );
}

function Frame4781() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4782() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4781 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame12 />
      <Frame19 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame6 />
          <Frame35 />
          <Frame36 />
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame37 />
    </div>
  );
}

function Frame4783() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4782 />
      <Frame34 />
      <Frame38 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-0 rounded-[10px] top-[465px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4783 />
    </div>
  );
}

function Frame4784() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4785() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4784 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame39 />
      <Frame40 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame45() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame42 />
          <Frame43 />
          <Frame44 />
        </div>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame45 />
    </div>
  );
}

function Frame4786() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4785 />
      <Frame41 />
      <Frame46 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-0 rounded-[10px] top-[322px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4786 />
    </div>
  );
}

function Frame4787() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4788() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4787 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame47 />
      <Frame48 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame51() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame53() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame50 />
          <Frame51 />
          <Frame52 />
        </div>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame53 />
    </div>
  );
}

function Frame4790() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4788 />
      <Frame49 />
      <Frame54 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-0 rounded-[10px] top-[608px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4790 />
    </div>
  );
}

function Frame4791() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4792() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4791 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame55 />
      <Frame56 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame59() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame61() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame58 />
          <Frame59 />
          <Frame60 />
        </div>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame61 />
    </div>
  );
}

function Frame4793() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4792 />
      <Frame57 />
      <Frame62 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-[577px] rounded-[10px] top-[179px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4793 />
    </div>
  );
}

function Frame4794() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4795() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4794 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame63 />
      <Frame64 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame67() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame69() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame66 />
          <Frame67 />
          <Frame68 />
        </div>
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame69 />
    </div>
  );
}

function Frame4796() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4795 />
      <Frame65 />
      <Frame70 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-[577px] rounded-[10px] top-[465px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4796 />
    </div>
  );
}

function Frame4797() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4798() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4797 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame71 />
      <Frame72 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame75() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame77() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame74 />
          <Frame75 />
          <Frame76 />
        </div>
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame77 />
    </div>
  );
}

function Frame4799() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4798 />
      <Frame73 />
      <Frame78 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-[577px] rounded-[10px] top-[322px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4799 />
    </div>
  );
}

function Frame4800() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4801() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4800 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame80() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame81() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame79 />
      <Frame80 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame83() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame84() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame85() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame82 />
          <Frame83 />
          <Frame84 />
        </div>
      </div>
    </div>
  );
}

function Frame86() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame85 />
    </div>
  );
}

function Frame4802() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4801 />
      <Frame81 />
      <Frame86 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-[577px] rounded-[10px] top-[608px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4802 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="h-[722px] relative shrink-0 w-full">
      <Frame5 />
      <Frame28 />
      <Frame27 />
      <Frame29 />
      <Frame30 />
      <Frame32 />
      <Frame31 />
      <Frame33 />
      <Group />
    </div>
  );
}

function Frame4803() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4804() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4803 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame88() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame89() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame87 />
      <Frame88 />
    </div>
  );
}

function Frame90() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame91() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame92() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame93() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame90 />
          <Frame91 />
          <Frame92 />
        </div>
      </div>
    </div>
  );
}

function Frame94() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame93 />
    </div>
  );
}

function Frame4805() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4804 />
      <Frame89 />
      <Frame94 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-0 rounded-[10px] top-[179px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4805 />
    </div>
  );
}

function Frame4806() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4807() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4806 />
    </div>
  );
}

function Frame95() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame96() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame97() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame95 />
      <Frame96 />
    </div>
  );
}

function Frame98() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame99() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame100() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame101() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame98 />
          <Frame99 />
          <Frame100 />
        </div>
      </div>
    </div>
  );
}

function Frame102() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame101 />
    </div>
  );
}

function Frame4808() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4807 />
      <Frame97 />
      <Frame102 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-0 rounded-[10px] top-[465px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4808 />
    </div>
  );
}

function Frame4809() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4810() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4809 />
    </div>
  );
}

function Frame103() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame104() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame105() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame103 />
      <Frame104 />
    </div>
  );
}

function Frame106() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame107() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame108() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame109() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame106 />
          <Frame107 />
          <Frame108 />
        </div>
      </div>
    </div>
  );
}

function Frame110() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame109 />
    </div>
  );
}

function Frame4811() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4810 />
      <Frame105 />
      <Frame110 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-0 rounded-[10px] top-[322px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4811 />
    </div>
  );
}

function Frame4812() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4813() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4812 />
    </div>
  );
}

function Frame111() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame112() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame113() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <Group1 />
      <Frame111 />
      <Frame112 />
    </div>
  );
}

function Frame114() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame115() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame116() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame117() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame114 />
          <Frame115 />
          <Frame116 />
        </div>
      </div>
    </div>
  );
}

function Frame118() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame117 />
    </div>
  );
}

function Frame4814() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4813 />
      <Frame113 />
      <Frame118 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-0 rounded-[10px] top-[608px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4814 />
    </div>
  );
}

function Frame4815() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4816() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4815 />
    </div>
  );
}

function Frame119() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame120() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame121() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame119 />
      <Frame120 />
    </div>
  );
}

function Frame122() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame123() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame124() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame125() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame122 />
          <Frame123 />
          <Frame124 />
        </div>
      </div>
    </div>
  );
}

function Frame126() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame125 />
    </div>
  );
}

function Frame4817() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4816 />
      <Frame121 />
      <Frame126 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-[577px] rounded-[10px] top-[179px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4817 />
    </div>
  );
}

function Frame4818() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4819() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4818 />
    </div>
  );
}

function Frame127() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame128() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame129() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame127 />
      <Frame128 />
    </div>
  );
}

function Frame130() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame131() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame132() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame133() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame130 />
          <Frame131 />
          <Frame132 />
        </div>
      </div>
    </div>
  );
}

function Frame134() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame133 />
    </div>
  );
}

function Frame4820() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4819 />
      <Frame129 />
      <Frame134 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-[577px] rounded-[10px] top-[465px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4820 />
    </div>
  );
}

function Frame4821() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4822() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4821 />
    </div>
  );
}

function Frame135() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame136() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame137() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame135 />
      <Frame136 />
    </div>
  );
}

function Frame138() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame139() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame140() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame141() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame138 />
          <Frame139 />
          <Frame140 />
        </div>
      </div>
    </div>
  );
}

function Frame142() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame141 />
    </div>
  );
}

function Frame4823() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4822 />
      <Frame137 />
      <Frame142 />
    </div>
  );
}

function Frame143() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-[577px] rounded-[10px] top-[322px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4823 />
    </div>
  );
}

function Frame4824() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4825() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4824 />
    </div>
  );
}

function Frame144() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame145() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame146() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame144 />
      <Frame145 />
    </div>
  );
}

function Frame147() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame148() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame149() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame150() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame147 />
          <Frame148 />
          <Frame149 />
        </div>
      </div>
    </div>
  );
}

function Frame151() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame150 />
    </div>
  );
}

function Frame4826() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4825 />
      <Frame146 />
      <Frame151 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-[577px] rounded-[10px] top-[608px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4826 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="h-[722px] relative shrink-0 w-full">
      <Frame20 />
      <Frame23 />
      <Frame22 />
      <Frame24 />
      <Frame21 />
      <Frame25 />
      <Frame143 />
      <Frame26 />
      <div className="absolute flex flex-col font-['Retrokia:Demo',_sans-serif] justify-center leading-[0] left-px not-italic text-[#0f4c50] text-[64px] text-left text-nowrap top-[87px] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">Cafes</p>
      </div>
    </div>
  );
}

function Frame4827() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">1 - R$3,60</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">12 - R$20,00</p>
      </div>
    </div>
  );
}

function Frame4828() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#000000] text-[24px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Pão de queijo</p>
      </div>
      <Frame4827 />
    </div>
  );
}

function Frame152() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame153() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame154() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame152 />
      <Frame153 />
    </div>
  );
}

function Frame155() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame156() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame157() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame158() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame155 />
          <Frame156 />
          <Frame157 />
        </div>
      </div>
    </div>
  );
}

function Frame159() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame158 />
    </div>
  );
}

function Frame4829() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4828 />
      <Frame154 />
      <Frame159 />
    </div>
  );
}

function Frame160() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-0 rounded-[10px] top-[179px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4829 />
    </div>
  );
}

function Frame4830() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4831() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4830 />
    </div>
  );
}

function Frame161() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame162() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame163() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame161 />
      <Frame162 />
    </div>
  );
}

function Frame164() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame165() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame166() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame167() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame164 />
          <Frame165 />
          <Frame166 />
        </div>
      </div>
    </div>
  );
}

function Frame168() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame167 />
    </div>
  );
}

function Frame4832() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4831 />
      <Frame163 />
      <Frame168 />
    </div>
  );
}

function Frame169() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-0 rounded-[10px] top-[465px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4832 />
    </div>
  );
}

function Frame4833() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4834() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4833 />
    </div>
  );
}

function Frame170() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame171() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame172() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame170 />
      <Frame171 />
    </div>
  );
}

function Frame173() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame174() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame175() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame176() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame173 />
          <Frame174 />
          <Frame175 />
        </div>
      </div>
    </div>
  );
}

function Frame177() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame176 />
    </div>
  );
}

function Frame4835() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4834 />
      <Frame172 />
      <Frame177 />
    </div>
  );
}

function Frame178() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-0 rounded-[10px] top-[322px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4835 />
    </div>
  );
}

function Frame4836() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4837() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4836 />
    </div>
  );
}

function Frame179() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame180() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame181() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame179 />
      <Frame180 />
    </div>
  );
}

function Frame182() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame183() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame184() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame185() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame182 />
          <Frame183 />
          <Frame184 />
        </div>
      </div>
    </div>
  );
}

function Frame186() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame185 />
    </div>
  );
}

function Frame4838() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4837 />
      <Frame181 />
      <Frame186 />
    </div>
  );
}

function Frame187() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-0 rounded-[10px] top-[608px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4838 />
    </div>
  );
}

function Frame4839() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4840() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4839 />
    </div>
  );
}

function Frame188() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame189() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame190() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame188 />
      <Frame189 />
    </div>
  );
}

function Frame191() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame192() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame193() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame194() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame191 />
          <Frame192 />
          <Frame193 />
        </div>
      </div>
    </div>
  );
}

function Frame195() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame194 />
    </div>
  );
}

function Frame4841() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4840 />
      <Frame190 />
      <Frame195 />
    </div>
  );
}

function Frame196() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-[577px] rounded-[10px] top-[179px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4841 />
    </div>
  );
}

function Frame4842() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4843() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4842 />
    </div>
  );
}

function Frame197() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame198() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame199() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame197 />
      <Frame198 />
    </div>
  );
}

function Frame200() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame201() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame202() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame203() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame200 />
          <Frame201 />
          <Frame202 />
        </div>
      </div>
    </div>
  );
}

function Frame204() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame203 />
    </div>
  );
}

function Frame4844() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4843 />
      <Frame199 />
      <Frame204 />
    </div>
  );
}

function Frame205() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-[577px] rounded-[10px] top-[465px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4844 />
    </div>
  );
}

function Frame4845() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4846() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4845 />
    </div>
  );
}

function Frame206() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame207() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame208() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame206 />
      <Frame207 />
    </div>
  );
}

function Frame209() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame210() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame211() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame212() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame209 />
          <Frame210 />
          <Frame211 />
        </div>
      </div>
    </div>
  );
}

function Frame213() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame212 />
    </div>
  );
}

function Frame4847() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4846 />
      <Frame208 />
      <Frame213 />
    </div>
  );
}

function Frame214() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-[577px] rounded-[10px] top-[322px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4847 />
    </div>
  );
}

function Frame4848() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4849() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4848 />
    </div>
  );
}

function Frame215() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame216() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame217() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame215 />
      <Frame216 />
    </div>
  );
}

function Frame218() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame219() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame220() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame221() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame218 />
          <Frame219 />
          <Frame220 />
        </div>
      </div>
    </div>
  );
}

function Frame222() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame221 />
    </div>
  );
}

function Frame4850() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4849 />
      <Frame217 />
      <Frame222 />
    </div>
  );
}

function Frame223() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-[577px] rounded-[10px] top-[608px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4850 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="h-[722px] relative shrink-0 w-full">
      <Frame160 />
      <Frame169 />
      <Frame178 />
      <Frame187 />
      <Frame196 />
      <Frame205 />
      <Frame214 />
      <Frame223 />
      <div className="absolute flex flex-col font-['Retrokia:Demo',_sans-serif] justify-center leading-[0] left-px not-italic text-[#0f4c50] text-[64px] text-left text-nowrap top-[87px] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">Lanches</p>
      </div>
    </div>
  );
}

function Frame4851() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4852() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4851 />
    </div>
  );
}

function Frame224() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame225() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame226() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame224 />
      <Frame225 />
    </div>
  );
}

function Frame227() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame228() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame229() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame230() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame227 />
          <Frame228 />
          <Frame229 />
        </div>
      </div>
    </div>
  );
}

function Frame231() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame230 />
    </div>
  );
}

function Frame4853() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4852 />
      <Frame226 />
      <Frame231 />
    </div>
  );
}

function Frame232() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-0 rounded-[10px] top-[179px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4853 />
    </div>
  );
}

function Frame4854() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4855() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4854 />
    </div>
  );
}

function Frame233() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame234() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame235() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame233 />
      <Frame234 />
    </div>
  );
}

function Frame236() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame237() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame238() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame239() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame236 />
          <Frame237 />
          <Frame238 />
        </div>
      </div>
    </div>
  );
}

function Frame240() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame239 />
    </div>
  );
}

function Frame4856() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4855 />
      <Frame235 />
      <Frame240 />
    </div>
  );
}

function Frame241() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-0 rounded-[10px] top-[465px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4856 />
    </div>
  );
}

function Frame4857() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4858() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4857 />
    </div>
  );
}

function Frame242() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame243() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame244() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame242 />
      <Frame243 />
    </div>
  );
}

function Frame245() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame246() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame247() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame248() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame245 />
          <Frame246 />
          <Frame247 />
        </div>
      </div>
    </div>
  );
}

function Frame249() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame248 />
    </div>
  );
}

function Frame4859() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4858 />
      <Frame244 />
      <Frame249 />
    </div>
  );
}

function Frame250() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-0 rounded-[10px] top-[322px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4859 />
    </div>
  );
}

function Frame4860() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4861() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4860 />
    </div>
  );
}

function Frame251() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame252() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame253() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame251 />
      <Frame252 />
    </div>
  );
}

function Frame254() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame255() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame256() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame257() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame254 />
          <Frame255 />
          <Frame256 />
        </div>
      </div>
    </div>
  );
}

function Frame258() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame257 />
    </div>
  );
}

function Frame4862() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4861 />
      <Frame253 />
      <Frame258 />
    </div>
  );
}

function Frame259() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-0 rounded-[10px] top-[608px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4862 />
    </div>
  );
}

function Frame4863() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4864() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4863 />
    </div>
  );
}

function Frame260() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame261() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame262() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame260 />
      <Frame261 />
    </div>
  );
}

function Frame263() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame264() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame265() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame266() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame263 />
          <Frame264 />
          <Frame265 />
        </div>
      </div>
    </div>
  );
}

function Frame267() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame266 />
    </div>
  );
}

function Frame4865() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4864 />
      <Frame262 />
      <Frame267 />
    </div>
  );
}

function Frame268() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-[577px] rounded-[10px] top-[179px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4865 />
    </div>
  );
}

function Frame4866() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4867() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4866 />
    </div>
  );
}

function Frame269() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame270() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame271() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame269 />
      <Frame270 />
    </div>
  );
}

function Frame272() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame273() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame274() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame275() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame272 />
          <Frame273 />
          <Frame274 />
        </div>
      </div>
    </div>
  );
}

function Frame276() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame275 />
    </div>
  );
}

function Frame4868() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4867 />
      <Frame271 />
      <Frame276 />
    </div>
  );
}

function Frame277() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-[577px] rounded-[10px] top-[465px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4868 />
    </div>
  );
}

function Frame4869() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4870() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4869 />
    </div>
  );
}

function Frame278() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame279() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame280() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame278 />
      <Frame279 />
    </div>
  );
}

function Frame281() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame282() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame283() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame284() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame281 />
          <Frame282 />
          <Frame283 />
        </div>
      </div>
    </div>
  );
}

function Frame285() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame284 />
    </div>
  );
}

function Frame4871() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4870 />
      <Frame280 />
      <Frame285 />
    </div>
  );
}

function Frame286() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-[577px] rounded-[10px] top-[322px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4871 />
    </div>
  );
}

function Frame4872() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4873() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4872 />
    </div>
  );
}

function Frame287() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame288() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame289() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame287 />
      <Frame288 />
    </div>
  );
}

function Frame290() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame291() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame292() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame293() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame290 />
          <Frame291 />
          <Frame292 />
        </div>
      </div>
    </div>
  );
}

function Frame294() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame293 />
    </div>
  );
}

function Frame4874() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4873 />
      <Frame289 />
      <Frame294 />
    </div>
  );
}

function Frame295() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-[577px] rounded-[10px] top-[608px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4874 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="h-[722px] relative shrink-0 w-full">
      <Frame232 />
      <Frame241 />
      <Frame250 />
      <Frame259 />
      <Frame268 />
      <Frame277 />
      <Frame286 />
      <Frame295 />
      <div className="absolute flex flex-col font-['Retrokia:Demo',_sans-serif] justify-center leading-[0] left-px not-italic text-[#0f4c50] text-[64px] text-left text-nowrap top-[87px] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">Doces</p>
      </div>
    </div>
  );
}

function Frame4875() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4876() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4875 />
    </div>
  );
}

function Frame296() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame297() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame298() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame296 />
      <Frame297 />
    </div>
  );
}

function Frame299() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame300() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame301() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame302() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame299 />
          <Frame300 />
          <Frame301 />
        </div>
      </div>
    </div>
  );
}

function Frame303() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame302 />
    </div>
  );
}

function Frame4877() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4876 />
      <Frame298 />
      <Frame303 />
    </div>
  );
}

function Frame304() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-0 rounded-[10px] top-[179px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4877 />
    </div>
  );
}

function Frame4878() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4879() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4878 />
    </div>
  );
}

function Frame305() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame306() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame307() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame305 />
      <Frame306 />
    </div>
  );
}

function Frame308() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame309() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame310() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame311() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame308 />
          <Frame309 />
          <Frame310 />
        </div>
      </div>
    </div>
  );
}

function Frame312() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame311 />
    </div>
  );
}

function Frame4880() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4879 />
      <Frame307 />
      <Frame312 />
    </div>
  );
}

function Frame313() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-0 rounded-[10px] top-[465px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4880 />
    </div>
  );
}

function Frame4881() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4882() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4881 />
    </div>
  );
}

function Frame314() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame315() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame316() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame314 />
      <Frame315 />
    </div>
  );
}

function Frame317() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame318() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame319() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame320() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame317 />
          <Frame318 />
          <Frame319 />
        </div>
      </div>
    </div>
  );
}

function Frame321() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame320 />
    </div>
  );
}

function Frame4883() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4882 />
      <Frame316 />
      <Frame321 />
    </div>
  );
}

function Frame322() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-0 rounded-[10px] top-[322px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4883 />
    </div>
  );
}

function Frame4884() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4885() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4884 />
    </div>
  );
}

function Frame323() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame324() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame325() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame323 />
      <Frame324 />
    </div>
  );
}

function Frame326() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame327() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame328() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame329() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame326 />
          <Frame327 />
          <Frame328 />
        </div>
      </div>
    </div>
  );
}

function Frame330() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame329 />
    </div>
  );
}

function Frame4886() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4885 />
      <Frame325 />
      <Frame330 />
    </div>
  );
}

function Frame331() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-0 rounded-[10px] top-[608px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4886 />
    </div>
  );
}

function Frame4887() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4888() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4887 />
    </div>
  );
}

function Frame332() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame333() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame334() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame332 />
      <Frame333 />
    </div>
  );
}

function Frame335() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame336() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame337() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame338() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame335 />
          <Frame336 />
          <Frame337 />
        </div>
      </div>
    </div>
  );
}

function Frame339() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame338 />
    </div>
  );
}

function Frame4889() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4888 />
      <Frame334 />
      <Frame339 />
    </div>
  );
}

function Frame340() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-[577px] rounded-[10px] top-[179px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4889 />
    </div>
  );
}

function Frame4890() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4891() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4890 />
    </div>
  );
}

function Frame341() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame342() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame343() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame341 />
      <Frame342 />
    </div>
  );
}

function Frame344() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame345() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame346() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame347() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame344 />
          <Frame345 />
          <Frame346 />
        </div>
      </div>
    </div>
  );
}

function Frame348() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame347 />
    </div>
  );
}

function Frame4892() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4891 />
      <Frame343 />
      <Frame348 />
    </div>
  );
}

function Frame349() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-[577px] rounded-[10px] top-[465px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4892 />
    </div>
  );
}

function Frame4893() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4894() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4893 />
    </div>
  );
}

function Frame350() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame351() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame352() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame350 />
      <Frame351 />
    </div>
  );
}

function Frame353() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame354() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame355() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame356() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame353 />
          <Frame354 />
          <Frame355 />
        </div>
      </div>
    </div>
  );
}

function Frame357() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame356 />
    </div>
  );
}

function Frame4895() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4894 />
      <Frame352 />
      <Frame357 />
    </div>
  );
}

function Frame358() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-[577px] rounded-[10px] top-[322px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4895 />
    </div>
  );
}

function Frame4896() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4897() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4896 />
    </div>
  );
}

function Frame359() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame360() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame361() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame359 />
      <Frame360 />
    </div>
  );
}

function Frame362() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame363() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame364() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame365() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame362 />
          <Frame363 />
          <Frame364 />
        </div>
      </div>
    </div>
  );
}

function Frame366() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame365 />
    </div>
  );
}

function Frame4898() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4897 />
      <Frame361 />
      <Frame366 />
    </div>
  );
}

function Frame367() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-[577px] rounded-[10px] top-[608px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4898 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="h-[722px] relative shrink-0 w-full">
      <Frame304 />
      <Frame313 />
      <Frame322 />
      <Frame331 />
      <Frame340 />
      <Frame349 />
      <Frame358 />
      <Frame367 />
      <div className="absolute flex flex-col font-['Retrokia:Demo',_sans-serif] justify-center leading-[0] left-px not-italic text-[#0f4c50] text-[64px] text-left text-nowrap top-[87px] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">Combos</p>
      </div>
    </div>
  );
}

function Frame4899() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4900() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4899 />
    </div>
  );
}

function Frame368() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame369() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame370() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame368 />
      <Frame369 />
    </div>
  );
}

function Frame371() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame372() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame373() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame374() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame371 />
          <Frame372 />
          <Frame373 />
        </div>
      </div>
    </div>
  );
}

function Frame375() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame374 />
    </div>
  );
}

function Frame4901() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4900 />
      <Frame370 />
      <Frame375 />
    </div>
  );
}

function Frame376() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-0 rounded-[10px] top-[179px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4901 />
    </div>
  );
}

function Frame4902() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4903() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4902 />
    </div>
  );
}

function Frame377() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame378() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame379() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame377 />
      <Frame378 />
    </div>
  );
}

function Frame380() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame381() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame382() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame383() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame380 />
          <Frame381 />
          <Frame382 />
        </div>
      </div>
    </div>
  );
}

function Frame384() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame383 />
    </div>
  );
}

function Frame4904() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4903 />
      <Frame379 />
      <Frame384 />
    </div>
  );
}

function Frame385() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-0 rounded-[10px] top-[465px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4904 />
    </div>
  );
}

function Frame4905() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4906() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4905 />
    </div>
  );
}

function Frame386() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame387() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame388() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame386 />
      <Frame387 />
    </div>
  );
}

function Frame389() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame390() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame391() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame392() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame389 />
          <Frame390 />
          <Frame391 />
        </div>
      </div>
    </div>
  );
}

function Frame393() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame392 />
    </div>
  );
}

function Frame4907() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4906 />
      <Frame388 />
      <Frame393 />
    </div>
  );
}

function Frame394() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-0 rounded-[10px] top-[322px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4907 />
    </div>
  );
}

function Frame4908() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4909() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4908 />
    </div>
  );
}

function Frame395() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame396() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame397() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame395 />
      <Frame396 />
    </div>
  );
}

function Frame398() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame399() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame400() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame401() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame398 />
          <Frame399 />
          <Frame400 />
        </div>
      </div>
    </div>
  );
}

function Frame402() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame401 />
    </div>
  );
}

function Frame4910() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4909 />
      <Frame397 />
      <Frame402 />
    </div>
  );
}

function Frame403() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-0 rounded-[10px] top-[608px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4910 />
    </div>
  );
}

function Frame4911() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4912() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4911 />
    </div>
  );
}

function Frame404() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame405() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame406() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame404 />
      <Frame405 />
    </div>
  );
}

function Frame407() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame408() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame409() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame410() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame407 />
          <Frame408 />
          <Frame409 />
        </div>
      </div>
    </div>
  );
}

function Frame411() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame410 />
    </div>
  );
}

function Frame4913() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4912 />
      <Frame406 />
      <Frame411 />
    </div>
  );
}

function Frame412() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-[577px] rounded-[10px] top-[179px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4913 />
    </div>
  );
}

function Frame4914() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4915() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4914 />
    </div>
  );
}

function Frame413() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame414() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame415() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame413 />
      <Frame414 />
    </div>
  );
}

function Frame416() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame417() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame418() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame419() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame416 />
          <Frame417 />
          <Frame418 />
        </div>
      </div>
    </div>
  );
}

function Frame420() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame419 />
    </div>
  );
}

function Frame4916() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4915 />
      <Frame415 />
      <Frame420 />
    </div>
  );
}

function Frame421() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-[577px] rounded-[10px] top-[465px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4916 />
    </div>
  );
}

function Frame4917() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4918() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4917 />
    </div>
  );
}

function Frame422() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame423() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame424() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame422 />
      <Frame423 />
    </div>
  );
}

function Frame425() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame426() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame427() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame428() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame425 />
          <Frame426 />
          <Frame427 />
        </div>
      </div>
    </div>
  );
}

function Frame429() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame428 />
    </div>
  );
}

function Frame4919() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4918 />
      <Frame424 />
      <Frame429 />
    </div>
  );
}

function Frame430() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-[577px] rounded-[10px] top-[322px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4919 />
    </div>
  );
}

function Frame4920() {
  return (
    <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[50px] leading-[0] relative shrink-0 text-[#797474] text-[18px] text-left w-[114px]">
      <div className="absolute left-0 top-0 w-[114px]">
        <p className="block leading-[normal]">P - R$8,00</p>
      </div>
      <div className="absolute left-0 top-6 w-[114px]">
        <p className="block leading-[normal]">M - R$12,00</p>
      </div>
    </div>
  );
}

function Frame4921() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4920 />
    </div>
  );
}

function Frame431() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame432() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame433() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame431 />
      <Frame432 />
    </div>
  );
}

function Frame434() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p28411d32} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame435() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame436() {
  return (
    <div className="relative shrink-0 size-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p191d08c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame437() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame434 />
          <Frame435 />
          <Frame436 />
        </div>
      </div>
    </div>
  );
}

function Frame438() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame437 />
    </div>
  );
}

function Frame4922() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4921 />
      <Frame433 />
      <Frame438 />
    </div>
  );
}

function Frame439() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-[577px] rounded-[10px] top-[608px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4922 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="h-[722px] relative shrink-0 w-full">
      <Frame376 />
      <Frame385 />
      <Frame394 />
      <Frame403 />
      <Frame412 />
      <Frame421 />
      <Frame430 />
      <Frame439 />
      <div className="absolute flex flex-col font-['Retrokia:Demo',_sans-serif] justify-center leading-[0] left-px not-italic text-[#0f4c50] text-[64px] text-left text-nowrap top-[87px] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">Bebidas</p>
      </div>
    </div>
  );
}

function Frame4789() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start justify-start left-[299px] p-0 top-[1107px] w-[1129px]">
      <Frame13 />
      <Frame14 />
      <Frame15 />
      <Frame16 />
      <Frame18 />
      <Frame17 />
    </div>
  );
}

export default function MacBookPro161() {
  return (
    <div className="bg-[#f0eee9] relative size-full" data-name="MacBook Pro 16' - 1">
      <Background1 />
      <Navbar />
      <Camada2 />
      <Frame4789 />
    </div>
  );
}