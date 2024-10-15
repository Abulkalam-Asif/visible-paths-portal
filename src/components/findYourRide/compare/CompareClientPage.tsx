import React from "react";
import CompareCarCard from "./CompareCarCard";

type CompareClientPageProps = {
  cars: {
    id: string;
    name: string;
    price: string;
    image: string;
    pros: string[];
    cons: string[];
  }[];
};

const CompareClientPage = ({ cars }: CompareClientPageProps) => {
  return (
    <>
      <section className="min-h-screen h-auto bg-main bg-no-repeat bg-top bg-cover">
        <div className="max-w-8xl mx-auto ~px-4/12 pb-12 ~/md:~pt-32/40 lg:~lg:~pt-28/44">
          <div className="grid grid-cols-1 gap-y-8 gap-x-4 sm:grid-cols-2 lg:flex lg:items-stretch lg:gap-2">
            {cars.map((car, index) => (
              <CompareCarCard key={index} index={index} {...car} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CompareClientPage;
