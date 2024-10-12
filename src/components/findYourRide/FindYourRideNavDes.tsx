"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaArrowRightArrowLeft, FaMagnifyingGlass } from "react-icons/fa6";
import FindYourRideNavMenu from "./FindYourRideNavMenu";
import FindYourRideSortByMenu from "./FindYourRideSortByMenu";
import Image from "next/image";
import { locationPinIcon } from "@/assets/images";

const FindYourRideNavDes = () => {
  const sortByDivRef = useRef<HTMLDivElement>(null);

  const [isSortByMenuOpen, setIsSortByMenuOpen] = useState(false);
  const toggleSortByMenu = () => {
    setIsSortByMenuOpen(prevState => !prevState);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      sortByDivRef.current &&
      !sortByDivRef.current.contains(e.target as Node)
    ) {
      setIsSortByMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="hidden relative z-10 lg:flex lg:items-start ~lg:~gap-8/16">
        <div className="flex flex-col items-start gap-2 lg:~lg:~gap-2.5/5">
          <div className="flex items-center gap-2 px-4 py-1 border bg-customCream rounded-full text-[#737373] lg:~lg:~px-1.5/3 lg:~lg:~py-1/2 lg:~lg:~w-32/56 lg:~lg:~gap-1/2">
            <FaMagnifyingGlass className="~/sm:~w-2/3 h-auto lg:~lg:~w-2/4 lg:~lg:~min-w-2/4" />
            <input
              type="search"
              className="flex-1 bg-transparent outline-none text-xxxs placeholder:text-black font-semibold lg:~lg:~text-xxxs/sm"
              placeholder="Search"
            />
          </div>
          <div ref={sortByDivRef} className="relative">
            <button
              onClick={toggleSortByMenu}
              className="bg-customRed py-[0.3em] px-[1.25em] rounded-md text-white w-full flex items-center justify-center gap-2 text-sm lg:~lg:~text-xs/2xl">
              <span className="font-bold">Sort By:</span>
              <FaArrowRightArrowLeft className="w-3 h-auto rotate-90 lg:~lg:~w-3/6" />
            </button>
            {isSortByMenuOpen && <FindYourRideSortByMenu />}
          </div>
        </div>
        <div className="w-full flex items-center">
          <div className="w-full bg-customRed skew-x-[30deg] py-2 lg:~lg:~py-3/6">
            <h2 className="font-bold text-white skew-x-[-30deg] flex items-center justify-center lg:~lg:~gap-2/4 lg:~lg:~text-lg/4xl">
              <span>Used Cars for Sale</span>
              <FaChevronRight className="text-whiteh-auto lg:~lg:~w-2/4" />
              <Image
                src={locationPinIcon}
                alt="location"
                width={24}
                height={24}
                className="w-4 h-auto lg:~lg:~w-3/6"
              />
              <span className="underline">Worcester, MA</span>
            </h2>
          </div>
          <div>
            <svg
              width="100"
              height="67"
              viewBox="0 0 100 67"
              fill="none"
              className="w-fit lg:~lg:~h-[3.25rem]/[5.5rem]"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 0H124V66H35L0 0Z"
                fill="#B22234"
                className="lg:~lg:~h-[3.25rem]/[5.5rem]"
              />
            </svg>
            <div className="relative">
              <FindYourRideNavMenu />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindYourRideNavDes;
