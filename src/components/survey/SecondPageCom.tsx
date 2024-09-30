import React from "react";
import secondPageRoadMap from "../../assets/survey/secondPageRoadMap.svg";
import Image from "next/image";
import Navigators from "./Navigators";
import { useRouter } from "next/navigation";

type Props = {};

const SecondPageCom = (props: Props) => {
  const router = useRouter();
  const handleNext = () => {
    router.push("/survey?section=0&question=0");
  };

  const handlePrev = () => {
    router.push("/survey");
  };

  return (
    <div className="min-h-screen h-auto bg-main bg-no-repeat bg-top bg-cover">
      <div className="max-w-7xl mx-auto ~px-4/12 pb-4 ~/md:~pt-32/40 lg:pt-28 flex flex-col gap-5">
        <h1 className="bg-customRed text-xl sm:text-3xl w-full max-w-3xl self-center text-center font-bold rounded-md text-white py-2">
          Unlock Your Financial Personality
        </h1>
        <div className="self-center w-full max-w-4xl">
          <Image
            src={secondPageRoadMap}
            alt="Second Page Road Map"
            width={900}
            height={900}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="flex justify-end w-full">
        <div>
          <Navigators handleNext={handleNext} handlePrevious={handlePrev}/>
        </div>
      </div>
    </div>
  );
};

export default SecondPageCom;
