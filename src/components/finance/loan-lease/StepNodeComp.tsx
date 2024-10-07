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
        className={`w-10 h-10 flex items-center justify-center border-black border-2 rounded-full font-bold ${
          isHighlighted ? "bg-customRed text-white border-none" : "bg-white"
        } transition-color duration-700 ease-in-out`}>
        {nodeNumber}
      </div>
      <div
        className={`hidden sm:block absolute top-full translate-y-1 font-bold whitespace-nowrap  ${
          isHighlighted ? "text-customRed" : "text-white"
        }`}>
        {title}
      </div>
    </div>
  );
};

export default StepNodeComp;
