import React from "react";
import InsurancePlanFirstComp from "./InsurancePlanFirstComp";

const InsurancePlanComp = () => {
  return (
    <div className="max-w-8xl mx-auto pb-12 ~px-4/12">
      <div className="bg-[rgba(246,244,241,1)] flex flex-col ~lg:~gap-5/10 w-full sm:w-2/3 mx-auto p-5 rounded-2xl">
        <InsurancePlanFirstComp />
        <div className="flex flex-col sm:flex-row gap-10 sm:px-10 w-full">
          <div className="flex flex-col gap-10 w-1/2">
            <h1 className="text-xl font-bold">Policy Information</h1>
            <div className="flex w-fit border border-[#C7C7C7] rounded-sm">
              <div className="bg-customRed text-white p-4 flex flex-col justify-between">
                <div className="font-bold">Policy Number</div>
                <div>Effective</div>
                <div>Expiration</div>
                <div>Underwritten By</div>
              </div>
              <div className="bg-white text-black p-4">
                <div className="mb-6 text-right">
                  <div className="text-black font-bold text-lg">
                    123-456-789
                  </div>
                </div>
                <div className="mb-6 text-right">
                  <div className="text-black font-bold">05/04/2024</div>
                </div>
                <div className="mb-6 text-right">
                  <div className="text-black font-bold">05/04/2026</div>
                </div>
                <div className="text-black font-bold">
                  <div>VisiblePaths Insurance 6301</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 w-1/2">
            <h1 className="text-xl font-bold">Premium / Fees</h1>
            <div className="sm:mt-10 flex flex-col gap-4 font-bold">
              <div className="flex flex-col gap-6 text-xl">
                <div className="flex justify-between items-center">
                  <h1>Policy Premium</h1>
                  <p>$797.0</p>
                </div>
                <div className="flex justify-between items-center">
                  <h1>Fees</h1>
                  <p>$0.88</p>
                </div>
                <div className="w-full border border-black"></div>
              </div>
              <div className="flex justify-between items-center text-xl">
                <h1>Policy Premium + Fee</h1>
                <p>$798.48</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsurancePlanComp;
