"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Navigation: React.FC = () => {
  const router = useRouter();

  return (
    <div
      className="m-auto my-2 flex w-72 rounded-[2.625rem]"
      style={{
        boxShadow: "inset 0px 4px 8.1px 0px #200C3EAB",
        background: "linear-gradient(to top, #381968, #7031CE)",
      }}
    >
      <div className="m-auto flex flex-row justify-between gap-1">
        <div
          className="group relative flex flex-col items-center justify-center"
          onClick={() => router.push("/profile")}
        >
          <img
            className="h-[4rem] w-[4rem] drop-shadow-[0_0_12px_#00000099] group-hover:hidden"
            src="icons/Icon2_bw.png"
            alt="Icon 2"
          />
          <img
            className="hidden h-[4rem] w-[4rem] drop-shadow-[0_0_12px_#974DD8] group-hover:block"
            src="icons/Icon2_color.png"
            alt="Icon 2 Hover"
          />
        </div>

        <div
          className="group relative flex flex-col items-center justify-center"
          onClick={() => router.push("/leaderboard")}
        >
          <img
            className="h-[4rem] w-[4rem] drop-shadow-[0_0_12px_#00000099] group-hover:hidden"
            src="icons/Icon3_bw.png"
            alt="Icon 3"
          />
          <img
            className="hidden h-[4rem] w-[4rem] drop-shadow-[0_0_12px_#974DD8] group-hover:block"
            src="icons/Icon3_color.png"
            alt="Icon 3 Hover"
          />
        </div>

        <div
          className="group relative flex flex-col items-center justify-center"
          onClick={() => router.push("/")}
        >
          <img
            className="h-[4rem] w-[4rem] drop-shadow-[0_0_12px_#00000099] group-hover:hidden"
            src="icons/Icon1_bw.png"
            alt="Icon 1"
          />
          <img
            className="hidden h-[4rem] w-[4rem] drop-shadow-[0_0_12px_#974DD8] group-hover:block"
            src="icons/Icon1_color.png"
            alt="Icon 1 Hover"
          />
        </div>

        <div
          className="group relative flex flex-col items-center justify-center"
          onClick={() => router.push("/boosts")}
        >
          <img
            className="h-[4rem] w-[4rem] drop-shadow-[0_0_12px_#00000099] group-hover:hidden"
            src="icons/Icon4_bw.png"
            alt="Icon 4"
          />
          <img
            className="hidden h-[4rem] w-[4rem] drop-shadow-[0_0_12px_#974DD8] group-hover:block"
            src="icons/Icon4_color.png"
            alt="Icon 4 Hover"
          />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
