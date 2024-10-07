import CompareClientPage from "@/components/findYourRide/compare/CompareClientPage";
import carsData from "@/../public/temp/compare.json";
import React from "react";

// Get ID from here
// type CompareIdProps = {
//   params: {
//     id: string;
//   };
// };

const CompareId = () =>
  // { params: { id } }: CompareIdProps
  {
    // Fetch data for the car with the given id

    return (
      <>
        <CompareClientPage cars={carsData} />
      </>
    );
  };

export default CompareId;
