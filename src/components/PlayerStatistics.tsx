"use client";

import React from "react";

interface PlayerStatisticsProps {
  gems: string;
  leaderBoard: string;
}

const PlayerStatistics: React.FC<PlayerStatisticsProps> = ({
  gems,
  leaderBoard,
}) => {
  return (
    <section className="m-auto mt-4 flex h-[2.5rem] w-[17rem] flex-row items-center justify-between">
      <div>
        <p className="items-center justify-center text-center text-xl font-bold text-white">
          {gems}
        </p>
        <p className="items-center justify-center text-center text-[0.6875rem] font-normal text-lavenderMist">
          Gems
        </p>
      </div>
      <div>
        <img className="h-10 w-10" src="/icons/Logo_Pink_Rage 2.png"></img>
      </div>
      <div>
        <p className="items-center justify-center text-center text-xl font-bold text-white">
          {leaderBoard}
        </p>
        <p className="items-center justify-center text-center text-[0.6875rem] font-normal text-lavenderMist">
          Leaderboard
        </p>
      </div>
    </section>
  );
};

export default PlayerStatistics;
