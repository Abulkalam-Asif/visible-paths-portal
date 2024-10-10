import React from "react";

type Props = {
  width: string;
  isHighlighted?: boolean;
};

const LineComp = ({ width, isHighlighted }: Props) => {
  return (
    <div>
      <div
        className={`${width} ${
          isHighlighted ? "bg-customRed" : "bg-[#606367]"
        } h-1 transition-color duration-700 ease-in-out`}></div>
    </div>
  );
};

export default LineComp;
