"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type HomeLinkProps = {
  href: string;
  text: string;
  circleImg: StaticImageData;
  IconImg: StaticImageData;
};

const HomeLinkFinance = ({ href, text, circleImg,IconImg }: HomeLinkProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      <Link
        href={href}
        className={`relative ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <Image
          src={circleImg}
          alt={text}
          width={300}
          height={300}
          className="~sm:~w-32/56 h-auto"
          onLoad={() => setIsLoaded(true)}
        />
        <div className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <Image src={IconImg} alt={"icon"} width={50} height={50} />
          <span className="w-full text-white text-center font-bold ~sm:~text-xl/5xl whitespace-break-spaces">
            {text}
          </span>
        </div>
      </Link>
    </>
  );
};

export default HomeLinkFinance;
