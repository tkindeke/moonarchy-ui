"use client";

import { useEffect, useState } from "react";
import {
  useRouter,
  // usePathname,
  // useSearchParams,
  ReadonlyURLSearchParams,
} from "next/navigation";
import PlayerStatistics from "@/components/PlayerStatistics";
import TapsTracker from "@/components/TapsTracker";
import GemChest from "@/components/GemChest";
import TapsOverviewComponent from "@/components/TapsOverview";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    // Check if a faction is already selected (stored in localStorage)
    const selectedFaction = localStorage.getItem("selectedFaction");

    if (!selectedFaction) {
      // If no faction is selected, redirect to the faction selection page
      router.replace("/factions");
    }
  }, [router]);

  const [factionColor, setFactionColor] = useState<
    string | ReadonlyURLSearchParams
  >();

  // useEffect(() => {
  //   console.log("Faction color from query:", selectedFaction);
  // }, [searchParams]);

  const [coinsEarned] = useState(125); // Example current value
  const maxCoins = 200; // Example maximum value

  const gameData = {
    currentTabs: 3,
    dailyLimit: 5,
    boosters: [1, 2, 3, 4], // up to 4 boosters
  };

  return (
    <section className="flex flex-col items-center">
      <PlayerStatistics gems="34,862" leaderBoard="14,794"></PlayerStatistics>

      <TapsTracker value={coinsEarned} max={maxCoins} label="3,456,347" />

      <GemChest initialGems={10000}></GemChest>

      <TapsOverviewComponent
        currentTaps="2345"
        dailyLimit="416/2500"
        boosters={gameData.boosters}
      ></TapsOverviewComponent>
    </section>
  );
};

export default Home;
