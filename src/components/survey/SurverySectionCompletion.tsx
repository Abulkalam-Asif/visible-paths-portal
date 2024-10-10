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
    <div className="min-h-screen h-auto bg-main bg-no-repeat bg-top bg-cover -z-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="~px-4/12 pb-4 ~/md:~pt-32/40 lg:pt-32">
        <div className="relative border-white border-2 rounded-[36px] max-w-7xl mx-auto before:backdrop-blur-md bg-[#737475]/50 flex flex-col gap-5 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:inset-0 before:-z-10">
          <h1 className="text-xl sm:text-3xl w-full max-w-3xl self-center text-center font-bold rounded-md text-white py-4">
            Unlock Your Financial Personality
          </h1>
          <div className="self-center w-full max-w-4xl">
            <Image
              src={image}
              alt="Second Page Road Map"
              width={900}
              height={900}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex justify-end w-full">
            <div>
              <Navigators handleNext={handleNext} handlePrevious={handlePrev} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SurverySectionCompletion;
