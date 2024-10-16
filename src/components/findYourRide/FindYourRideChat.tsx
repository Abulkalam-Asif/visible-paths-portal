import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import FindYourRideChatMessage from "./FindYourRideChatMessage";
import Image from "next/image";
import { FaX } from "react-icons/fa6";
import { MdOutlineGif } from "react-icons/md";
import { CiFaceSmile } from "react-icons/ci";
import { IoIosAttach } from "react-icons/io";

const messages = [
  {
    message: "Hello, I am your virtual assistant. How can I help you today?",
    sender: "bot",
  },
  {
    message: "I am looking for a ride",
    sender: "user",
  },
  {
    message: "Sure, where are you located?",
    sender: "bot",
  },
  {
    message: "I am in Lagos Island",
    sender: "user",
  },
  {
    message: "Hello, I am your virtual assistant. How can I help you today?",
    sender: "bot",
  },
  {
    message: "I am looking for a ride",
    sender: "user",
  },
  {
    message: "Sure, where are you located?",
    sender: "bot",
  },
  {
    message: "I am in Lagos Island",
    sender: "user",
  },
  {
    message: "Hello, I am your virtual assistant. How can I help you today?",
    sender: "bot",
  },
  {
    message: "I am looking for a ride",
    sender: "user",
  },
  {
    message: "Sure, where are you located?",
    sender: "bot",
  },
  {
    message: "I am in Lagos Island",
    sender: "user",
  },
];

type FindYourRideChatProps = {
  closeChat: () => void;
};

const FindYourRideChat = ({ closeChat }: FindYourRideChatProps) => {
  const messagesDivRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (messagesDivRef.current) {
      messagesDivRef.current.scrollTop = messagesDivRef.current.scrollHeight;
    }
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.1 }}
        className="text-white absolute z-[12] bottom-[calc(100%+.5rem)] overflow-hidden right-4 w-full ~lg:~max-w-[20rem]/[30rem] border border-white rounded-xl">
        <div className="bg-customRed px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={"/temp/profile.png"}
              alt="person"
              width={100}
              height={100}
              className="w-6 h-6 rounded-full lg:~lg:~w-6/10 lg:~lg:~h-6/10"
            />
            <div className="flex flex-col items-start">
              <span className="text-sm font-bold lg:~lg:~text-sm/lg">
                Let&apos;s Chat!
              </span>
              <span className="text-xs lg:~lg:~text-xs/base">Online</span>
            </div>
          </div>
          <div>
            <button onClick={closeChat}>
              <FaX className="w-5 h-auto" />
            </button>
          </div>
        </div>
        <div className="flex flex-col bg-[#F6F4F1] px-3">
          <div
            ref={messagesDivRef}
            className="custom-scrollbar flex flex-col ~gap-3/5 py-3 max-h-[50vh] overflow-y-auto">
            {messages.map(({ message, sender }, index) => (
              <FindYourRideChatMessage
                key={index}
                message={message}
                sender={sender}
              />
            ))}
          </div>
          <div className="flex gap-2 mb-4 mt-2 rounded-full border border-[#C7C7C7] bg-white text-black px-4">
            <input
              type="text"
              placeholder="Type a reply..."
              className="bg-transparent outline-none placeholder:text-black py-2.5 text-xs w-full lg:~lg:~text-xs/lg"
            />
            <button>
              <MdOutlineGif className="w-5 h-auto border border-black rounded lg:~lg:~w-5/7" />
            </button>
            <button>
              <CiFaceSmile className="w-5 h-auto lg:~lg:~w-5/7" />
            </button>
            <button>
              <IoIosAttach className="w-5 h-auto lg:~lg:~w-5/7" />
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default FindYourRideChat;
