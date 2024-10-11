import { logoIcon } from "@/assets/images";
import Image from "next/image";
import React from "react";

type FindYourRideChatMessageProps = {
  message: string;
  sender: string;
};

const FindYourRideChatMessage = ({
  message,
  sender,
}: FindYourRideChatMessageProps) => {
  return (
    <>
      <div className="text-xs">
        {sender === "bot" ? (
          <div className="flex items-end gap-2">
            <span>
              <Image
                src={logoIcon}
                alt="logo"
                width={100}
                height={100}
                className="w-6 h-auto"
              />
            </span>
            <span className="bg-transparent border border-[#C7C7C7] bg-white text-black px-4 py-1.5 rounded-sm w-4/5">
              {message}
            </span>
          </div>
        ) : (
          <div className="bg-customRed text-white px-4 py-1.5 rounded-xl w-4/5 ml-auto">
            {message}
          </div>
        )}
      </div>
    </>
  );
};

export default FindYourRideChatMessage;
