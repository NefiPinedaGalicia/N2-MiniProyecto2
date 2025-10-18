import React from "react";
import CardDay from "./cardday";

export default function DaysContainer({ forecastData, unit }) {
  return (
    <div className="w-full px-10 py-5 md:flex md:items-center md:justify-center md:px-2">
      <div className="w-full grid grid-cols-3 gap-4 md:grid-cols-5 md:gap-8 items-center">
        {forecastData?.map((day, index) => (
          <CardDay key={index} dayData={day} unit={unit} index={index} />
        ))}
      </div>
    </div>
  );
}
