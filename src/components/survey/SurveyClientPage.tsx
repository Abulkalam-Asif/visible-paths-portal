"use client";
import React, { Suspense, useState } from "react";
import FirstPageComp from "./FirstPageComp";
import { useRouter, useSearchParams } from "next/navigation";
import Data from "../../../public/json/survey.json";
import FormComp from "./FormComp";
import SurverySectionCompletion from "./SurverySectionCompletion";
import {
  Section0Completion,
  Section1Completion,
  Section2Completion,
  Section3Completion,
  Section4Completion,
  Section5Completion,
  Section6Completion,
  Section7Completion,
  Section8Completion,
} from "@/assets/images";
import FinalPageComp from "./FinalPageComp";

const SurveyClientPageInner = () => {
  const router = useRouter();
  const params = useSearchParams();
  const myParams = new URLSearchParams(params);
  const [section, SetSection] = useState(
    Number(myParams.get("section" as string)) || 0,
  );
  const images = [
    Section0Completion,
    Section1Completion,
    Section2Completion,
    Section3Completion,
    Section4Completion,
    Section5Completion,
    Section6Completion,
    Section7Completion,
    Section8Completion,
  ];

  const sectionIndex = parseInt(params.get("section") as string) || 0;
  const questionIndex = parseInt(params.get("question") as string) || 0;

  const handleNext = () => {
    const totalQuestions = Data[sectionIndex]?.questions.length || 0;

    if (questionIndex < totalQuestions - 1) {
      router.push(
        `/survey?section=${sectionIndex}&question=${questionIndex + 1}`,
      );
    } else if (Data[sectionIndex].questions.length === questionIndex + 1) {
      SetSection(prev => prev + 1);
      myParams.set("section", `${sectionIndex + 1}`);
      myParams.delete("question");
      router.push(`/survey?${myParams.toString()}`);
    } else {
      console.log("Survey completed!"); // Handle survey completion here
    }
  };

  const handlePrev = () => {
    if (questionIndex > 0) {
      // If not the first question, decrement question index
      router.push(
        `/survey?section=${sectionIndex}&question=${questionIndex - 1}`,
      );
    } else if (questionIndex === 0) {
      // If at the first question, move to the previous section
      SetSection(prev => (prev !== 0 ? prev - 1 : prev));
      myParams.set("section", `${section}`);
      myParams.delete("question");
      router.push(`/survey?${myParams.toString()}`);
    }
  };

  if (myParams.get("end") === "true") {
    return <FinalPageComp />;
  }
  return (
    <>
      {params.size == 0 ? (
        <FirstPageComp />
      ) : !params.get("question") ? (
        <SurverySectionCompletion image={images[section]} />
      ) : (
        <FormComp
          qNo={questionIndex}
          totalSectionQuestion={Data[sectionIndex].questions.length}
          question={Data[sectionIndex].questions[questionIndex].question}
          options={Data[sectionIndex].questions[questionIndex].options}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      )}
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
