import svgPaths from "./svg-xce247dcet";
import imgBackground from "figma:asset/28fc783ae0566eeb1879aa672ed5c5362de02876.png";

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

function Frame4786() {
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

function Frame4789() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4786 />
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
      <Frame4789 />
    </div>
  );
}

function Frame4790() {
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

function Frame4791() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4790 />
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

function Frame4792() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4791 />
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
      <Frame4792 />
    </div>
  );
}

function Frame4793() {
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

function Frame4794() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4793 />
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

function Frame4795() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4794 />
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
      <Frame4795 />
    </div>
  );
}

function Frame4796() {
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

function Frame4797() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4796 />
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

function Frame4798() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4797 />
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
      <Frame4798 />
    </div>
  );
}

function Frame4799() {
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

function Frame4800() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4799 />
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

function Frame4801() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4800 />
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
      <Frame4801 />
    </div>
  );
}

function Frame4802() {
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

function Frame4803() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4802 />
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

function Frame4804() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4803 />
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
      <Frame4804 />
    </div>
  );
}

function Frame4805() {
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

function Frame4806() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4805 />
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

function Frame4807() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4806 />
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
      <Frame4807 />
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

function Frame4808() {
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

function Frame4809() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4808 />
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

function Frame4810() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4809 />
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
      <Frame4810 />
    </div>
  );
}

function Frame4811() {
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

function Frame4812() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4811 />
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

function Frame4813() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4812 />
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
      <Frame4813 />
    </div>
  );
}

function Frame4814() {
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

function Frame4815() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4814 />
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

function Frame4816() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4815 />
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
      <Frame4816 />
    </div>
  );
}

function Frame4817() {
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

function Frame4818() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4817 />
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

function Frame4819() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4818 />
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
      <Frame4819 />
    </div>
  );
}

function Frame4820() {
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

function Frame4821() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4820 />
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

function Frame4822() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4821 />
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
      <Frame4822 />
    </div>
  );
}

function Frame4823() {
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

function Frame4824() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4823 />
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

function Frame4825() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4824 />
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
      <Frame4825 />
    </div>
  );
}

function Frame4826() {
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

function Frame4827() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4826 />
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

function Frame4828() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4827 />
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
      <Frame4828 />
    </div>
  );
}

function Frame4829() {
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

function Frame4830() {
  return (
    <div className="box-border content-stretch flex flex-col h-[95px] items-start justify-between px-0 py-1 relative shrink-0 w-[114px]">
      <div
        className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Avelã</p>
      </div>
      <Frame4829 />
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

function Frame4831() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-11 h-[95px] items-end justify-start left-[105px] px-5 py-0 translate-y-[-50%] w-[447px]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Frame4830 />
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
      <Frame4831 />
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

function Frame4832() {
  return (
    <div className="absolute h-[1117px] left-0 top-0 w-[1728px]">
      <Frame4783 />
    </div>
  );
}

function Frame148() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-row gap-5 items-center justify-start p-0 relative size-full">
        <div className="css-ow7g9x font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#6b7582] text-[20px] text-left text-nowrap">
          <p className="block leading-[24px] whitespace-pre">Digite aqui...</p>
        </div>
      </div>
    </div>
  );
}

function Depth9Frame1() {
  return (
    <div className="bg-[#fbfbfb] h-[62px] relative rounded-xl shrink-0 w-full" data-name="Depth 9, Frame 1">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row h-[62px] items-center justify-between pl-[30px] pr-2 py-0 relative w-full">
          <Frame148 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#dee0e3] border-solid inset-[-1px] pointer-events-none rounded-[13px]"
      />
    </div>
  );
}

function Frame149() {
  return (
    <div className="bg-[rgba(255,255,255,0.59)] relative rounded-[10px] shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start px-[30px] py-5 relative w-full">
          <div className="css-o1kdnh font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[20px] text-left w-full">
            <p className="block leading-[24px]">Como você gostaria de ser chamado(a)?</p>
          </div>
          <Depth9Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame150() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-row gap-5 items-center justify-start p-0 relative size-full">
        <div className="css-ow7g9x font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#6b7582] text-[20px] text-left text-nowrap">
          <p className="block leading-[24px] whitespace-pre">Digite aqui...</p>
        </div>
      </div>
    </div>
  );
}

function Depth9Frame2() {
  return (
    <div className="bg-[#fbfbfb] h-[62px] relative rounded-xl shrink-0 w-full" data-name="Depth 9, Frame 1">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row h-[62px] items-center justify-between pl-[30px] pr-2 py-0 relative w-full">
          <Frame150 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#dee0e3] border-solid inset-[-1px] pointer-events-none rounded-[13px]"
      />
    </div>
  );
}

function Frame4833() {
  return (
    <div className="bg-[rgba(255,255,255,0.59)] relative rounded-[10px] shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start px-[30px] py-5 relative w-full">
          <div className="css-o1kdnh font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[20px] text-left w-full">
            <p className="block leading-[24px]">Em qual mesa você está?</p>
          </div>
          <Depth9Frame2 />
        </div>
      </div>
    </div>
  );
}

function Frame4788() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-5 items-start justify-start p-0 top-[127px] translate-x-[-50%] w-[525px]"
      style={{ left: "calc(50% + 0.25px)" }}
    >
      <Frame149 />
      <Frame4833 />
    </div>
  );
}

