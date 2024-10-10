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
      <div className="min-h-screen h-auto bg-main bg-no-repeat bg-top bg-cover -z-10">
        <motion.div
          className="~px-4/12 pb-4 ~/md:~pt-32/40 lg:pt-28"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}>
          <div className="relative text-white border-white border-2 rounded-[36px] max-w-7xl mx-auto before:backdrop-blur-md bg-[#737475]/50 flex flex-col gap-5 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:inset-0 before:-z-10">
            <h1 className="text-white text-4xl ~/sm:~mt-5/10 sm:text-6xl w-full max-w-3xl self-center text-center font-bold rounded-md py-2">
              Question {qNo + 1} of {totalSectionQuestion}
            </h1>
            <section className=" p-10 flex flex-col items-center justify-between gap-8 rounded-lg">
              <h1 className="text-2xl font-bold text-center">{question}</h1>
              <div className="flex flex-col flex-wrap w-full justify-center sm:flex-row sm:items-stretch">
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
