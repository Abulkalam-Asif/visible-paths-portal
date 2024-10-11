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
  const carsPair = carsData.reduce((acc: Car[][], car: Car, index: number) => {
    if (index % 2 === 0) {
      acc.push([car]);
    } else {
      acc[acc.length - 1].push(car);
    }
    return acc;
  }, []);

  return (
    <>
      <div className="max-w-3xl mr-auto bg-white/80 border-[3px] border-black/60 rounded-2xl backdrop-blur-md text-black px-8 pt-2 pb-4 mt-4 lg:px-10">
        <h3 className="font-bold text-xs mb-4">
          Showing 1-8 of {carsData.length} listings
        </h3>
        <div className="custom-scrollbar h-auto overflow-x-auto flex gap-3 pr-2">
          {carsPair.map((pair: Car[], index: number) => (
            <div key={index} className="flex flex-col gap-3">
              {pair.map((car: Car) => (
                <FindYourRideCarCard key={car.id} {...car} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FindYourRideCarsDisplay;
