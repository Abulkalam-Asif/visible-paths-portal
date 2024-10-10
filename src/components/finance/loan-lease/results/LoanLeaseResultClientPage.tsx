import React from "react";
import LoanLeaseResultInnerComp from "./LoanLeaseResultInnerComp";

const LoanLeaseResultClientPage = () => {
  return (
    <div>
      <section className="min-h-screen h-auto bg-survey bg-no-repeat bg-top bg-cover">
        <div className="max-w-5xl mx-auto ~px-4/12 pb-4 ~/md:~pt-36/40 lg:pt-36">
          <LoanLeaseResultInnerComp />
        </div>
      </section>
    </div>
  );
};

export default LoanLeaseResultClientPage;
