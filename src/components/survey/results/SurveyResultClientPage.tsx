import React from "react";
import HeadCard from "./HeadCard";
import ResultGridCard from "./ResultsGridCard";
import { JP } from "@/assets/images";

const SurveyResultClientPage = () => {
  return (
    <>
      <section className="min-h-screen h-full bg-surveyResult bg-no-repeat bg-bottom bg-cover">
        <div className="max-w-7xl h-full mx-auto sm:flex sm:flex-col sm:gap-8 justify-between ~px-4/12 pb-4 ~/md:~pt-32/40 lg:pt-22">
          <HeadCard
            image={JP}
            title={"The Budgeting Pro"}
            description={
              "You excel managing expenses and tracking your spending habits"
            }
            buttonText={"TAKE THE SURVEY"}
          />
          <ResultGridCard />
        </div>
      </section>
    </>
  );
};

export default SurveyResultClientPage;
