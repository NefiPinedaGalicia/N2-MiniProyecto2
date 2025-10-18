import React from "react";

export default function Aside({
  handleSearch,
  location,
  handleGetLocation,
  unit,
  weatherData,
}) {
  const getTemperature = (kelvin) => {
    if (unit === "C") {
      return Math.round(kelvin - 273.15);
    } else {
      return Math.round(((kelvin - 273.15) * 9) / 5 + 32);
    }
  };

  const getFormattedDate = () => {
    const today = new Date();
    const dayOfWeek = today.toLocaleDateString("en-US", { weekday: "short" });
    const day = today.getDate();
    const month = today.toLocaleDateString("en-US", { month: "short" });
    return `Today - ${dayOfWeek}, ${day} ${month}`;
  };

  const capitalizeDescription = (description) => {
    if (!description) return "--";
    return description
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const weatherIcon = weatherData
    ? `/weather/${weatherData.weather[0].icon}.png`
    : "/vite.svg";

  return (
    <div className="w-full h-full flex flex-col gap-5">
      <div className="h-1/10 flex flex-row justify-between items-center px-10">
        <button
          className="bg-[#6e717a] w-35 h-10 rounded-xl text-white"
          onClick={handleSearch}
        >
          Search for places
        </button>
        <button
          className="bg-[#6e717a] w-8 h-8 rounded-full text-white flex items-center justify-center"
          onClick={handleGetLocation}
        >
          <img src="/location.svg" alt="Get Location" />
        </button>
      </div>
      <div className="h-4/10 relative flex justify-center items-center w-full">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center opacity-20"
          style={{ backgroundImage: "url('/Cloud-background.png')" }}
        ></div>
        <img src={weatherIcon} alt="Weather Icon" className="w-40 h-40 z-10" />
      </div>
      <div className="h-5/10 flex flex-col justify-center items-center gap-4">
        <span className="text-8xl text-white font-bold">
          {weatherData ? getTemperature(weatherData.main.temp) : "--"}{" "}
          <span className="text-6xl text-bold text-white">°{unit}</span>{" "}
        </span>
        <span className="text-xl text-white">
          {capitalizeDescription(weatherData?.weather[0].description)}
        </span>
        <span className="text-sm text-gray-400">{getFormattedDate()}</span>
        <span className="text-xs text-gray-400 flex items-center gap-1">
          <img src="/location_on.svg" alt="Location" className="w-4 h-4" />
          {location}
        </span>
      </div>
    </div>
  );
}
