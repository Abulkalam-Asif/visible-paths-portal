import React from "react";
import carsData from "@/../public/temp/cars.json";
import FindYourRideCarCard from "./FindYourRideCarCard";
const FindYourRideCarsDisplay = () => {
  return (
    <>
      <div className="bg-white/80 border-[3px] border-customRed rounded-[2rem] backdrop-blur-md text-black px-8 pt-2 pb-4 mt-6 max-w-6xl mx-auto lg:px-10 lg:pt-4">
        <h3 className="font-bold mb-4">
          Showing 1-8 of {carsData.length} listings
        </h3>
        <div className="custom-scrollbar max-h-[55vh] overflow-x-auto flex gap-4 pr-2">
          {carsData.map((car, index) => (
            <FindYourRideCarCard key={index} {...car} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FindYourRideCarsDisplay;
