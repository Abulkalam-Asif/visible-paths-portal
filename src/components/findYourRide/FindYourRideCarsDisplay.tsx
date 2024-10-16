import React from "react";
import carsData from "@/../public/temp/cars.json";
import FindYourRideCarCard from "./FindYourRideCarCard";

export type Car = {
  id: string;
  name: string;
  price: string;
  image: string;
  mileage: string;
  engine: string;
  driven: string;
  properties: string[];
  seller: string;
};

const FindYourRideCarsDisplay = () => {
  return (
    <>
      <div className="w-full mr-auto bg-customCream rounded-3xl backdrop-blur-md text-black px-8 pt-2 pb-4 mt-2 lg:~lg:~px-4/8 lg:w-5/6">
        <h3 className="font-bold text-xs mb-4 lg:~lg:~text-xxs/sm lg:~lg:~mb-2/4">
          Showing 1-8 of {carsData.length} listings
        </h3>
        <div className="custom-scrollbar h-full max-h-[60vh] overflow-y-auto grid grid-cols-1 gap-3 pr-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:max-h-[70vh]">
          {carsData.map((car: Car) => (
            <FindYourRideCarCard key={car.id} {...car} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FindYourRideCarsDisplay;
