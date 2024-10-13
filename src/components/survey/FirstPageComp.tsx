import React from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import firstPageCarImg from "../../assets/survey/firstPageCar.svg";

const FirstPageComp = () => {
  const router = useRouter();
  const params = useSearchParams();
  const myParams = new URLSearchParams(params);

  const startSurvey = () => {
    myParams.set("section", "0");
    router.push(`/survey?${myParams.toString()}`);
  };
  return (
    <section className="min-h-screen h-full bg-survey bg-no-repeat bg-bottom bg-cover">
      <div className="max-w-5xl lg:~lg:~max-w-3xl/7xl mx-auto sm:flex justify-between ~px-4/12 pb-4 ~/md:~pt-44/48 lg:~lg:~pt-48/72">
        <div className="w-full self-center max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
          <div className="backdrop-blur-financeForm text-black bg-[#F6F4F1] p-8 rounded-[36px] font-bold ">
            <h1 className="text-center text-xl lg:~lg:~text-2xl/4xl lg:~lg:~p-4/8">
              DISCOVER YOUR FINANCIAL FUNCTIONALITY
            </h1>
            <div className="shadow-[0px_0px_14.57px_0px_rgba(0,0,0,0.2)] text-xl lg:~lg:~text-2xl/4xl backdrop-blur-custom flex flex-col gap-8 m-2 text-center p-8">
              <p>Unlock your financial potential with personalized insights.</p>
              <p>This survey will take approximately 10 minutes to complete</p>
            </div>
            <div className="w-full flex justify-center">
              <button
                onClick={startSurvey}
                className="bg-customRed m-3 w-2/3 px-4 py-2 lg:~lg:~text-xl/2xl rounded-md text-white">
                START SURVEY
              </button>
            </div>
          </div>
        </div>
        <div className="hidden w-2/3 self-end sm:flex justify-center h-full items-end">
          <Image
            src={firstPageCarImg}
            alt="firstPage"
            width={300}
            height={50}
            className="w-full max-w-sm h-auto lg:~lg:~w-[350rem]/[650rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default FirstPageComp;
