import React from "react";
import { logoIcon, PriceIcon, starReviewIcon } from "@/assets/images";
import Link from "next/link";
import Image from "next/image";

const InsuranceSummaryCardComp = () => {
  return (
    <Link href={"/insurance?page=insurancePlan"}>
      <div className="border bg-white border-[#C7C7C7] ~lg:~p-2/5 relative mr-5">
        <h1 className="bg-customRed text-white text-sm sm:text-xl ~sm:~px-1/3 ~lg:~py-1 rounded-md text-center absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          $1200 Annual Savings
        </h1>
        <h1 className="bg-black hidden w-14 h-14 text-white text-[13px] rounded-full sm:flex justify-center items-center absolute top-1/2 right-0 -translate-y-1/2 translate-x-5">
          Select
        </h1>
        <div className="flex items-center lg:~lg:~gap-2/4">
          <Image
            src={logoIcon}
            alt="VisiblePaths"
            width={120}
            height={120}
            priority={true}
            className="~/lg:~w-10/20 ~/lg:~h-10/20 lg:~lg:~w-10/20 lg:~lg:~h-10/20"
          />
          <div className="flex items-center w-full justify-between">
            <div className="flex flex-col justify-between items-start gap-2">
              <h1 className="sm:text-xl text-sm font-semibold ">
                VisiblePaths Insurance
              </h1>
              <Image
                src={starReviewIcon}
                alt="reviews"
                width={100}
                height={100}
                className="w-12 sm:lg:~lg:~w-20/32"
              />
            </div>
            <div className="sm:mr-12">
              <h1 className="sm:text-xl text-sm font-semibold ">$54 / month</h1>
              <Image
                src={PriceIcon}
                alt="reviews"
                width={100}
                height={100}
                className="w-12 sm:lg:~lg:~w-20/32"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default InsuranceSummaryCardComp;
