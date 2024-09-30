"use client";
import React, { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import FirstPageComp from "./FirstPageComp";
import SecondPageCom from "./SecondPageCom";
import FormComp from "./FormComp";
import Data from "../../../public/json/survey.json";

const SurveyClientPage = () => {
  const router = useRouter();
  const params = useSearchParams();

  const sectionIndex = parseInt(params.get("section") as string) || 0;
  const questionIndex = parseInt(params.get("question") as string) || 0;

  // Navigate to the next question or section
  const handleNext = () => {
    const totalQuestions = Data[sectionIndex]?.questions.length || 0;

    if (questionIndex < totalQuestions - 1) {
      router.push(
        `/survey?section=${sectionIndex}&question=${questionIndex + 1}`,
      );
    } else if (sectionIndex < Data.length - 1) {
      router.push(`/survey?section=${sectionIndex + 1}&question=0`);
    } else {
      console.log("Survey completed!"); // Handle survey completion here
    }
  };

  // Navigate to the previous question or section
  const handlePrev = () => {
    if (questionIndex > 0) {
      router.push(
        `/survey?section=${sectionIndex}&question=${questionIndex - 1}`,
      );
    } else if (sectionIndex > 0) {
      const prevSectionIndex = sectionIndex - 1;
      const prevSectionTotalQuestions = Data[prevSectionIndex].questions.length;
      router.push(
        `/survey?section=${prevSectionIndex}&question=${
          prevSectionTotalQuestions - 1
        }`,
      );
    }
  };

  // Render based on the params
  return (
    <Suspense fallback={<div>Loading survey...</div>}>
      {params.size === 0 ? (
        <FirstPageComp />
      ) : params.has("start") ? (
        <SecondPageCom />
      ) : (
        <FormComp
          Qno={questionIndex}
          TotalSectionQuestion={Data[sectionIndex].questions.length}
          question={Data[sectionIndex].questions[questionIndex].question}
          options={Data[sectionIndex].questions[questionIndex].options}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      )}
    </Suspense>
  );
};

export default SurveyClientPage;
