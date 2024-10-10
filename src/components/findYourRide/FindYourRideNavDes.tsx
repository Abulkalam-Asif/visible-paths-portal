"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaBars, FaChevronRight } from "react-icons/fa";
import { FaArrowRightArrowLeft, FaMagnifyingGlass, FaX } from "react-icons/fa6";
import FindYourRideNavMenu from "./FindYourRideNavMenu";
import FindYourRideSortByMenu from "./FindYourRideSortByMenu";
import Image from "next/image";
import { locationPinIcon } from "@/assets/images";

const FindYourRideNavDes = () => {
  const menuDivRef = useRef<HTMLDivElement>(null);
  const sortByDivRef = useRef<HTMLDivElement>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };
  const [isSortByMenuOpen, setIsSortByMenuOpen] = useState(false);
  const toggleSortByMenu = () => {
    setIsSortByMenuOpen(prevState => !prevState);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (menuDivRef.current && !menuDivRef.current.contains(e.target as Node)) {
      setIsMenuOpen(false);
    }
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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <>
      <div className="hidden relative z-10 lg:flex items-end ~lg:~gap-8/20">
        <div className="flex items-start justify-center ~lg:~gap-6/8">
          <button className="bg-white p-2 rounded-xl">
            <FaArrowLeft className="text-customRed ~lg:~w-6/8 h-auto" />
          </button>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 px-4 py-2 border border-customRed bg-white/80 backdrop-blur-md rounded-full text-black">
              <FaMagnifyingGlass className="~/sm:~w-3/4 h-auto" />
              <input
                type="search"
                className="bg-transparent outline-none text-xs placeholder:text-black font-semibold"
                placeholder="Search"
              />
            </div>
            <div ref={sortByDivRef} className="relative">
              <button
                onClick={toggleSortByMenu}
                className="bg-customRed p-2 rounded-md text-white w-full flex items-center justify-center gap-4">
                <span className="~lg:~text-lg/xl font-bold">Sort By:</span>
                <FaArrowRightArrowLeft className="~lg:~w-6/8 h-auto rotate-90" />
              </button>
              {isSortByMenuOpen && <FindYourRideSortByMenu />}
            </div>
          </div>
        </div>
        <div className="w-full flex items-center gap-2">
          <div className="w-full bg-customRed skew-x-[25deg] ~lg:~py-2/4">
            <h2 className="font-bold text-white skew-x-[-25deg] flex items-center justify-center ~lg:~gap-3/4 py-2 ~lg:~text-3xl/4xl">
              <span>Used Cars for Sale</span>
              <FaChevronRight className="text-white ~lg:~w-3/4 h-auto" />
              <Image
                src={locationPinIcon}
                alt="location"
                width={24}
                height={24}
                className="~lg:~w-5/7 h-auto"
              />
              <span className="underline">Worcester, MA</span>
            </h2>
          </div>
          <div className="bg-customRed skew-x-[25deg] px-8 ~lg:~py-3/5">
            <div ref={menuDivRef} className="relative skew-x-[-25deg]">
              <button onClick={toggleMenu} className="bg-white p-2 rounded-xl">
                {isMenuOpen ? (
                  <FaX className="text-customRed ~lg:~w-6/8 h-auto" />
                ) : (
                  <FaBars className="text-customRed ~lg:~w-6/8 h-auto" />
                )}
              </button>
              {isMenuOpen && <FindYourRideNavMenu />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindYourRideNavDes;
