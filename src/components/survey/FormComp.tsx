import React from "react";
import SurveyFormBoxComp from "./SurveyFormBoxComp";
import Navigators from "./Navigators"; // Ensure this is imported
import { motion } from "framer-motion";

type Props = {
  qNo: number;
  totalSectionQuestion: number;
  question: string;
  options: string[];
  handleNext: () => void;
  handlePrev: () => void;
};

const FormComp = ({
  qNo,
  totalSectionQuestion,
  question,
  options,
  handleNext,
  handlePrev,
}: Props) => {
  return (
    <div>
      <div className="min-h-screen h-auto bg-main bg-no-repeat bg-top bg-cover">
        <motion.div
          className="~px-4/8 pb-2 pt-40 lg:~lg:~pt-32/72"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}>
          <div className="text-black rounded-[24px] max-w-5xl mx-auto bg-[#F6F4F1] flex flex-col gap-5  lg:~lg:~gap-5/10">
            <h1 className="text-black text-4xl lg:~lg:~text-4xl/6xl ~/sm:~mt-5/10 sm:text-4xl w-full max-w-3xl self-center text-center font-bold rounded-md py-2">
              Question {qNo + 1} of {totalSectionQuestion}
            </h1>
            <section className="p-4 flex flex-col items-center justify-between gap-8 rounded-lg">
              <h1 className="text-xl lg:~lg:~text-xl/3xl font-bold text-center">
                {question}
              </h1>
              <div className="flex rounded-sm bg-white p-6 flex-col flex-wrap w-full justify-center sm:flex-row sm:items-stretch">
                {options.map((item, index) => {
                  return <SurveyFormBoxComp key={index} optionName={item} />;
                })}
              </div>
            </section>
            <div className="flex justify-end w-full">
              <div>
                <Navigators
                  handleNext={handleNext}
                  handlePrevious={handlePrev}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FormComp;
