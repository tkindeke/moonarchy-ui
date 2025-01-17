"use client";

import PlayerStatistics from "@/components/PlayerStatistics";
import { boosts } from "@/data/boosts";
import { leaderBoards } from "@/data/leaderBoard";

const Boosts = () => {
  return (
    <section className="flex flex-col items-center text-white">
      <PlayerStatistics gems="34,862" leaderBoard="14,794"></PlayerStatistics>
      <h1 className="pt-4 text-xl font-bold">BOOSTS</h1>
      <div
        className="mt-3 flex max-w-xs flex-col gap-2 rounded-[1.875rem] border-2 border-[#974DD8] p-2 text-white"
        style={{
          background: "linear-gradient(to top, #200C3E, #5520A4)",
        }}
      >
        {boosts.map((boost) => (
          <div
            key={boost.id}
            className="flex w-[17.125rem] flex-row gap-1 rounded-[1.5625rem] border-2 border-[#974DD8] bg-[#381968] p-1 drop-shadow-[0_8px_6px_#000000]"
            style={{
              boxShadow: "inset 0 8px 6px #00000040",
            }}
          >
            <img src={boost.icon} className="h-[4.375rem] w-[4.375rem]"></img>
            <div className="flex w-full flex-col">
              <div className="mr-4 flex flex-row justify-between">
                <span className="w-12 text-xs font-bold">{boost.name}</span>

                <span className="mt-1 w-[3.125rem] text-[0.625rem] font-bold text-[#974DD8]">
                  {boost.gems} GEMS
                </span>
              </div>
              <span className="text-[0.6875rem] font-bold text-[#D29EFF]">
                {boost.label}
              </span>
              <div className="flex flex-row justify-between">
                <p className="w-[7.5625rem] text-[0.625rem] font-normal text-[#974DD8]">
                  {boost.description}
                </p>
                <div className="mr-3 mt-3 flex h-[1.875rem] w-[1.875rem] items-center justify-center rounded-full border-2 border-[#974DD8] bg-[#E61791]">
                  <img src="/icons/plus.png"></img>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Boosts;
