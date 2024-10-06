import React from "react";
import carsData from "@/../public/temp/cars.json";
import FindYourRideCarCard from "./FindYourRideCarCard";
const FindYourRideCarsDisplay = () => {
  return (
    <>
      <div className="bg-[#737475]/30 border-[3px] border-white rounded-[2rem] backdrop-blur-[8px] text-white px-8 pt-2 pb-4 mt-6 max-w-6xl mx-auto lg:px-10 lg:pt-4">
        <h3 className="font-bold mb-4">
          Showing 1-8 of {carsData.length} listings
        </h3>
        <div className="max-h-[55vh] overflow-y-auto grid grid-cols-1 gap-4 pr-2 sm:grid-cols-2 lg:grid-cols-3">
          {carsData.map((car, index) => (
            <FindYourRideCarCard key={index} {...car} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FindYourRideCarsDisplay;
