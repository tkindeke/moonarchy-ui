"use client";

import React from "react";

interface TapsOverviewData {
  currentTaps: string;
  dailyLimit: string;
  boosters: number[];
}

const TapsOverviewComponent: React.FC<TapsOverviewData> = ({
  currentTaps,
  dailyLimit,
  boosters,
}) => {
  return (
    <div className="mx-auto mb-1 max-w-md">
      {/* Boosters Section */}
      <div>
        <div className="my-2 flex justify-center space-x-2">
          {boosters.map((booster, index) => (
            <div
              key={index}
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#974DD833] bg-[#974DD821]"
            >
              {booster}
            </div>
          ))}
        </div>
        {boosters.length < 4 && (
          <div className="mt-2 text-gray-500">You can earn more boosters!</div>
        )}
      </div>

      {/* Limit Status */}
      <div className="m-auto flex w-72 flex-row justify-between">
        <div className="flex flex-col">
          <span className="text-lg font-bold text-white">{currentTaps}</span>
          <span className="text-left text-xs text-[#D29EFF]">
            Current game taps
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-bold text-white">{dailyLimit}</span>
          <span className="text-right text-xs text-[#D29EFF]">
            Daily taps limit
          </span>
        </div>
      </div>
    </div>
  );
};

export default TapsOverviewComponent;
