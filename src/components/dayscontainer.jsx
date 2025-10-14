import React from "react";
import CardDay from "./cardday";

export default function DaysContainer() {
  const days = Array.from({ length: 5 });

  return (
    <div className="w-full px-10 py-5 md:flex md:items-center md:justify-center md:px-2">
      <div className="flex flex-col items-center gap-6 md:hidden">
        <div className="flex flex-wrap justify-center gap-6">
          {days.slice(0, 3).map((_, index) => (
            <CardDay key={index} />
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {days.slice(3, 5).map((_, index) => (
            <CardDay key={index + 3} />
          ))}
        </div>
      </div>

      <div className="w-full hidden md:grid md:grid-cols-5 md:gap-8 items-center">
        {days.map((_, index) => (
          <CardDay key={index} />
        ))}
      </div>
    </div>
  );
}
