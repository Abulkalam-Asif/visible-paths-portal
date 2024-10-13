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
          className="~sm/lg:~w-32/56 h-auto lg:~lg:~w-36/72"
          onLoad={() => setIsLoaded(true)}
        />
        <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full text-white text-center font-bold text-xl leading-none sm:~sm/lg:~text-xl/4.5xl lg:~lg:~text-2xl/5xl lg:leading-normal">
          {text}
        </span>
      </Link>
    </>
  );
};

export default HomeLink;
