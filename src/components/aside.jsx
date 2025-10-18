import React from "react";

export default function Aside({ handleSearch, location }) {
  return (
    <div className="w-full h-full flex flex-col gap-5">
      <div className="h-1/10 flex flex-row justify-between items-center px-10">
        <button
          className="bg-[#6e717a] w-35 h-10 rounded-xl text-white"
          onClick={handleSearch}
        >
          Search for places
        </button>
        <button className="bg-[#6e717a] w-10 h-10 rounded-full text-white flex items-center justify-center">
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
          className="relative top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center opacity-20 items-center flex justify-center"
          style={{ backgroundImage: "url('/Cloud-background.png')" }}
        >
          <div className="border-2 border-white w-50 h-50 absolute "></div>
        </div>
      </div>
      <div className="h-5/10 flex flex-col justify-center items-center gap-4">
        <span className="text-8xl text-white font-bold">26° C</span>
        <span className="text-xl text-white">Broken Clouds</span>
        <span className="text-ls text-white">Today , Monday 13 October </span>
        <span className="text-ls text-white">{location}</span>
      </div>
    </div>
  );
}
