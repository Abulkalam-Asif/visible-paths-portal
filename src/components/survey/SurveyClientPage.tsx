"use client";
import React, { Suspense } from "react";
import FirstPageComp from "./FirstPageComp";
import { useRouter, useSearchParams } from "next/navigation";
import Data from "../../../public/json/survey.json";
import FormComp from "./FormComp";
import SecondPageCom from "./SecondPageCom";

const SurveyClientPageInner = () => {
  const router = useRouter();
  const params = useSearchParams();

  const sectionIndex = parseInt(params.get("section") as string) || 0;
  const questionIndex = parseInt(params.get("question") as string) || 0;

  // Navigate to the next question or section
  const handleNext = () => {
    const totalQuestions = Data[sectionIndex]?.questions.length || 0;

    if (questionIndex < totalQuestions - 1) {
      // If not the last question in the section, increment question index
      router.push(
        `/survey?section=${sectionIndex}&question=${questionIndex + 1}`,
      );
    } else if (sectionIndex < Data.length - 1) {
      // If last question, move to the next section
      router.push(`/survey?section=${sectionIndex + 1}&question=0`);
    } else {
      console.log("Survey completed!"); // Handle survey completion here
      // Optionally, redirect to a completion page
    }
  };

  // Navigate to the previous question or section
  const handlePrev = () => {
    if (questionIndex > 0) {
      // If not the first question, decrement question index
      router.push(
        `/survey?section=${sectionIndex}&question=${questionIndex - 1}`,
      );
    } else if (sectionIndex > 0) {
      // If at the first question, move to the previous section
      const prevSectionIndex = sectionIndex - 1;
      const prevSectionTotalQuestions = Data[prevSectionIndex].questions.length;
      router.push(
        `/survey?section=${prevSectionIndex}&question=${
          prevSectionTotalQuestions - 1
        }`,
      );
    }
  };

  if (params.size === 0) {
    return <FirstPageComp />;
  }
  if (params.has("start")) {
    return <SecondPageCom />;
  }

  return (
    <>
      <FormComp
        Qno={questionIndex}
        TotalSectionQuestion={Data[sectionIndex].questions.length}
        question={Data[sectionIndex].questions[questionIndex].question}
        options={Data[sectionIndex].questions[questionIndex].options}
        handleNext={handleNext} // Pass the next handler
        handlePrev={handlePrev} // Pass the previous handler
      />
    </>
  );
};

const SurveyClientPage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading survey...</div>}>
        <SurveyClientPageInner />
      </Suspense>
    </>
  );
};

export default SurveyClientPage;
