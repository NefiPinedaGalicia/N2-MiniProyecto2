import React from "react";

export default function Aside({ handleSearch, location, handleGetLocation, unit, weatherData }) {
  const getTemperature = (kelvin) => {
    if (unit === "C") {
      return Math.round(kelvin - 273.15);
    } else {
      return Math.round((kelvin - 273.15) * 9/5 + 32);
    }
  };

  const getFormattedDate = () => {
    const today = new Date();
    const dayOfWeek = today.toLocaleString('en-US', { weekday: 'long' });
    const day = today.getDate();
    return `Today, ${dayOfWeek} ${day}`;
  };

  const capitalizeDescription = (description) => {
    if (!description) return "--";
    return description.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const weatherIcon = weatherData ? `/weather/${weatherData.weather[0].icon}.png` : "/vite.svg";

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
          className="bg-[#6e717a] w-10 h-10 rounded-full text-white flex items-center justify-center"
          onClick={handleGetLocation}
        >
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Obtener ubicación"
          >
            <title>Obtener ubicación</title>
            <circle
              cx="12"
              cy="12"
              r="8.5"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.9"
            />
            <circle
              cx="12"
              cy="12"
              r="5.2"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.6"
            />
            <circle cx="12" cy="12" r="2.2" fill="currentColor" />
            <path
              d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
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
          {weatherData ? getTemperature(weatherData.main.temp) : "--"} <span className="text-6xl text-bold text-white">°{unit}</span>{" "}
        </span>
        <span className="text-xl text-white">{capitalizeDescription(weatherData?.weather[0].description)}</span>
        <span className="text-ls text-white">{getFormattedDate()}</span>
        <span className="text-ls text-white">{location}</span>
      </div>
    </div>
  );
}
