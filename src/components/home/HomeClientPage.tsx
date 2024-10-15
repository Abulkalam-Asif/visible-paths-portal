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
        <div className="max-w-7xl w-4/5 mx-auto ~px-4/8 pb-12 ~/md:~pt-36/40 lg:~lg:~pt-32/64">
          <div className="w-full flex flex-col items-center gap-4 sm:~sm:~gap-4/20 sm:flex-row sm:justify-evenly">
            <HomeLink
              text="Explore Finance"
              href="/"
              circleImg={circleBlackImg}
            />
            <HomeLink
              text="Pick Ride"
              href="/find-your-ride"
              circleImg={circleOrangeImg}
            />
            <HomeLink text="Compare Rates" href="/" circleImg={circleRedImg} />
          </div>
          <div className="mt-4 lg:~lg:~mt-6/12">
            <Image
              src={homeCarImg}
              alt="Car"
              width={500}
              height={500}
              className="h-auto mx-auto sm:w-3/4"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeClientPage;
