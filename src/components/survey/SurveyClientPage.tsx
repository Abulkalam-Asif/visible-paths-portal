import React from "react";
import FirstPageComp from "./FirstPageComp";
import Image from "next/image";
import firstPageCar from "../../assets/images/firstPageCar.svg";

const SurveyClientPage = () => {
  return (
    <>
      <section className="h-screen bg-survey bg-no-repeat bg-top bg-cover flex items-center justify-between max-w-7xl mx-auto ~px-4/12 pb-4 pt-30">
        <FirstPageComp />
        <div className="hidden w-2/3 sm:flex justify-center h-full items-end">
          <Image src={firstPageCar} alt="firstPage" width={300} height={50}/>
        </div>
      </section>
    </>
  );
};

export default SurveyClientPage;
