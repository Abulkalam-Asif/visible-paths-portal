import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import firstPageCarImg from "../../assets/survey/firstPageCar.svg";

const FinalPageComp = () => {
  const router = useRouter();

  const ResultRoute = () => {
    router.push("/survey/results");
  };

  return (
    <section className="min-h-screen h-full bg-survey bg-no-repeat bg-bottom bg-cover">
      <div className="max-w-5xl lg:~lg:~max-w-3xl/7xl h-full mx-auto md:flex justify-between ~px-4/12 pb-4 pt-40 lg:~lg:~pt-32/72">
        <div className="self-center w-full md:w-1/2 mx-auto md:~md:~pr-6/16">
          <div className="bg-[#F6F4F1] p-2 md:~lg:~p-4/8 rounded-[24px] font-bold text-black">
            <h1 className="text-center p-5 text-2xl bg-white lg:~lg:~text-sm/[1.75rem]">
              Great job completing the survey!
            </h1>
            <div className="text-xl lg:~lg:~text-base/3xl backdrop-blur-custom rounded-md m-2 text-center p-8">
              We&apos;ve unlocked your personalized financial profile. Ready to
              explore your path to financial confidence?
            </div>
            <div className="w-full flex justify-center">
              <button
                onClick={ResultRoute}
                className="bg-customRed lg:~lg:~text-2xl/3xl m-3 w-2/3 px-4 py-2 rounded-md text-white">
                LET&apos;S DIVE IN!
              </button>
            </div>
          </div>
        </div>
        <div className="hidden w-full self-end sm:flex justify-center h-full items-end md:~md:~pl-3/6 md:w-1/2">
          <Image
            src={firstPageCarImg}
            alt="firstPage"
            width={300}
            height={50}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default FinalPageComp;
