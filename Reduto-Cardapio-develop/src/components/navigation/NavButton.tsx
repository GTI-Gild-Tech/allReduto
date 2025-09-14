// src/components/navigation/NavButton.tsx
import React from "react";
import clsx from "clsx";

interface NavButtonProps {
  active?: boolean;
  children: React.ReactNode;
}

export default function NavButton({ active, children }: NavButtonProps) {
  return (
    <div
      className={clsx(
        "px-4 py-2 rounded-full text-sm font-medium transition-colors",
        active
          ? "bg-[#c1a07b] text-white shadow"
          : "bg-transparent text-[#0f4c50] hover:bg-gray-100"
      )}
    >
      {children}
    </div>
  );
}
