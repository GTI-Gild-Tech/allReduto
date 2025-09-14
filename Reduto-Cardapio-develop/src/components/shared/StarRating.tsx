import svgFidelidadePaths from "../../imports/svg-eeu69vacni";

interface StarRatingProps {
  stars: number;
}

export function StarRating({ stars }: StarRatingProps) {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-full">
      {[...Array(10)].map((_, index) => (
        <div key={index} className="relative shrink-0 size-5">
          <div className="absolute inset-[16.77%_18.02%_21.65%_18.02%]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 14 13"
            >
              <path
                d={svgFidelidadePaths.p1c2d5a80}
                fill={
                  index < stars
                    ? "var(--fill-0, #DBB723)"
                    : "var(--fill-0, #D9D9D9)"
                }
              />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}