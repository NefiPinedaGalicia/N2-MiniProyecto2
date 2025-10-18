import React from "react";

export default function WindSpeed({ speed, deg }) {
  const getWindDirection = (deg) => {
    const directions = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    const index = Math.round(deg / 22.5) % 16;
    return directions[index];
  };

  return (
    <div className="bg-[#1e213a] p-4 text-white text-center flex flex-col items-center justify-center gap-2 min-h-[130px] md:h-40">
      <h3 className="text-base font-medium text-gray-300">Wind Status</h3>
      <p className="text-4xl font-bold">
        {speed}
        <span className="text-xl font-medium">m/s</span>
      </p>
      <div className="flex flex-row items-center gap-2">
        <img src="/navigation.svg" alt="navigation arrow" style={{ transform: `rotate(${deg}deg)` }} className="w-6 h-6" />
        <span className="text-xl font-ls text-white">{getWindDirection(deg)}</span>
      </div>
    </div>
  );
}
