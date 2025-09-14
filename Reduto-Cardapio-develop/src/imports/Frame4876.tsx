import svgPaths from "./svg-yafp8q3jr7";
import imgBackground from "figma:asset/28fc783ae0566eeb1879aa672ed5c5362de02876.png";
import imgDrink11 from "figma:asset/6feb31b16ef07d8aad72ffc0a24969c050e5a069.png";

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
      className="absolute bg-[#c1a07b] box-border content-stretch flex flex-row gap-5 items-start justify-start left-1/2 px-[200px] py-10 rounded-bl-[50px] rounded-br-[50px] top-[-550px] translate-x-[-50%]"
      data-name="Navbar"
    >
      <Frame />
      <Frame1 />
    </div>
  );
}

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

function Camada2() {
  return (
    <div className="absolute h-[455px] left-[506px] top-[341px] w-[663px]" data-name="Camada_2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 663 455">
        <g clipPath="url(#clip0_3_694)" id="Camada_2">
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
          <clipPath id="clip0_3_694">
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

function Frame15() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame12 />
      <Frame15 />
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

function Frame17() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame18() {
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

function Frame19() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame6 />
          <Frame17 />
          <Frame18 />
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame19 />
    </div>
  );
}

function Frame4784() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4782 />
      <Frame16 />
      <Frame34 />
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
      <Frame4784 />
    </div>
  );
}

function Frame4786() {
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

function Frame4787() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4786 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame35 />
      <Frame36 />
    </div>
  );
}

function Frame38() {
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

function Frame39() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame40() {
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

function Frame41() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame38 />
          <Frame39 />
          <Frame40 />
        </div>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame41 />
    </div>
  );
}

function Frame4788() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4787 />
      <Frame37 />
      <Frame42 />
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
      <Frame4788 />
    </div>
  );
}

function Frame4789() {
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

function Frame4790() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4789 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame43 />
      <Frame44 />
    </div>
  );
}

function Frame46() {
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

function Frame47() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame48() {
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

function Frame49() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame46 />
          <Frame47 />
          <Frame48 />
        </div>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame49 />
    </div>
  );
}

function Frame4791() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4790 />
      <Frame45 />
      <Frame50 />
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
      <Frame4791 />
    </div>
  );
}

function Frame4792() {
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

function Frame4793() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4792 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame51 />
      <Frame52 />
    </div>
  );
}

function Frame54() {
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

function Frame55() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame56() {
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

function Frame57() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame54 />
          <Frame55 />
          <Frame56 />
        </div>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame57 />
    </div>
  );
}

function Frame4794() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4793 />
      <Frame53 />
      <Frame58 />
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
      <Frame4794 />
    </div>
  );
}

function Frame4795() {
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

function Frame4796() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4795 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame59 />
      <Frame60 />
    </div>
  );
}

function Frame62() {
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

function Frame63() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame64() {
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

function Frame65() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame62 />
          <Frame63 />
          <Frame64 />
        </div>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame65 />
    </div>
  );
}

function Frame4797() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4796 />
      <Frame61 />
      <Frame66 />
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
      <Frame4797 />
    </div>
  );
}

function Frame4798() {
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

function Frame4799() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4798 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame69() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame67 />
      <Frame68 />
    </div>
  );
}

function Frame70() {
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

function Frame71() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame72() {
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

function Frame73() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame70 />
          <Frame71 />
          <Frame72 />
        </div>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame73 />
    </div>
  );
}

function Frame4800() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4799 />
      <Frame69 />
      <Frame74 />
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
      <Frame4800 />
    </div>
  );
}

function Frame4801() {
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

function Frame4802() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4801 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame77() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame75 />
      <Frame76 />
    </div>
  );
}

function Frame78() {
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

function Frame79() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame80() {
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

function Frame81() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame78 />
          <Frame79 />
          <Frame80 />
        </div>
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame81 />
    </div>
  );
}

function Frame4803() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4802 />
      <Frame77 />
      <Frame82 />
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
      <Frame4803 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute h-[722px] left-[299px] top-[1107px] w-[1129px]">
      <Frame5 />
      <Frame28 />
      <Frame27 />
      <Frame29 />
      <Frame30 />
      <Frame32 />
      <Frame31 />
      <Frame33 />
      <div className="absolute flex flex-col font-['Retrokia:Demo',_sans-serif] justify-center leading-[0] left-px not-italic text-[#0f4c50] text-[64px] text-left text-nowrap top-[87px] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">Cappuccinos</p>
      </div>
    </div>
  );
}

