import React, { Suspense } from "react";
import InsuranceLayoutPage from "./InsuranceLayoutPage";
import InsuranceLayoutInnerComp from "./InsuranceLayoutInnerComp";

const InsuranceClientPage = () => {
  return (
    <section className="min-h-screen h-auto bg-survey bg-no-repeat bg-top bg-cover">
      <div className="max-w-8xl mx-auto pb-6 ~px-4/12 ~/md:~pt-32/40 lg:~lg:~pt-[6.5rem]/[13rem]">
        <Suspense fallback={<div>Loading survey...</div>}>
          <InsuranceLayoutPage>
            <InsuranceLayoutInnerComp />
          </InsuranceLayoutPage>
        </Suspense>
      </div>
    </section>
  );
};

export default InsuranceClientPage;
