"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import FactionCard from "./factionCard";
import { factions } from "@/data/factions";

const Factions: React.FC = () => {
  const [selectedFactionId, setSelectedFactionId] = useState<string | null>(
    null,
  );
  const router = useRouter();

  const selectedFaction = factions.find(
    (faction) => faction.id === selectedFactionId,
  );

  const handleFightButtonClick = () => {
    if (!selectedFaction) return;

    if (selectedFaction) {
      localStorage.setItem("selectedFaction", selectedFaction.color);
      router.push("/");
    }
  };

  return (
    <section className="justify-cente flex min-h-screen flex-col items-center text-white">
      <h1 className="pt-4 text-xl font-semibold">CHOOSE YOUR FACTION</h1>

      <div className="flex flex-row space-x-4">
        {factions.map((faction) => (
          <FactionCard
            key={faction.id}
            faction={faction}
            isSelected={faction.id === selectedFactionId}
            onSelect={setSelectedFactionId}
          />
        ))}
      </div>

      <p className="mt-2 px-6 text-center text-amethyst">
        The two moons of Selenor, Azura and Crimara, have split the world into
        two factions, historical rivals with distinct ideals.
        <br />
        Now is the time to choose your path and join the fight with your new
        fam!
      </p>

      <button
        onClick={handleFightButtonClick}
        className="mt-6 h-[3.125rem] w-[11.5rem] rounded-[3.125rem] border-2 border-amethyst border-opacity-[48%] bg-royalViolet font-bold text-white text-opacity-[36%] hover:border-opacity-100 hover:bg-neonPink hover:text-opacity-100"
        disabled={!selectedFactionId}
      >
        LET’S FIGHT!
      </button>
    </section>
  );
};

export default Factions;
