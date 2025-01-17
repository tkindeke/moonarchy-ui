"use client";

import React, { useState } from "react";

interface GemChestProps {
  initialGems: number; // Optional prop to initialize gem count
}

const GemChest: React.FC<GemChestProps> = ({ initialGems = 0 }) => {
  const [gemsEarned, setGemsEarned] = useState<number>(initialGems);

  // const handleChestTap = () => {
  //   setGemsEarned((prev) => prev + 1); // Increment gems on tap
  // };

  return (
    <div
      className="m-auto flex h-[17.875rem] w-[17.875rem] flex-col items-center justify-center rounded-full"
      style={{
        borderRadius: "50%",
        backgroundImage: "conic-gradient(#E61791 15%, #974DD8 85%)",
      }}
    >
      {/* Chest Image */}
      <div
        // onClick={handleChestTap}
        className="relative m-1 flex h-[16.875rem] w-[16.875rem] cursor-pointer items-center justify-center rounded-full"
        style={{
          // borderWidth: "7px",
          boxShadow: "0 0 180px 0 rgba(30, 94, 240, 1)",
          background: "radial-gradient(circle, #6F32CE, #381968,#200C3E )",
        }}
      >
        <img src="/icons/Chest1_0 1.png" alt="Chest" />
      </div>
    </div>
  );
};

export default GemChest;
