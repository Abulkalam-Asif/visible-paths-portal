import React from "react";
import Image from "next/image";
import Navigators from "./Navigators";
import { useRouter, useSearchParams } from "next/navigation";
import data from "@/../public/json/survey.json";
import { motion } from "framer-motion";

type Props = {
  image: string;
};

const SurverySectionCompletion = ({ image }: Props) => {
  const router = useRouter();
  const params = useSearchParams();
  const myParams = new URLSearchParams(params);
  const section = Number(myParams.get("section"));
  console.log("this is the section no", section);
  let question: number | null = null;
  if (section !== 0) {
    question = data[section - 1].questions.length - 1;
  } else {
    question = 0; // Or whatever logic makes sense for `section = 0`
  }

  const handleNext = () => {
    if (data.length === section + 1) {
      myParams.set("end", "true");
      myParams.delete("section");
      myParams.delete("question");
      router.push(`/survey?${myParams.toString()}`);
    } else {
      router.push(`/survey?section=${section}&question=0`);
    }
  };

  const handlePrev = () => {
    if (section === 0) {
      router.push(`/survey`);
    } else {
      router.push(`/survey?section=${section - 1}&question=${question}`);
    }
  };

  return (
    <div className="min-h-screen h-auto bg-main bg-no-repeat bg-top bg-cover">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pb-4 pt-40 lg:~lg:~pt-28/56">
        <div className="w-full mx-auto ~px-4/8 lg:~lg:~max-w-3xl/7xl">
          <div className="w-full rounded-[24px] ~px-4/8 bg-[#F6F4F1] flex flex-col gap-4 lg:~lg:~gap-4/8 py-4 lg:~lg:~py-5/10">
            <h1 className="text-xl lg:~lg:~text-xl/4xl self-center text-center font-bold rounded-md text-black">
              Unlock Your Financial Personality
            </h1>
            <div className="self-center w-full">  
              <Image
                src={image}
                alt="Second Page Road Map"
                width={900}
                height={900}
                className="w-full h-full object-contain p-4"
              />
            </div>
            <div className="flex justify-end w-full">
              <div>
                <Navigators
                  handleNext={handleNext}
                  handlePrevious={handlePrev}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SurverySectionCompletion;
