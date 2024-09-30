import React from "react";

type Props = {};

const FirstPageComp = (props: Props) => {
  return (
    <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto pb-4 pt-40 px-4">
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
  );
};

export default FirstPageComp;
