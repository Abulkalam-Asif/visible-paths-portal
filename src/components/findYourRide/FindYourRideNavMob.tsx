"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaBars } from "react-icons/fa";
import { FaArrowRightArrowLeft, FaMagnifyingGlass, FaX } from "react-icons/fa6";
import FindYourRideNavMenu from "./FindYourRideNavMenu";
import FindYourRideSortByMenu from "./FindYourRideSortByMenu";

const FindYourRideNavMob = () => {
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

  return (
    <>
      <div className="mt-3 flex items-center justify-center ~/sm:~gap-1/3">
        <button className="bg-white p-2 rounded-xl">
          <FaArrowLeft className="text-customRed ~/sm:~w-4/6 h-auto" />
        </button>
        <div className="flex items-center gap-2 px-4 py-2 border border-white bg-white/30 backdrop-blur-md rounded-full text-white">
          <FaMagnifyingGlass className="~/sm:~w-3/4 h-auto" />
          <input
            type="search"
            className="bg-transparent outline-none ~/sm:~text-xs/sm placeholder:text-white font-semibold"
            placeholder="Search"
          />
        </div>
        <div ref={sortByDivRef} className="relative">
          <button
            onClick={toggleSortByMenu}
            className="bg-customRed p-2 rounded-xl">
            <FaArrowRightArrowLeft className="text-white ~/sm:~w-4/6 h-auto rotate-90" />
          </button>
          {isSortByMenuOpen && <FindYourRideSortByMenu />}
        </div>
        <div ref={menuDivRef} className="relative">
          <button onClick={toggleMenu} className="bg-white p-2 rounded-xl">
            {isMenuOpen ? (
              <FaX className="text-customRed ~/sm:~w-4/6 h-auto" />
            ) : (
              <FaBars className="text-customRed ~/sm:~w-4/6 h-auto" />
            )}
          </button>
          {isMenuOpen && <FindYourRideNavMenu />}
        </div>
      </div>
    </>
  );
};

export default FindYourRideNavMob;
