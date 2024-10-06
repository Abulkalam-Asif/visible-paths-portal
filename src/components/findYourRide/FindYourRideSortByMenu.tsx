"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const menuMetadata = [
  {
    label: "Best Match",
    value: "bestMatch",
  },
  {
    label: "Best Deal",
    value: "bestDeal",
  },
  {
    label: "Price Low to High",
    value: "priceLowToHigh",
  },
  {
    label: "Price High to Low",
    value: "priceHighToLow",
  },
  {
    label: "Distance",
    value: "distance",
  },
  {
    label: "Mileage Low to High",
    value: "mileageLowToHigh",
  },
  {
    label: "Mileage High to Low",
    value: "mileageHighToLow",
  },
  {
    label: "Year Low to High",
    value: "yearLowToHigh",
  },
  {
    label: "Year High to Low",
    value: "yearHighToLow",
  },
  {
    label: "Newly Listed",
    value: "newlyListed",
  },
];

const FindYourRideSortByMenu = () => {
  const [sortOption, setSortOption] = useState("bestMatch");
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.1 }}
        className="absolute w-max max-h-[50vh] overflow-y-auto top-[calc(100%+.5rem)] right-0 border border-white bg-white/30 backdrop-blur-md rounded-md px-2 py-2 flex flex-col">
        {menuMetadata.map((item, index) => (
          <button
            key={index}
            onClick={() => setSortOption(item.value)}
            className={`relative text-left w-full text-white ~text-xs/lg font-semibold ~py-1/2 ~px-2/4 rounded ${
              sortOption === item.value ? "bg-customRed" : ""
            }`}>
            {sortOption === item.value && (
              <FiCheckCircle className="absolute ~left-2/4 top-1/2 -translate-y-1/2" />
            )}
            <span className="~pl-5/7">{item.label}</span>
          </button>
        ))}
      </motion.div>
    </>
  );
};

export default FindYourRideSortByMenu;