function Frame4804() {
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

function Frame4805() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4804 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame84() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame85() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame83 />
      <Frame84 />
    </div>
  );
}

function Frame86() {
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

function Frame87() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame88() {
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

function Frame89() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame86 />
          <Frame87 />
          <Frame88 />
        </div>
      </div>
    </div>
  );
}

function Frame90() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame89 />
    </div>
  );
}

function Frame4806() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4805 />
      <Frame85 />
      <Frame90 />
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
      <Frame4806 />
    </div>
  );
}

function Frame4807() {
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

function Frame4808() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4807 />
    </div>
  );
}

function Frame91() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame92() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame93() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame91 />
      <Frame92 />
    </div>
  );
}

function Frame94() {
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

function Frame95() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame96() {
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

function Frame97() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame94 />
          <Frame95 />
          <Frame96 />
        </div>
      </div>
    </div>
  );
}

function Frame98() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame97 />
    </div>
  );
}

function Frame4809() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4808 />
      <Frame93 />
      <Frame98 />
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
      <Frame4809 />
    </div>
  );
}

function Frame4810() {
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

function Frame4811() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4810 />
    </div>
  );
}

function Frame99() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame100() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame101() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame99 />
      <Frame100 />
    </div>
  );
}

function Frame102() {
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

function Frame103() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame104() {
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

function Frame105() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame102 />
          <Frame103 />
          <Frame104 />
        </div>
      </div>
    </div>
  );
}

function Frame106() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame105 />
    </div>
  );
}

function Frame4812() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4811 />
      <Frame101 />
      <Frame106 />
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
      <Frame4812 />
    </div>
  );
}

function Frame4813() {
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

function Frame4814() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4813 />
    </div>
  );
}

function Frame107() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame108() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame109() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame107 />
      <Frame108 />
    </div>
  );
}

function Frame110() {
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

function Frame111() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame112() {
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

function Frame113() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame110 />
          <Frame111 />
          <Frame112 />
        </div>
      </div>
    </div>
  );
}

function Frame114() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame113 />
    </div>
  );
}

function Frame4815() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4814 />
      <Frame109 />
      <Frame114 />
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
      <Frame4815 />
    </div>
  );
}

function Frame4816() {
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

function Frame4817() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4816 />
    </div>
  );
}

function Frame115() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame116() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame117() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame115 />
      <Frame116 />
    </div>
  );
}

function Frame118() {
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

function Frame119() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame120() {
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

function Frame121() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame118 />
          <Frame119 />
          <Frame120 />
        </div>
      </div>
    </div>
  );
}

function Frame122() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame121 />
    </div>
  );
}

function Frame4818() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4817 />
      <Frame117 />
      <Frame122 />
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
      <Frame4818 />
    </div>
  );
}

function Frame4819() {
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

function Frame4820() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4819 />
    </div>
  );
}

function Frame123() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame124() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame125() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame123 />
      <Frame124 />
    </div>
  );
}

function Frame126() {
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

function Frame127() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame128() {
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

function Frame129() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame126 />
          <Frame127 />
          <Frame128 />
        </div>
      </div>
    </div>
  );
}

function Frame130() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame129 />
    </div>
  );
}

function Frame4821() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4820 />
      <Frame125 />
      <Frame130 />
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
      <Frame4821 />
    </div>
  );
}

function Frame4822() {
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

function Frame4823() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4822 />
    </div>
  );
}

function Frame131() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame132() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame133() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame131 />
      <Frame132 />
    </div>
  );
}

function Frame134() {
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

function Frame135() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame136() {
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

function Frame137() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame134 />
          <Frame135 />
          <Frame136 />
        </div>
      </div>
    </div>
  );
}

function Frame138() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame137 />
    </div>
  );
}

function Frame4824() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4823 />
      <Frame133 />
      <Frame138 />
    </div>
  );
}

function Frame139() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.59)] h-[114px] left-[577px] rounded-[10px] top-[322px] w-[552px]">
      <div
        className="absolute bg-[#d9d9d9] left-3 rounded-[10px] size-[93px] translate-y-[-50%]"
        style={{ top: "calc(50% - 0.5px)" }}
      />
      <Frame4824 />
    </div>
  );
}

function Frame4825() {
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

function Frame4826() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4825 />
    </div>
  );
}

function Frame140() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">P</p>
      </div>
    </div>
  );
}

