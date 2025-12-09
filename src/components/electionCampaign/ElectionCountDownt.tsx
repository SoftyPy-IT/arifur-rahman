"use client";
import React from "react";
import Countdown from "react-countdown";

type TElectionCount = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const ElectionCountdown = ({ electionDate }: { electionDate: string }) => {
  const renderer = ({ days, hours, minutes, seconds }: TElectionCount) => {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-12 px-1 md:px-5 pb-20 lg:pb-0">
        <div className="flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white/50 relative">
          <div className="flex flex-col items-center justify-center w-24 lg:w-32 h-24 lg:h-32  rounded-full bg-white/30 border border-white/50">
            {/* day */}
            <h3 className="text-xl md:text-4xl lg:text-6xl text-white">
              {days}
            </h3>
            <p className="text-gray-200">Days</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white/50 relative">
          <div className="flex flex-col items-center justify-center w-24 lg:w-32 h-24 lg:h-32 rounded-full bg-white/30 border border-white/50">
            <h3 className="text-xl md:text-4xl lg:text-6xl text-white">
              {hours}
            </h3>
            <p className="text-gray-200">Hours</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-white/50 relative">
          <div className="flex flex-col items-center justify-center w-24 lg:w-32 h-24 lg:h-32 rounded-full bg-white/30 border border-white/50">
            <h3 className="text-xl md:text-4xl lg:text-6xl text-white">
              {minutes}
            </h3>
            <p className="text-gray-200">Minutes</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-white/50 relative">
          <div className="flex flex-col items-center justify-center w-24 lg:w-32 h-24 lg:h-32 rounded-full bg-white/30 border border-white/50">
            <h3 className="text-xl md:text-4xl lg:text-6xl text-white">
              {seconds}
            </h3>
            <p className="text-gray-200">Seconds</p>
          </div>
        </div>
      </div>
    );
  };

  return <Countdown date={new Date(electionDate)} renderer={renderer} />;
};

export default ElectionCountdown;
