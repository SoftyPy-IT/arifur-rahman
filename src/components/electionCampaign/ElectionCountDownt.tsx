"use client"
import React from 'react';
import Countdown from 'react-countdown';

type TElectionCount ={
  days:number, hours:number, minutes:number, seconds :number
}

const ElectionCountdown = ({ electionDate }:{electionDate:string}) => {
  const renderer = ({ days, hours, minutes, seconds }:TElectionCount) => {
    return (
      <div className="grid grid-cols-4 md:gap-10 gap-5 px-1 md:px-5">
        <div className="text-center p-3 bg-blue-700 bg-opacity-40">
          <h3 className="text-xl md:text-4xl lg:text-7xl text-white">{days}</h3>
          <p className="text-gray-100">Days</p>
        </div>
        <div className="text-center p-3 bg-blue-700 bg-opacity-40">
          <h3 className="text-xl md:text-4xl lg:text-7xl text-white">{hours}</h3>
          <p className="text-gray-100">Hours</p>
        </div>
        <div className="text-center p-3 bg-blue-700 bg-opacity-40">
          <h3 className="text-xl md:text-4xl lg:text-7xl text-white">{minutes}</h3>
          <p className="text-gray-100">Minutes</p>
        </div>
        <div className="text-center p-3 bg-blue-700 bg-opacity-40">
          <h3 className="text-xl md:text-4xl lg:text-7xl text-white">{seconds}</h3>
          <p className="text-gray-100">Seconds</p>
        </div>
      </div>
    );
  };

  return (
    <Countdown date={new Date(electionDate)} renderer={renderer} />
  );
};

export default ElectionCountdown ;
