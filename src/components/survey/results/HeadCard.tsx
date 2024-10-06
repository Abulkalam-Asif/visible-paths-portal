import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  title: string;
  description: string;
  buttonText: string;
};

const HeadCard = (props: Props) => {
  return (
    <div className="p-2 w-full flex justify-center">
      <div className="bg-white p-3 rounded-lg opacity-85 flex flex-col items-center gap-8 sm:flex-row sm:w-3/4 sm:justify-center">
        <div>
          <Image src={props.image} alt="image" width={200} height={200} className="rounded-full"/>
        </div>
        <div className="flex flex-col items-center justify-between gap-1 font-extrabold sm:items-start sm:gap-3">
          <h1 className="text-customRed text-xl sm:text-5xl">{props.title}</h1>
          <p className="text-center mb-3 sm:text-xl">{props.description}</p>
          <button className="bg-customRed sm:text-xl px-4 py-2 rounded-lg text-white">{props.buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default HeadCard;
