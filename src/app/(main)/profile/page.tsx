"use client";

import React from "react";

interface ProfileProps {
  userName?: string;
  factionName?: string;
  gems?: string;
  leaderboardPosition?: string;
  walletAddress?: string;
  onChangeFaction: () => void;
}

const Profile = () => {
  var userName = "Galapagos";
  var factionName = "Azurian";
  var gems = "34,862";
  var leaderboardPosition = "14,794";
  var walletAddress = "0x71...976F";
  walletAddress = `${walletAddress.slice(0, 4)}...${walletAddress.slice(-4)}`;
  return (
    <section className="justify-cente flex flex-col items-center text-white">
      <h1 className="pt-4 text-xl font-bold">PROFILE</h1>

      <div className="my-4 flex flex-col items-center justify-center">
        <img
          src="icons/Icon1_bw.png"
          className="h-[5.75rem] w-[5.875rem] drop-shadow-[0_0_28px_#1E5EF0]"
        ></img>
        <p className="text-xl font-bold text-white">{userName}</p>
        <p className="text-sm font-bold text-lavenderMist">{factionName}</p>
      </div>
      <div className="max-x-sx flex w-[20.75rem] flex-row justify-between">
        <div className="mt-4 h-[4.5rem] w-[9.75rem] rounded-[1.5625rem] border-2 border-amethyst bg-[#381968] p-2 text-center shadow-[inset_0_8px_6px_0_rgba(0,0,0,0.25)]">
          <span className="text-xl font-bold text-white">{gems}</span>
          <p className="text-base font-normal text-amethyst">Gems</p>
        </div>
        <div className="mt-4 h-[4.5rem] w-[9.75rem] rounded-[1.5625rem] border-2 border-amethyst bg-[#381968] p-2 text-center shadow-[inset_0_8px_6px_0_rgba(0,0,0,0.25)]">
          <span className="text-xl font-bold text-white">
            {leaderboardPosition}
          </span>
          <p className="text-base font-normal text-amethyst">LeaderBoard</p>
        </div>
      </div>
      <div className="mt-4 flex h-[3.125rem] w-[20.75rem] flex-row items-center justify-between rounded-[1.5625rem] border-2 border-amethyst bg-[#381968] px-4 text-sm font-bold text-white shadow-[inset_0_8px_6px_0_rgba(0,0,0,0.25)]">
        <span>{walletAddress}</span>
      </div>
      <div className="fle-row mt-4 flex h-[3.125rem] w-[20.75rem] items-center justify-between rounded-[1.5625rem] border-2 border-amethyst bg-[#381968] px-4 text-sm font-bold text-white shadow-[inset_0_8px_6px_0_rgba(0,0,0,0.25)]">
        <span>Change your faction</span>
        <img src="icons/Vector4.png"></img>
      </div>
    </section>
  );
};

export default Profile;
