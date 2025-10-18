import React from "react";

export default function ButtonsGrades({ unit, handleUnitChange }) {
  const baseButtonClass =
    "rounded-full font-bold w-12 h-12 text-lg md:w-10 md:h-10 md:text-base transition-colors duration-300";
  const onClass = "bg-white text-gray-800";
  const offClass = "bg-[#585676] text-white";

  return (
    <div className="w-full flex justify-center md:justify-end gap-2 px-10">
      <button
        className={`${baseButtonClass} ${unit === "C" ? onClass : offClass}`}
        onClick={() => handleUnitChange("C")}
        aria-label="Switch to Celsius"
      >
        °C
      </button>
      <button
        className={`${baseButtonClass} ${unit === "F" ? onClass : offClass}`}
        onClick={() => handleUnitChange("F")}
        aria-label="Switch to Fahrenheit"
      >
        °F
      </button>
    </div>
  );
}
