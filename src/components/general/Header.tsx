import { logoIcon } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeaderLangDropdown from "./HeaderLangDropdown";
import HeaderProfile from "./HeaderProfile";

const Header = () => {
  return (
    <>
      <header className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/100 to-black/0">
        <div className="max-w-7xl mx-auto ~px-4/12 pt-2 pb-6 flex flex-col gap-1 lg:pt-4 lg:pb-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link href={"/"}>
                <Image
                  src={logoIcon}
                  alt="VisiblePaths"
                  width={120}
                  height={120}
                  className="~w-14/24 ~h-14/24"
                />
              </Link>
              <h1 className="hidden lg:block ~lg:~text-3xl/4xl text-white font-bold">
                Welcome to VisiblePaths
              </h1>
            </div>
            <div className="flex items-center gap-5">
              <HeaderLangDropdown />
              <HeaderProfile />
            </div>
          </div>
          <div className="lg:hidden">
            <h1 className="~/md:~text-2xl/3xl text-center text-white font-bold">
              Welcome to VisiblePaths
            </h1>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
