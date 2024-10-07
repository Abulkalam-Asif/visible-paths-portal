import React, { Suspense } from "react";
import LoanLeaseLayout from "./LoanLeaseLayout";
import LoanLeaseLayoutInnerComp from "./LoanLeaseLayoutInnerComp";

const LoanLeaseClientPage = () => {
  return (
    <section className="min-h-screen h-auto bg-survey bg-no-repeat bg-top bg-cover">
      <div className="max-w-7xl mx-auto ~px-4/12 pb-4 ~/md:~pt-36/40 lg:pt-36">
        <Suspense fallback={<div>Loading survey...</div>}>
          <LoanLeaseLayout>
            <LoanLeaseLayoutInnerComp />
          </LoanLeaseLayout>
        </Suspense>
      </div>
    </section>
  );
};

export default LoanLeaseClientPage;
