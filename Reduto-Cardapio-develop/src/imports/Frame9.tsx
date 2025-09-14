import svgPaths from "./svg-27zwrw9n3n";

function Frame() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_18_40)" id="Frame">
          <path d={svgPaths.p25ae9580} fill="var(--fill-0, #0F4C50)" id="Vector" stroke="var(--stroke-0, #0F4C50)" />
        </g>
        <defs>
          <clipPath id="clip0_18_40">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-[22px]" data-name="Frame">
      <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[0px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Frame">
          <path d={svgPaths.p278a8d00} fill="var(--fill-0, #0F4C50)" id="Vector" stroke="var(--stroke-0, #0F4C50)" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame9() {
  return (
    <div className="bg-[#ffffff] relative rounded-[10px] size-full">
      <div
        aria-hidden="true"
        className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[10px]"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[5px] py-0 relative size-full">
          <Frame />
          <Frame1 />
          <Frame2 />
        </div>
      </div>
    </div>
  );
}