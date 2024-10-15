"use client";
import React, { useState } from "react";
import FindYourRideHeaderMob from "./FindYourRideHeaderMob";
import FindYourRideNavDes from "./FindYourRideNavDes";
import FindYourRideCarsDisplay from "./FindYourRideCarsDisplay";
import Image from "next/image";
import { chatbotIcon } from "@/assets/images";
import FindYourRideChat from "./FindYourRideChat";

const FindYourRideClientPage = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const closeChat = () => {
    setIsChatOpen(false);
  };
  const toggleChat = () => {
    setIsChatOpen(prev => !prev);
  };

  return (
    <>
      <section className="min-h-screen h-auto bg-survey bg-no-repeat bg-center bg-cover">
        <div className="max-w-8xl mx-auto pb-12 ~px-4/12 ~/md:~pt-32/40 lg:~lg:~pt-28/44">
          <FindYourRideHeaderMob />
          <FindYourRideNavDes />
          <FindYourRideCarsDisplay />
        </div>
        <div className="w-full flex justify-end max-w-8xl mx-auto ~px-4/12 fixed z-[11] ~bottom-4/6 left-1/2 -translate-x-1/2">
          <button
            onClick={toggleChat}
            className="bg-customRed p-3 rounded-full">
            <Image
              src={chatbotIcon}
              alt="chatbot"
              width={80}
              height={80}
              className="w-6 h-auto lg:~lg:~w-7/14 lg:~lg:~h-7/14"
            />
          </button>
          {isChatOpen && <FindYourRideChat closeChat={closeChat} />}
        </div>
      </section>
    </>
  );
};

export default FindYourRideClientPage;
