import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Props = {
  handleNext: () => void; // Function to handle next navigation
  handlePrevious: () => void; // Function to handle previous navigation
};

const Navigators = ({ handleNext, handlePrevious }: Props) => {
  return (
    <div className="max-w-7xl mx-auto ~px-4/12 pb-4 pt-30">
      <div className="flex text-white items-center gap-2">
        <button onClick={handlePrevious} className="bg-gray-400 p-4 rounded-lg">
          <FaArrowLeft />
        </button>

        <button onClick={handleNext} className="bg-customRed p-4 rounded-lg">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Navigators;
