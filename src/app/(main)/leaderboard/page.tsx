"use client";

import PlayerStatistics from "@/components/PlayerStatistics";
import { leaderBoards } from "@/data/leaderBoard";

const LeaderBoard = () => {
  return (
    <section className="flex flex-col items-center text-white">
      <PlayerStatistics gems="34,862" leaderBoard="14,794"></PlayerStatistics>
      <h1 className="pt-4 text-xl font-bold">LEADERBOARD</h1>
      <div
        className="mt-3 flex max-w-xs flex-col gap-4 rounded-[1.875rem] border-2 border-[#974DD8] p-5 text-white"
        style={{
          background: "linear-gradient(to top, #200C3E, #5520A4)",
        }}
      >
        {leaderBoards.map((leaderBoard) => (
          <div
            key={leaderBoard.id}
            className="flex h-[3.125rem] w-[17.125rem] flex-row rounded-[1.5625rem] border-2 border-[#974DD8] bg-[#381968] px-5 drop-shadow-[0_8px_6px_#000000]"
            style={{
              boxShadow: "inset 0 8px 6px #00000040",
            }}
          >
            <img
              className="top-[-0.0625rem] h-[1.34375rem]"
              src={leaderBoard.faction}
            ></img>
            <div className="my-auto flex flex-col pl-2">
              <span className="text-sm font-bold">{leaderBoard.address}</span>
              <span className="text-xs font-bold text-[#D29EFF]">
                {leaderBoard.gems} Gem
              </span>
            </div>
            <span className="my-auto ml-auto text-sm font-bold">
              {leaderBoard.rank}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeaderBoard;
