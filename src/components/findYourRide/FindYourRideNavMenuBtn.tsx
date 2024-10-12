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
        className="flex flex-col items-center text-xxxs font-medium gap-1 lg:~lg:~text-xxxs/xs">
        <span className="bg-white border-[0.5px] border-[#C7C7C7] text-black ~px-1/3 ~py-2/4 rounded-lg shadow-[0px_0px_14.24px_0px_rgba(0,0,0,0.2)]">
          <Image
            src={icon}
            alt={text}
            width={24}
            height={24}
            className="~/lg:~w-6/8 ~/lg:~h-6/8 lg:~lg:~w-5/10 lg:~lg:~h-5/10"
          />
        </span>
        <span className="text-black font-semibold">{text}</span>
      </button>
    </>
  );
};

export default FindYourRideNavMenuBtn;
