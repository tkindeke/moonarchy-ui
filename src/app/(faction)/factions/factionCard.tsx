"use client";

import React from "react";
import { Faction } from "@/types/Faction";

interface FactionCardProps {
  faction: Faction;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

const FactionCard: React.FC<FactionCardProps> = ({
  faction,
  isSelected,
  onSelect,
}) => {
  let imageShadow;

  if (faction.name === "Crimsons") {
    imageShadow = (
      <img
        className={`h-[20.5625rem] w-[10.25rem] transition-shadow duration-300 group-hover:drop-shadow-[0_0_14px_#FF3A3A] ${isSelected ? `drop-shadow-[0_0_32px_#FF3A3A]` : ""}`}
        src={faction.icon}
      ></img>
    );
  } else {
    imageShadow = (
      <img
        className={`h-[20.5625rem] w-[10.25rem] transition-shadow duration-300 group-hover:drop-shadow-[0_0_32px_#1E5EF0] ${isSelected ? `drop-shadow-[0_0_32px_#1E5EF0]` : ""}`}
        src={faction.icon}
      ></img>
    );
  }

  return (
    <button
      onClick={() => onSelect(faction.id)}
      className="group relative flex flex-col items-center justify-center focus:outline-none"
      aria-pressed={isSelected}
      aria-label={`Select ${faction.name}`}
    >
      {imageShadow}

      {/* Highlighted Faction Icon */}
      <img
        src={faction.iconSelect}
        alt={`${faction.name} selected icon`}
        className={`absolute inset-0 h-[20.5625rem] w-[10.25rem] transition-opacity duration-300 ${
          isSelected || `opacity-0 group-hover:opacity-100`
        }`}
      />

      {/* Faction Name */}
      <span
        className={`text-lg font-bold transition-colors duration-300 ${
          isSelected ? "text-white" : "text-lavenderMist group-hover:text-white"
        }`}
      >
        {faction.name}
      </span>
    </button>
  );
};

export default FactionCard;
