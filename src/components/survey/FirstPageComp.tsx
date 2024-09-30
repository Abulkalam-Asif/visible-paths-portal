import React from "react";
import Image from "next/image";
import firstPageCarImg  from "../../assets/survey/firstPageCar.svg";

const FirstPageComp = () => {
  return (
    <section className="min-h-screen h-full bg-survey bg-no-repeat bg-top bg-cover">
      <div className="max-w-7xl h-full mx-auto sm:flex justify-between ~px-4/12 pb-4 ~/md:~pt-32/40 lg:pt-22">
        <div className="w-full self-center max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
          <div className="bg-white rounded-lg font-extrabold text-black">
            <h1 className="text-center p-5 text-2xl md:text-4xl">
              DISCOVER YOUR FINANCIAL FUNCTIONALITY
            </h1>
            <p className="shadow-[0px_0px_14.57px_0px_rgba(0,0,0,0.2)] text-xl backdrop-blur-custom rounded-md m-2 text-center px-4">
              Unlock your financial potential with personalized insights. this
              survey will take approximately 10 minutes to complete
            </p>
            <div className="w-full flex justify-center">
              <button className="bg-customRed m-3 w-2/3 px-4 py-2 rounded-md text-white">
                START SURVEY
              </button>
            </div>
          </div>
        </div>
        <div className="hidden w-2/3 self-end sm:flex justify-center h-full items-end">
          <Image
            src={firstPageCarImg}
            alt="firstPage"
            width={300}
            height={50}
            className="w-full max-w-sm h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default FirstPageComp;
