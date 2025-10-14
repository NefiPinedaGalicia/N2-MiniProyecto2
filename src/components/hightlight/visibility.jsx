import React from "react";
export default function Visibility({ distance }) {
    const distanceInMiles = (parseFloat(distance) / 1609.34).toFixed(1);
    return (
        <div className="bg-[#1e213a] p-4 text-white text-center flex flex-col items-center justify-center gap-2 min-h-[130px]">
        <h3 className="text-base font-medium text-gray-300">Visibility</h3>
        <p className="text-4xl font-bold">
            {distanceInMiles}<span className="text-xl font-medium">miles</span>
        </p>
        </div>
    );
}