function Frame141() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-[3px] relative rounded-sm shrink-0 size-[35px]">
      <div className="flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center w-full">
        <p className="block leading-[0px]">M</p>
      </div>
    </div>
  );
}

function Frame142() {
  return (
    <div className="[flex-flow:wrap] box-border content-end flex gap-2.5 items-end justify-start p-0 relative shrink-0 w-[90px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Tamanho:</p>
      </div>
      <Frame140 />
      <Frame141 />
    </div>
  );
}

function Frame143() {
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

function Frame144() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-4" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame145() {
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

function Frame146() {
  return (
    <div className="bg-[#ffffff] h-[35px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[35px] items-center justify-between px-[5px] py-0 relative w-full">
          <Frame143 />
          <Frame144 />
          <Frame145 />
        </div>
      </div>
    </div>
  );
}

function Frame147() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[115px]">
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Quantidade:</p>
      </div>
      <Frame146 />
    </div>
  );
}

function Frame4827() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4826 />
      <Frame142 />
      <Frame147 />
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
      <Frame4827 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute h-[722px] left-[299px] top-[1829px] w-[1129px]">
      <Frame20 />
      <Frame23 />
      <Frame22 />
      <Frame24 />
      <Frame21 />
      <Frame25 />
      <Frame139 />
      <Frame26 />
      <div className="absolute flex flex-col font-['Retrokia:Demo',_sans-serif] justify-center leading-[0] left-px not-italic text-[#0f4c50] text-[64px] text-left text-nowrap top-[87px] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">Lanches</p>
      </div>
    </div>
  );
}

function Frame4785() {
  return (
    <div className="absolute h-[2551px] left-0 top-[-550px] w-[1728px]">
      <Background1 />
      <Camada2 />
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function MacBookPro162() {
  return (
    <div
      className="absolute bg-[rgba(228,221,205,0.3)] h-[1117px] left-0 overflow-clip top-0 w-[1728px]"
      data-name="MacBook Pro 16' - 2"
    >
      <Navbar />
      <Frame4785 />
    </div>
  );
}

function Frame4783() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-[1117px] left-0 top-0 w-[1728px]" />;
}

function Frame4828() {
  return (
    <div className="absolute h-[1117px] left-0 top-0 w-[1728px]">
      <Frame4783 />
    </div>
  );
}

function Close() {
  return (
    <div className="absolute left-[633px] size-10 top-[29px]" data-name="Close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Close">
          <path d={svgPaths.p26348400} fill="var(--fill-0, #5E6472)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame148() {
  return (
    <div className="relative shrink-0 size-[35px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="Frame">
          <path d={svgPaths.pb1da900} fill="var(--fill-0, #A68915)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4862() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0">
      {[...Array(5).keys()].map((_, i) => (
        <Frame148 key={i} />
      ))}
    </div>
  );
}

function MainButton() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between px-0 py-4 relative rounded-[50px] shrink-0 w-full"
      data-name="Main Button"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#0f4c50] border-solid inset-0 pointer-events-none rounded-[50px]"
      />
      <div
        className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0f4c50] text-[20px] text-center text-nowrap tracking-[0.2px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-none whitespace-pre">Avaliar</p>
      </div>
    </div>
  );
}

function Frame4861() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-[13px] h-[443px] items-center justify-start p-0 translate-x-[-50%] translate-y-[-50%] w-[448px]"
      style={{ top: "calc(50% + 0.5px)", left: "calc(50% + 0.5px)" }}
    >
      <div
        className="bg-center bg-cover bg-no-repeat shrink-0 size-[194px]"
        data-name="drink (1) 1"
        style={{ backgroundImage: `url('${imgDrink11}')` }}
      />
      <div className="flex flex-col font-['Roboto_Slab:Bold',_sans-serif] font-bold justify-end leading-[0] relative shrink-0 text-[#2f1b04] text-[32px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Pedido feito com sucesso!</p>
      </div>
      <div className="font-['Roboto_Slab:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#2f1b04] text-[20px] text-center w-[430px]">
        <p className="block leading-[1.7]">Mostre que gostou do nosso coffice! nos avalie no google.</p>
      </div>
      <Frame4862 />
      <MainButton />
    </div>
  );
}

function Frame4860() {
  return (
    <div className="absolute bg-[#ffffff] h-[586px] left-[502px] rounded-[40px] top-[264px] w-[703px]">
      <Close />
      <Frame4861 />
    </div>
  );
}

export default function Frame4876() {
  return (
    <div className="relative size-full">
      <MacBookPro162 />
      <Frame4828 />
      <Frame4860 />
    </div>
  );
}