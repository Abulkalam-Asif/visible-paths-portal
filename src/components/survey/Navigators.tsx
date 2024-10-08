"use client";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Props = {
  handleNext: () => void; // Function to handle next navigation
  handlePrevious: () => void; // Function to handle previous navigation
};

const Navigators = ({ handleNext, handlePrevious }: Props) => {
  return (
    <div className="max-w-5xl ~px-4/12 pb-4 pt-30">
      <div className="flex text-white items-center gap-6">
        <button
          type={"button"}
          onClick={handlePrevious}
          className="bg-black p-3 rounded-lg">
          <FaArrowLeft />
        </button>

        <button
          type={"button"}
          onClick={handleNext}
          className="bg-customRed p-3 rounded-lg">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Navigators;
