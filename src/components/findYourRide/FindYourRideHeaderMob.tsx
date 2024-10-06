import React from "react";
import { locationPinIcon } from "@/assets/images";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import FindYourRideNavMob from "./FindYourRideNavMob";

const FindYourRideHeaderMob = () => {
  return (
    <>
      <div className="lg:hidden">
        <div className="bg-customRed skew-x-[20deg]">
          <h2 className="font-bold text-white skew-x-[-20deg] flex items-center justify-center gap-1 py-2 ~/sm:~text-base/2xl">
            <span>Used Cars for Sale</span>
            <FaChevronRight className="text-white w-2.5 h-auto" />
            <Image
              src={locationPinIcon}
              alt="location"
              width={24}
              height={24}
              className="w-4 h-auto"
            />
            <span className="underline">Worcester, MA</span>
          </h2>
        </div>
        <FindYourRideNavMob />
      </div>
    </>
  );
};

export default FindYourRideHeaderMob;
