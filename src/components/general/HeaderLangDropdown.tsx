"use client";
import { usFlagIcon } from "@/assets/images";
import Image from "next/image";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const languages = {
  us: {
    language: "Eng (US)",
    flagIcon: usFlagIcon,
  },
  es: {
    language: "Español",
    flagIcon: usFlagIcon,
  },
  fr: {
    language: "Français",
    flagIcon: usFlagIcon,
  },
};

const HeaderLangDropdown = () => {
  const [currentLang, setCurrentLang] = useState<keyof typeof languages>("us");
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <div className="relative bg-[#4D5C69]/60 border-[.25px] rounded-lg border-white/50">
        <button
          className="text-white font-medium ~text-sm/lg flex items-center ~gap-2/4 ~px-2/4 py-2"
          onClick={() => {
            setIsExpanded(prev => !prev);
          }}>
          <Image
            src={languages[currentLang].flagIcon}
            alt="US Flag"
            width={32}
            height={32}
            className="w-6 h-6 lg:w-8 lg:h-8"
          />
          <span>{languages[currentLang].language}</span>
          <FaChevronDown
            className={`${
              isExpanded ? "transform rotate-180" : ""
            } transition-transform duration-300`}
          />
        </button>
        <div
          className={`absolute top-full bg-[#4D5C69]/60 translate-y-2 left-0 grid ${
            isExpanded
              ? "grid-rows-[1fr] py-2 border-[.25px] border-white/50"
              : "grid-rows-[0fr]"
          } transition-grid-rows transition-padding duration-300 bg-[#4D5C69]/60 rounded-lg`}>
          <div className="overflow-hidden flex flex-col">
            {Object.keys(languages).map((lang: string) => (
              <button
                key={lang}
                className="text-white font-medium ~text-sm/lg flex items-center ~gap-2/4 px-4 py-2"
                onClick={() => {
                  setCurrentLang(lang as keyof typeof languages);
                  setIsExpanded(false);
                }}>
                <Image
                  src={languages[lang as keyof typeof languages].flagIcon}
                  alt={`${
                    languages[lang as keyof typeof languages].language
                  } Flag`}
                  width={32}
                  height={32}
                  className="w-4 h-4 lg:w-8 lg:h-8"
                />
                <span>
                  {languages[lang as keyof typeof languages].language}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderLangDropdown;
