import { useState } from "react";
import { PaginationArrow } from "./PaginationArrow";

interface PaginationProps {
  svgPaths?: any;
}

export function Pagination({ svgPaths }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 7;

  return (
    <div className="content-stretch flex gap-[25px] items-center justify-center relative shrink-0 w-[912px]">
      <div className="content-stretch flex gap-[15px] items-center justify-start relative shrink-0">
        <PaginationArrow
          direction="left"
          disabled={currentPage === 1}
          svgPaths={svgPaths}
        />
        <PaginationArrow
          direction="left"
          disabled={currentPage === 1}
          svgPaths={svgPaths}
        />
      </div>

      <div
        className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
        data-name="1"
      >
        <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-7">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 28 28"
          >
            <circle
              cx="14"
              cy="14"
              fill="var(--fill-0, #0F4C50)"
              r="14"
            />
          </svg>
        </div>
        <div className="[grid-area:1_/_1] box-border content-stretch flex font-['Lato:SemiBold',_sans-serif] gap-6 items-start justify-start ml-[7px] mt-[7px] not-italic relative text-[12px] text-center">
          {[1, 2, 3, 4, 5, 6, 7].map((page) => (
            <div
              key={page}
              className={`flex flex-col h-[13px] justify-end relative shrink-0 w-3.5 cursor-pointer ${
                page === currentPage
                  ? "text-[#fbfbfb]"
                  : "text-[#0f4c50] hover:text-[#0a3c3f]"
              }`}
              onClick={() => setCurrentPage(page)}
            >
              <p className="leading-[normal]">{page}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="content-stretch flex gap-[15px] h-4 items-center justify-start relative shrink-0 w-[39px]">
        <div className="flex items-center justify-center relative shrink-0">
          <div className="flex-none rotate-[180deg] scale-y-[-100%]">
            <PaginationArrow
              direction="left"
              disabled={currentPage === totalPages}
              svgPaths={svgPaths}
            />
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0">
          <div className="flex-none rotate-[180deg] scale-y-[-100%]">
            <PaginationArrow
              direction="right"
              disabled={currentPage === totalPages}
              svgPaths={svgPaths}
            />
          </div>
        </div>
      </div>
    </div>
  );
}