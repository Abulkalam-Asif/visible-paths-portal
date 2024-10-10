"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type HomeLinkProps = {
  href: string;
  text: string;
  circleImg: StaticImageData;
};

const HomeLink = ({ href, text, circleImg }: HomeLinkProps) => {
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
        <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full text-white text-center font-bold text-xl sm:~sm:~text-xl/4.5xl leading-none">
          {text}
        </span>
      </Link>
    </>
  );
};

export default HomeLink;
