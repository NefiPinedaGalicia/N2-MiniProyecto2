import React from "react";

export default function CardDay() {
  return (
    <div className="bg-[#1e213a] w-25 h-30 flex flex-col items-center p-2 gap-2 md:w-30 md:h-40 md:gap-4 md:justify-center">
      <h4 className="text-bold text-white">Today</h4>
      <div className="border-2 border-white w-10 h-10"></div>
      <h5 className="text-white flex justify-between items-center gap-2 md:gap-4">
        <span className="text-bold text-sm">Max</span>
        <span className="text-bold text-sm">Min</span>
      </h5>
    </div>
  );
}
