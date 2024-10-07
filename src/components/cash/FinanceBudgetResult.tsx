'use client';
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { monthlyPaymentBg } from "@/assets/images";

type FinanceBudgetResultProps = {
  carValue: number;
};

const FinanceBudgetResult = ({ carValue }: FinanceBudgetResultProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.2 }}
        className="w-full flex-1 h-full rounded-ss-[3rem_2rem] rounded-se-[3rem_2rem] rounded-es-[3rem_2rem] rounded-ee-[3rem_2rem] bg-[#C72B3F] px-4 py-4 flex flex-col justify-evenly gap-6 sm:px-6 sm:py-6 md:py-8 lg:gap-6">
        <div className="relative text-white w-full h-20 shadow-monthly-payment translate-x-2 mb-4 lg:h-28 xl:h-32">
          <Image
            src={monthlyPaymentBg}
            alt="Monthly Payment"
            fill={true}
            className="w-full h-full object-cover"
          />
          <div className="absolute flex items-center gap-4 justify-between z-[7] w-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 pl-6 pr-4 py-2 lg:pl-10 lg:pr-6">
            <p className="text-lg font-semibold max-w-[13ch] xs:text-xl lg:text-2xl xl:text-3xl">
              Total Monthly Loan Payment
            </p>
            <p className="text-xl font-bold xs:text-1.5xl lg:text-3xl xl:text-5xl">
              {carValue}
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default FinanceBudgetResult;
