import svgPaths from "../../imports/svg-6hqazlixmp";

interface PaginationArrowProps {
  direction: "left" | "right";
  disabled?: boolean;
  svgPaths?: any;
}

export function PaginationArrow({
  direction,
  disabled = false,
  svgPaths: customSvgPaths,
}: PaginationArrowProps) {
  const isLeft = direction === "left";
  const pathKey = isLeft ? "p1ca2d600" : "p4172e00";
  const paths = customSvgPaths || svgPaths;

  return (
    <div
      className={`h-4 relative ${isLeft ? "w-2" : "size-4"} ${disabled ? "opacity-50" : "cursor-pointer hover:opacity-80"}`}
    >
      <div
        className={`absolute bottom-0 left-0 ${isLeft ? "right-[-6.25%]" : "right-[-3.13%]"} top-0`}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox={isLeft ? "0 0 9 16" : "0 0 17 16"}
        >
          <g>
            <path
              d={paths[pathKey]}
              fill="var(--fill-0, #A9A9A9)"
              fillOpacity="0.73"
            />
            {!isLeft && (
              <path
                d={paths.p18f8fd40}
                fill="var(--fill-0, #A9A9A9)"
                fillOpacity="0.73"
              />
            )}
          </g>
        </svg>
      </div>
    </div>
  );
}