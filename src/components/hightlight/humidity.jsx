import React from "react";
export default function Humidity({ percentage }) {
  return (
    <div className="bg-[#1e213a] p-4 text-white text-center flex flex-col items-center justify-center gap-2 min-h-[130px] md:h-40">
      <h3 className="text-base font-medium text-gray-300">Humidity</h3>
      <p className="text-4xl font-bold">
        {percentage}
        <span className="text-xl font-medium">%</span>
      </p>
      <div className="w-full bg-gray-500 rounded-full h-2.5 mt-2">
        <div
          className="bg-yellow-400 h-2.5 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
