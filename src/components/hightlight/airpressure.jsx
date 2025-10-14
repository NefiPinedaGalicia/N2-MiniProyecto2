import React from "react";
export default function AirPressure({ pressure }) {
  return (
    <div className="bg-[#1e213a] p-4 text-white text-center flex flex-col items-center justify-center gap-2 min-h-[130px]">
      <h3 className="text-base font-medium text-gray-300">Air Pressure</h3>
      <p className="text-4xl font-bold">
        {pressure}<span className="text-xl font-medium">mb</span>
      </p>
    </div>
  );
}