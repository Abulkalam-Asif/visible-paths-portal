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
        className="text-white absolute z-[12] bottom-[calc(100%+.5rem)] overflow-hidden right-4 w-4/5 max-w-lg border border-white rounded-xl">
        <div className="text-white bg-customRed px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={"/temp/profile.png"}
              alt="person"
              width={100}
              height={100}
              className="w-8 h-8 rounded-full"
            />
            <div className="flex flex-col items-start">
              <span className="text-lg font-bold">Let's Chat!</span>
              <span className="text-sm">Online</span>
            </div>
          </div>
          <div>
            <button onClick={closeChat}>
              <FaX className="w-5 h-auto" />
            </button>
          </div>
        </div>
        <div className="flex flex-col bg-black/20 backdrop-blur-sm px-3">
          <div
            ref={messagesDivRef}
            className="custom-scrollbar flex flex-col gap-4 py-5 max-h-[50vh] overflow-y-auto">
            {messages.map(({ message, sender }, index) => (
              <FindYourRideChatMessage
                key={index}
                message={message}
                sender={sender}
              />
            ))}
          </div>
          <div className="flex gap-2 my-4 rounded-full border border-white px-4">
            <input
              type="text"
              placeholder="Type a reply..."
              className="bg-transparent outline-none placeholder:text-white py-2.5 text-sm w-full"
            />
            <button>
              <MdOutlineGif className="w-5 h-auto border rounded" />
            </button>
            <button>
              <CiFaceSmile className="w-5 h-auto" />
            </button>
            <button>
              <IoIosAttach className="w-5 h-auto" />
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default FindYourRideChat;
