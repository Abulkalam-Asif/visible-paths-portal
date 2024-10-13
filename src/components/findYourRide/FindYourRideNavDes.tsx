"use client";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaArrowRightArrowLeft, FaMagnifyingGlass } from "react-icons/fa6";
import FindYourRideNavMenu from "./FindYourRideNavMenu";
import FindYourRideSortByMenu from "./FindYourRideSortByMenu";
import Image from "next/image";
import { locationPinIcon } from "@/assets/images";

const FindYourRideNavDes = () => {
  const [isSortByMenuOpen, setIsSortByMenuOpen] = useState(false);
  const toggleSortByMenu = () => {
    setIsSortByMenuOpen(prevState => !prevState);
  };

  return (
    <>
      <div className="hidden relative z-10 lg:flex items-start justify-between ~lg:~gap-8/16">
        <div className="flex items-center border bg-customCream rounded-full text-[#737373] ~lg:~px-1.5/3 ~lg:~py-1/2 ~lg:~w-36/64 ~lg:~gap-1/2">
          <FaMagnifyingGlass className="~/sm:~w-2/3 h-auto lg:~lg:~w-2/4 lg:~lg:~min-w-2/4" />
          <input
            type="search"
            className="flex-1 bg-transparent outline-none text-xxxs placeholder:text-black font-semibold lg:~lg:~text-xxxs/sm"
            placeholder="Search"
          />
        </div>
        <div className="flex items-center">
          <div className="w-full bg-customRed skew-x-[30deg] ~lg:~px-8/16 ~lg:~py-1/2">
            <h2 className="font-bold text-white skew-x-[-30deg] flex items-center justify-center ~lg:~gap-3/6 ~lg:~text-xs/2xl">
              <span>Used Cars for Sale</span>
              <FaChevronRight className="text-whiteh-auto lg:~lg:~w-2/4" />
              <Image
                src={locationPinIcon}
                alt="location"
                width={24}
                height={24}
                className="h-auto ~lg:~w-3/6"
              />
              <span className="underline">Worcester, MA</span>
            </h2>
          </div>
          <div className="relative">
            <svg
              width="213"
              height="66"
              viewBox="0 0 213 66"
              fill="none"
              className="w-fit ~lg:~ml-[-0.25rem]/[-0.5rem] lg:~lg:~h-[1.6rem]/[3.2rem]"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M0.5 0H213V66H41.5L0.5 0Z" fill="#B22234" />
            </svg>
            <button
              onClick={toggleSortByMenu}
              className="w-full flex items-center justify-center gap-[.5em] whitespace-nowrap absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white font-bold ~lg:~text-xxs/lg">
              <span>Sort By:</span>
              <FaArrowRightArrowLeft className="rotate-90" />
            </button>
            <div className="relative">
              {isSortByMenuOpen ? (
                <FindYourRideSortByMenu />
              ) : (
                <FindYourRideNavMenu />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindYourRideNavDes;
