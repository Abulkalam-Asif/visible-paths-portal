"use client";
import React, { useState } from "react";
import FindYourRideHeaderMob from "./FindYourRideHeaderMob";
import FindYourRideNavDes from "./FindYourRideNavDes";
import FindYourRideCarsDisplay from "./FindYourRideCarsDisplay";
import { FaArrowLeft } from "react-icons/fa";
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
      <section className="min-h-screen h-auto bg-survey bg-no-repeat bg-top bg-cover">
        <div className="max-w-5xl mx-auto ~px-4/12 pb-4 ~/md:~pt-28/36 lg:~pt-24/32">
          <FindYourRideHeaderMob />
          <FindYourRideNavDes />
          <FindYourRideCarsDisplay />
        </div>
        <div className="w-full max-w-5xl mx-auto ~px-4/12 fixed z-[11] ~bottom-4/6 left-1/2 -translate-x-1/2 flex items-center justify-between">
          <button className="bg-white p-3 rounded-xl">
            <FaArrowLeft className="text-customRed ~lg:~w-6/8 h-auto" />
          </button>
          <button
            onClick={toggleChat}
            className="bg-customRed p-3 rounded-full">
            <Image
              src={chatbotIcon}
              alt="chatbot"
              width={80}
              height={80}
              className="~lg:~w-6/8 h-auto"
            />
          </button>
          {isChatOpen && <FindYourRideChat closeChat={closeChat} />}
        </div>
      </section>
    </>
  );
};

export default FindYourRideClientPage;
