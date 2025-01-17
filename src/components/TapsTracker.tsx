import React from "react";

interface TapsTrackerProps {
  value: number; // Current value
  max: number; // Maximum value
  label: string; // Label for the gauge
}

const TapsTracker: React.FC<TapsTrackerProps> = ({ value, max, label }) => {
  const percentage = Math.min((value / max) * 100, 100); // Clamp percentage to 100%

  return (
    <div className="relative w-full pl-2 pr-2 pt-2">
      {/* Label */}
      <label className="block text-center text-base font-bold text-white">
        {label}
      </label>
      <div className="m-auto flex w-[20.875rem] flex-row items-center justify-between">
        <div>
          <img
            src="/icons/Back_1.png"
            className="w-11 rounded-full border-2 border-[#1E5EF0] drop-shadow-[0_0_18px_#1E5EF0]"
          ></img>
        </div>
        {/* Gauge Container */}
        <div className="relative h-2 w-52 rounded-full bg-gray-200">
          {/* Progress Bar */}
          <div
            className={`absolute h-full w-full rounded-full bg-gradient-to-r from-[rgba(30,94,240,0.8)] to-[rgba(255,58,58,0.8)] ${
              percentage === 100
                ? "bg-green-500"
                : percentage >= 50
                  ? "bg-[#1E5EF0]"
                  : "bg-[#FF3A3A]"
            }`}
          ></div>

          {/* Pointer */}
          <div
            style={{
              left: `${percentage}%`,
              //  transform: "translatex(-50%)",
            }}
            className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-[#E61791] bg-neonPink drop-shadow-[0_0_10.2px_#E61791E0]"
          ></div>
        </div>
        <div>
          <img
            src="/icons/Back_2.png"
            className="w-11 rounded-full border-2 border-[#FF3A3A] drop-shadow-[0_0_18px_#FF3A3A]"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default TapsTracker;
