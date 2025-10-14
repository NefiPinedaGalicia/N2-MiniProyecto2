import React from "react";
export default function WindSpeed({ speed }) {
  return (
    <div className="bg-[#1e213a] p-4 text-white text-center flex flex-col items-center justify-center gap-2 min-h-[130px] md:h-40">
      <h3 className="text-base font-medium text-gray-300">Wind Status</h3>
      <p className="text-4xl font-bold">
        {speed}
        <span className="text-xl font-medium">mph</span>
      </p>
    </div>
  );
}
