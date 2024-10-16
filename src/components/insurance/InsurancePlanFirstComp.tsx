import { insurancePlanFirstCompIcon } from "@/assets/images";
import Image from "next/image";
import React from "react";

const InsurancePlanFirstComp = () => {
  return (
    <div className="bg-white gap-5 flex sm:flex justify-between ~lg:~p-4/8">
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
