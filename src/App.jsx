import React from "react";
import Aside from "./components/aside.jsx";
import ButtonsGrades from "./components/buttonsgrades.jsx";
import DaysContainer from "./components/dayscontainer.jsx";
import HightLightsContainer from "./components/hightlightscontainer.jsx";

export default function App() {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row md:h-screen">
        <div className="w-full h-200 bg-[#1e213a] md:w-3/10 md:h-full">
          <Aside />
        </div>
        <div className="w-full h-300 flex flex-col bg-[#100e1d] md:w-7/10 md:h-full md:px-30 md:py-8">
          <div className="w-full h-1/12 flex items-center">
            <ButtonsGrades />
          </div>
          <div className="w-full h-4/12 flex items-center justify-center md:h-3/12">
            <DaysContainer />
          </div>
          <div className="w-full h-7/12 md:h-8/12">
            <HightLightsContainer />
          </div>
        </div>
      </div>
    </>
  );
}
