import React from "react";
import SurveyFormBoxComp from "./SurveyFormBoxComp";
import Navigators from "./Navigators"; // Ensure this is imported

type Props = {
  Qno: number;
  TotalSectionQuestion: number;
  question: string;
  options: string[];
  handleNext: () => void;
  handlePrev: () => void;
};

const FormComp = ({
  Qno,
  TotalSectionQuestion,
  question,
  options,
  handleNext,
  handlePrev,
}: Props) => {
  return (
    <div>
      <div className="min-h-screen h-auto bg-main bg-no-repeat bg-top bg-cover">
        <div className="max-w-7xl mx-auto ~px-4/12 pb-4 ~/md:~pt-32/40 lg:pt-28 flex flex-col gap-5">
          <h1 className="text-customRed text-4xl sm:text-6xl w-full max-w-3xl self-center text-center font-bold rounded-md py-2">
            Question {Qno + 1} of {TotalSectionQuestion}
          </h1>
          <section className="bg-white p-10 flex flex-col items-center justify-between gap-8 rounded-lg">
            <h1 className="text-2xl font-bold text-center">{question}</h1>
            <div className="flex flex-col flex-wrap w-full justify-center sm:flex-row sm:items-stretch">
              {options.map((item, index) => {
                return <SurveyFormBoxComp key={index} optionName={item} />;
              })}
            </div>
          </section>
          <div className="flex justify-end w-full">
            <div>
              <Navigators handleNext={handleNext} handlePrevious={handlePrev} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormComp;
