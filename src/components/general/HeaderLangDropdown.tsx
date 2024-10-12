"use client";
import { esFlagIcon, frFlagIcon, usFlagIcon } from "@/assets/images";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const languages = {
  us: {
    language: "Eng (US)",
    flagIcon: usFlagIcon,
  },
  es: {
    language: "Español",
    flagIcon: esFlagIcon,
  },
  fr: {
    language: "Français",
    flagIcon: frFlagIcon,
  },
};

const HeaderLangDropdown = () => {
  const [currentLang, setCurrentLang] = useState<keyof typeof languages>("us");
  const [isExpanded, setIsExpanded] = useState(false);
  const dropownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (dropownRef.current && !dropownRef.current.contains(e.target as Node)) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        ref={dropownRef}
        className="relative bg-[#4D5C69]/60 border-[.25px] rounded-lg border-white/50">
        <button
          className="text-white font-semibold text-xs flex items-center ~gap-2/4 px-[0.75em] py-[0.5em] lg:~lg:~text-sm/2xl"
          onClick={() => {
            setIsExpanded(prev => !prev);
          }}>
          <Image
            src={languages[currentLang].flagIcon}
            alt="US Flag"
            width={32}
            height={32}
            className="w-6 h-auto lg:~lg:~w-7/12"
          />
          <span>{languages[currentLang].language}</span>
          <FaChevronDown
            className={`${
              isExpanded ? "transform rotate-180" : ""
            } transition-transform duration-300`}
          />
        </button>
        <div
          className={`absolute z-30 top-full bg-[#4D5C69]/60 translate-y-2 left-0 grid ${
            isExpanded
              ? "grid-rows-[1fr] py-1 border-[.25px] border-white/50"
              : "grid-rows-[0fr]"
          } transition-all duration-300 bg-[#4D5C69]/60 rounded-lg`}>
          <div className="overflow-hidden flex flex-col">
            {Object.keys(languages).map((lang: string) => (
              <button
                key={lang}
                className="text-white font-semibold text-xs flex items-center ~gap-2/4 px-[0.75em] py-[0.5em] lg:~lg:~text-sm/2xl"
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
                  className="w-5 h-auto lg:~lg:~w-6/10"
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