function Frame4776() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[9px] items-start justify-start p-0 relative shrink-0">
      <div className="font-['Rethink_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#ffffff] text-[24px] text-left text-nowrap tracking-[-0.494px]">
        <p className="adjustLetterSpacing block leading-[26px] whitespace-pre">Finalizar pedido</p>
      </div>
    </div>
  );
}

function Frame151() {
  return (
    <div className="relative shrink-0 size-[35px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="Frame">
          <path d={svgPaths.p3af3f600} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4782() {
  return (
    <div className="absolute bg-[#0f4c50] box-border content-stretch flex flex-row h-[83px] items-center justify-between left-0 px-[25px] py-[13px] rounded-[43px] top-[880px] w-[539px]">
      <Frame4776 />
      <Frame151 />
    </div>
  );
}

function Group4856() {
  return (
    <div className="absolute contents left-0 top-[880px]">
      <Frame4782 />
    </div>
  );
}

function Group4857() {
  return (
    <div className="absolute contents left-0 top-[880px]">
      <Group4856 />
    </div>
  );
}

function Group4852() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] font-['Rethink_Sans:ExtraBold',_sans-serif] font-extrabold ml-0 mt-0 relative text-[#0f4c50] text-[42px] text-left tracking-[0.396px] w-[343px]">
        <p className="adjustLetterSpacing block leading-[41px]">Meus dados</p>
      </div>
    </div>
  );
}

function LargeTitle() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start pb-2 pt-[3px] px-4 relative shrink-0"
      data-name="Large Title"
    >
      <Group4852 />
    </div>
  );
}

function Frame4784() {
  return (
    <div className="absolute box-border content-stretch flex flex-row gap-[136px] items-center justify-center left-[3px] p-0 top-[55px]">
      <LargeTitle />
    </div>
  );
}

function Group4853() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] font-['Rethink_Sans:Regular',_sans-serif] font-normal ml-0 mt-0 relative text-[#000000] text-[0px] text-left tracking-[0.396px] w-[343px]">
        <p className="leading-[41px] text-[32px]">
          <span className="font-['Rethink_Sans:Bold',_sans-serif] font-bold">Total</span>
          <span className="adjustLetterSpacing">: R$12,00</span>
        </p>
      </div>
    </div>
  );
}

function LargeTitle1() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-2.5 items-start justify-start left-[3px] pb-2 pt-[3px] px-4 top-[814px]"
      data-name="Large Title"
    >
      <Group4853 />
    </div>
  );
}

function Frame152() {
  return (
    <div className="absolute left-[3px] size-[35px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="Frame">
          <path d={svgPaths.p1db27df0} fill="var(--fill-0, #0F4C50)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4834() {
  return (
    <div className="absolute h-[963px] left-4 top-[34px] w-[552.5px]">
      <Frame4788 />
      <Group4857 />
      <Frame4784 />
      <LargeTitle1 />
      <Frame152 />
    </div>
  );
}

function IPhone163() {
  return (
    <div
      className="absolute bg-[#f0eee9] h-[1117px] left-[1143px] overflow-clip top-0 w-[585px]"
      data-name="iPhone 16 - 3"
    >
      <Frame4834 />
    </div>
  );
}

export default function Frame4787() {
  return (
    <div className="relative size-full">
      <MacBookPro162 />
      <Frame4832 />
      <IPhone163 />
    </div>
  );
}