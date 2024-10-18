import { insurancePlanFirstCompIcon } from "@/assets/images";
import Image from "next/image";
import React from "react";

const InsurancePlanFirstComp = () => {
  return (
    <div className="bg-white gap-5 flex sm:flex justify-between ~lg:~p-4/8 relative mt-[46px]">
      <h1 className="bg-customRed text-white text-sm sm:text-xl ~sm:~px-2/4 ~sm:~py-1/2 rounded-md text-center absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        $1200 Annual Savings
      </h1>
      <div className="flex flex-col gap-4 items-start">
        <h1 className="~lg:~text-xl/3xl font-bold">VisiblePaths Insurance</h1>
        <div className="flex flex-col gap-1">
          <p className="~lg:~text-xl/4xl font-bold">
            $54
            <span className="text-base">/month</span>
          </p>
          <p className="text-[15px] font-semibold">Policy Premium & Fees</p>
        </div>
      </div>

      <div>
        <Image
          src={insurancePlanFirstCompIcon}
          alt="Logo"
          width={200}
          height={200}
          className="w-28 sm:~lg:~w-28/48 h-auto"
        />
      </div>
    </div>
  );
};

export default InsurancePlanFirstComp;
