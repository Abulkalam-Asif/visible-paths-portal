import React from "react";

type Props = {
  optionName: string;
};

const SurveyFormBoxComp = ({ optionName }: Props) => {

  return (
    <div className="p-2 w-full flex sm:w-1/3 lg:w-1/5">
      <button className={`block bg-[#F6F4F1] w-full hover:bg-customRed hover:text-white transition-colors delay-50 duration-175 border-black/50 border-2 p-6 rounded-xl font-bold text-sm text-center`}>
        {optionName}
      </button>
    </div>
  );
};

export default SurveyFormBoxComp;
