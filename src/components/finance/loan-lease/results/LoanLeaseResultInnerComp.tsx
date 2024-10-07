import { LoanLeaseResult } from "@/assets/images";
import Image from "next/image";
import React from "react";

const LoanLeaseResultInnerComp = () => {
  return (
    <div className="backdrop-blur-financeForm bg-[#737475]/30 border-white border-2 p-5 rounded-[36px]">
      <div className="flex flex-col justify-between items-center ~/sm:~gap-5/8">
        <h1 className="text-white text-center font-extrabold ~/sm:~text-xl/4xl">
          Nice Job! Your Information is Successfully Submitted
        </h1>
        <Image
          className="self-center ~/sm:~w-40/96"
          src={LoanLeaseResult}
          alt="check image"
          width={200}
          height={200}
        />
        <div className="flex w-full justify-center">
          <button className="self-center bg-customRed font-bold text-white py-4 ~/sm:~px-5/10 rounded-lg ~/sm:~text-md/xl">
            Check Pre Qualification Status
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoanLeaseResultInnerComp;
