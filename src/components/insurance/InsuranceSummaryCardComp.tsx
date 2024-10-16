import React from "react";
import { logoIcon, PriceIcon, starReviewIcon } from "@/assets/images";
import Link from "next/link";
import Image from "next/image";

const InsuranceSummaryCardComp = () => {
  return (
    <Link href={"/insurance?page=insurancePlan"}>
      <div className="border border-[#C7C7C7] ~lg:~p-2/5">
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
            <div className="sm:mr-6">
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
