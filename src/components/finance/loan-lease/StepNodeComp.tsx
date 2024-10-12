import React from "react";

type Props = {
  nodeNumber: number;
  title: string;
  isHighlighted?: boolean;
};

const StepNodeComp = ({ nodeNumber, title, isHighlighted }: Props) => {
  return (
    <div className="relative flex flex-col items-center">
      <div
        className={`w-8 h-8 flex items-center justify-center border-black border-2 rounded-full font-bold text-white ${
          isHighlighted ? "bg-customRed border-none" : "bg-black"
        } transition-color duration-700 ease-in-out`}>
        {nodeNumber}
      </div>
      <div
        className={`hidden sm:block absolute top-full translate-y-1 font-bold whitespace-nowrap text-sm lg:~lg:~text-sm/lg  ${
          isHighlighted ? "text-customRed" : ""
        }`}>
        {title}
      </div>
    </div>
  );
};

export default StepNodeComp;
