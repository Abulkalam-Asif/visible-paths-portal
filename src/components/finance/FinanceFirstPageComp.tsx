import React from "react";
import HomeLinkFinance from "./HomeLinkFinance";
import {
  circleBlackImg,
  circleOrangeImg,
  circleRedImg,
  financeFirstPageCash,
  financeFirstPageIcon,
  financeFirstPageLease,
} from "@/assets/images";

const FinanceFirstPageComp = () => {
  return (
    <div>
      <section className="min-h-screen h-auto bg-main bg-no-repeat bg-top bg-cover">
        <div className="max-w-7xl mx-auto ~px-4/12 pb-4 ~/md:~pt-36/40 lg:pt-36">
          <div className="w-full flex flex-col items-center ~sm:~gap-4/20 sm:flex-row sm:justify-evenly">
            <HomeLinkFinance
              text="Loan"
              href="/"
              circleImg={circleBlackImg}
              IconImg={financeFirstPageIcon}
            />
            <HomeLinkFinance
              text="Cash"
              href="/"
              circleImg={circleRedImg}
              IconImg={financeFirstPageCash}
            />
          </div>
          <div className="flex w-full justify-center mt-4">
            <HomeLinkFinance
              text="Lease"
              href="/"
              circleImg={circleOrangeImg}
              IconImg={financeFirstPageLease}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinanceFirstPageComp;
