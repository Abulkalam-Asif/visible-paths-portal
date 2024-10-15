"use client";
import { logoIcon } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeaderLangDropdown from "./HeaderLangDropdown";
import HeaderProfile from "./HeaderProfile";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  let heading = "";
  if (pathname === "/") {
    heading = "Welcome to VisiblePaths";
  } else if (pathname.startsWith("/find-your-ride")) {
    heading = "Find Your Perfect Ride";
  } else {
    heading = "Welcome to VisiblePaths";
  }

  return (
    <>
      <header className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/100 to-black/0 lg:from-black/0">
        <div className="max-w-8xl mx-auto ~px-4/8 pt-3 pb-6 flex flex-col gap-2 lg:~lg:~pt-5/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center lg:~lg:~gap-2/4">
              <Link href={"/"}>
                <Image
                  src={logoIcon}
                  alt="VisiblePaths"
                  width={120}
                  height={120}
                  priority={true}
                  className="~/lg:~w-14/20 ~/lg:~h-14/20 lg:~lg:~w-20/32 lg:~lg:~h-20/32"
                />
              </Link>
              <h1 className="hidden lg:block text-white font-bold px-[0.25em] py-[0.25em] bg-[#4D5C69]/5 border-[0.1px] border-white/30 bg-blur-[2px] rounded lg:~lg:~text-lg/4xl">
                {heading}
              </h1>
            </div>
            <div className="flex items-center gap-4 lg:~lg:~gap-8/14">
              <HeaderLangDropdown />
              <HeaderProfile />
            </div>
          </div>
          <div className="lg:hidden">
            <h1 className="w-fit mx-auto px-4 py-0.5 bg-[#4D5C69]/5 border-[0.1px] border-white/30 bg-blur-[2px] rounded ~/md:~text-2xl/3xl text-center text-white font-bold">
              {heading}
            </h1>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
