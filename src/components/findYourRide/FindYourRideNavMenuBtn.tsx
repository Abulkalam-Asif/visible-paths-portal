import Image, { StaticImageData } from "next/image";
import React from "react";

type FindYourRideNavMenuBtnProps = {
  type: string;
  icon: StaticImageData;
  text: string;
  onClick: (type: string) => void;
};

const FindYourRideNavMenuBtn = ({
  type,
  icon,
  text,
  onClick,
}: FindYourRideNavMenuBtnProps) => {
  return (
    <>
      <button
        onClick={() => onClick(type)}
        className="flex flex-col items-center ~text-xxs/xs font-medium gap-1">
        <span className="bg-white/30 border-[0.5px] border-white text-customRed px-1 py-2 rounded-lg shadow-[0px_0px_14.24px_0px_rgba(0,0,0,0.2)]">
          <Image
            src={icon}
            alt={text}
            width={24}
            height={24}
            className="~w-6/10 ~h-6/10"
          />
        </span>
        <span className="text-white">{text}</span>
      </button>
    </>
  );
};

export default FindYourRideNavMenuBtn;
