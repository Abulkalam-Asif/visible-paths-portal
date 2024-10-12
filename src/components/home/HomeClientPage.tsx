import React from "react";
import HomeLink from "./HomeLink";
import { circleBlackImg, circleOrangeImg, circleRedImg } from "@/assets/images";

const HomeClientPage = () => {
  return (
    <>
      <section className="min-h-screen h-auto bg-main bg-no-repeat bg-top bg-cover">
        <div className="min-h-screen ~lg:~max-w-3xl/7xl mx-auto ~px-4/8 pb-4 flex items-center justify-center ~/md:~pt-36/40 lg:pt-0">
          <div className="w-full flex flex-col items-center gap-4 sm:~sm:~gap-4/20 sm:flex-row sm:justify-evenly">
            <HomeLink
              text="Explore Finance"
              href="/"
              circleImg={circleBlackImg}
            />
            <HomeLink text="Pick Ride" href="/" circleImg={circleOrangeImg} />
            <HomeLink text="Compare Rates" href="/" circleImg={circleRedImg} />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeClientPage;
