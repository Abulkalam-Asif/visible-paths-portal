import CarIdClientPage from "@/components/findYourRide/car/CarIdClientPage";
import React from "react";

const carData = {
  image: "/temp/details1.png",
  name: "Nissan GT-4",
  price: "23145",
  description:
    "NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the race track.",
  tagline: "Sports Car with the Best Design and Acceleration",
  images: ["/temp/car1.png", "/temp/car2.png", "/temp/car3.png"],
  mileage: "21/28 City/Hwy",
  engine: "4 cyl M",
  driven: "1,230 Miles",
  vin: "WVWFW8AH6FV000000",
  properties: ["No Accidents", "1  Owner", "Personal Use Only"],
  seller: "VisiblePaths Auto Sales (15 mi away)",
};
// Get ID from here
// type CarIdProps = {
//   params: {
//     id: string;
//   };
// };

const CarId = () =>
  // { params: { id } }: CarIdProps
  {
    // Fetch data for the car with the given id

    return (
      <>
        <CarIdClientPage carData={carData} />
      </>
    );
  };

export default CarId;
