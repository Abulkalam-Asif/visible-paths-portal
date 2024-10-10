import React from "react";
import HomeLink from "./HomeLink";
import {
  circleBlackImg,
  circleOrangeImg,
  circleRedImg,
  homeCarImg,
} from "@/assets/images";
import Image from "next/image";

const HomeClientPage = () => {
  return (
    <>
      <section className="min-h-screen h-auto bg-main bg-no-repeat bg-top bg-cover">
        <div className="max-w-7xl mx-auto ~px-4/12 pb-4 ~/md:~pt-36/40 lg:pt-36">
          <div className="flex flex-col items-center gap-4 sm:~sm:~gap-4/20 sm:flex-row sm:justify-center">
            <HomeLink
              text="Explore Finance"
              href="/"
              circleImg={circleBlackImg}
            />
            <HomeLink text="Pick Ride" href="/" circleImg={circleOrangeImg} />
            <HomeLink text="Compare Rates" href="/" circleImg={circleRedImg} />
          </div>
          <div className="w-3/5 mx-auto mt-6">
            <Image
              src={homeCarImg}
              alt="Car"
              width={1200}
              height={1200}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeClientPage;
