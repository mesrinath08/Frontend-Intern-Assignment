import React from "react";

export default function Option({
  label,
  onClick,
  isSelected
}: {
  label: string;
  onClick: () => void;
  isSelected?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-sm text-center py-3 rounded-lg border transition-shadow focus:outline-none focus:ring-2 focus:ring-[#bfeff6] 
      ${isSelected ? 'bg-gradient-to-r from-[#dff6fa] to-[#c7eef6] border-[#9ee6f2]' : 'bg-white border-[#e8f6fa] hover:shadow-md'}`}
      aria-pressed={isSelected}
    >
      {label}
    </button>
  );
}
