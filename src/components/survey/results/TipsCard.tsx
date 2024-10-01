import React from "react";
import Image from "next/image";
import { TipsBoxIcon } from "@/assets/images";

type Props = {
  title: string;
  description: string;
};

const TipsCard = (props: Props) => {
  return (
    <div className="flex flex-col gap-4 shadow-[0px_0px_14.57px_0px_rgba(0,0,0,0.2)]">
      <div className="flex justify-start p-2 gap-5 items-center">
        <h1 className="font-extrabold text-xl">{props.title}</h1>
        <Image src={TipsBoxIcon} alt="icon" width={25} height={25} />
      </div>
      <div className="text-lg font-bold p-2">{props.description}</div>
    </div>
  );
};

export default TipsCard;
