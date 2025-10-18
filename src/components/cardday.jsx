import React from "react";

export default function CardDay({ dayData, unit, index }) {
  const getFormattedDate = (dt_txt) => {
    if (index === 0) return "Tomorrow";
    const date = new Date(dt_txt);
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' });
    const day = date.getDate();
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    return `${dayOfWeek}, ${day} ${month}`;
  };

  const getTemperature = (kelvin) => {
    if (unit === "C") {
      return Math.round(kelvin - 273.15);
    } else {
      return Math.round((kelvin - 273.15) * 9/5 + 32);
    }
  };

  const weatherIcon = dayData ? `/weather/${dayData.weather[0].icon}.png` : "/vite.svg";

  return (
    <div className="bg-[#1e213a] w-25 h-30 flex flex-col items-center p-2 gap-2 md:w-30 md:h-40 md:gap-4 md:justify-center">
      <h4 className="text-bold text-white">{getFormattedDate(dayData?.dt_txt)}</h4>
      <div className="w-10 h-10">
        <img src={weatherIcon} alt="Weather Icon" />
      </div>
      <h5 className="text-white flex justify-between items-center gap-2 md:gap-4">
        <span className="text-bold text-sm">{getTemperature(dayData?.main.temp_max)}°{unit}</span>
        <span className="text-sm text-gray-400">{getTemperature(dayData?.main.temp_min)}°{unit}</span>
      </h5>
    </div>
  );
}
