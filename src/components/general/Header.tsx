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
        <div className="~lg:~max-w-3xl/7xl mx-auto ~px-4/8 pt-2 pb-6 flex flex-col gap-3 lg:~lg:~pt-5/8 lg:~lg:~pb-3/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center lg:~lg:~gap-2/4">
              <Link href={"/"}>
                <Image
                  src={logoIcon}
                  alt="VisiblePaths"
                  width={120}
                  height={120}
                  className="~/lg:~w-14/20 ~/lg:~h-14/20 lg:~lg:~w-16/28 lg:~lg:~h-16/28"
                />
              </Link>
              <h1 className="hidden lg:block lg:~lg:~text-lg/4xl text-white font-bold px-[0.25em] py-[0.25em] bg-[#4D5C69]/5 border-[0.1px] border-white/30 bg-blur-[2px] rounded">
                {heading}
              </h1>
            </div>
            <div className="flex items-center lg:~lg:~gap-8/14">
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
