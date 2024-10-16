import { insuranceSummaryPageIcon } from "@/assets/images";
import Image from "next/image";
import React from "react";
import InsuranceSummaryCardComp from "./InsuranceSummaryCardComp";

const SummaryComp = () => {
  return (
    <div className="max-w-8xl mx-auto pb-12 ~px-4/12">
      <div className="bg-[rgba(246,244,241,1)] flex flex-col ~lg:~gap-5/10 w-full sm:w-2/3 mx-auto p-5 rounded-2xl">
        <div className="bg-insuranceSumary bg-customRed bg-contain flex h-full text-white p-4">
          <div className="w-full flex flex-col justify-center gap-3">
            <h1 className="text-2xl font-semibold">TOYOTA YARIS</h1>
            <p className="text-xl font-semibold">ESTIMATED MONTHLY PAYMENT</p>
            <p className="text-4xl font-semibold">$400</p>
            <table className="text-white">
              <thead>
                <tr>
                  <th className="py-2">Type Car</th>
                  <th className="py-2">Regular</th>
                  <th className="py-2">Capacity</th>
                  <th className="py-2">2 Person</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">Steering</td>
                  <td className="py-2">Manual</td>
                  <td className="py-2">Gasoline</td>
                  <td className="py-2">70L</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="hidden sm:flex w-full items-center justify-center">
            <Image
              src={insuranceSummaryPageIcon}
              alt="insuranceSummaryPageIcon"
              width={200}
              height={200}
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="flex flex-col ~lg:~gap-5/10">
          <InsuranceSummaryCardComp />
          <InsuranceSummaryCardComp />
          <InsuranceSummaryCardComp />
        </div>
      </div>
    </div>
  );
};

export default SummaryComp;
