import { useState } from "react";

interface ActionButtonProps {
  children?: React.ReactNode;
  variant?: "outline" | "filled";
  onClick?: () => void;
  isToggle?: boolean;
  initialText?: string;
  toggledText?: string;
}

export function ActionButton({
  children,
  variant = "outline",
  onClick,
  isToggle = false,
  initialText = "Aberto",
  toggledText = "Fechado",
}: ActionButtonProps) {
  const [isToggled, setIsToggled] = useState(false);
  const isOutline = variant === "outline";

  const handleClick = () => {
    if (isToggle) {
      setIsToggled(prev => !prev);
    }
    onClick?.();
  };

  const displayText = isToggle 
    ? (isToggled ? toggledText : initialText)
    : children;

  return (
    <div
      className={`content-stretch flex gap-[52px] h-[23px] items-center justify-center relative rounded-[43px] shrink-0 w-[125px] cursor-pointer transition-colors ${
        isToggle && isToggled
          ? "bg-[#C1A07B] hover:bg-[#b8956e]"
          : isOutline
          ? "hover:bg-[#0f4c50] hover:text-white"
          : "bg-[#0f4c50] hover:bg-[#0d4247]"
      }`}
      onClick={handleClick}
    >
      {isOutline && (
        <div
          aria-hidden="true"
          className="absolute border border-[#0f4c50] border-solid inset-0 pointer-events-none rounded-[43px]"
        />
      )}
      <div className="content-stretch flex gap-[9px] h-0 items-center justify-center relative shrink-0">
        <div
          className={`font-['Rethink_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-center text-nowrap ${
            isToggle && isToggled
              ? "text-[#ffffff]"
              : isOutline 
              ? "text-[#0f4c50]" 
              : "text-[#ffffff]"
          }`}
        >
          <p className="leading-[0px] whitespace-pre">
            {displayText}
          </p>
        </div>
      </div>
    </div>
  );
}