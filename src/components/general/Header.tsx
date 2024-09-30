import { logoIcon } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeaderLangDropdown from "./HeaderLangDropdown";
import HeaderProfile from "./HeaderProfile";

const Header = () => {
  return (
    <>
      <header className="absolute top-0 left-0 right-0">
        <div className="max-w-7xl mx-auto ~px-4/12 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href={"/"}>
              <Image
                src={logoIcon}
                alt="VisiblePaths"
                width={120}
                height={120}
                className="w-28 h-28"
              />
            </Link>
            <span className="text-3xl text-white font-bold">
              Welcome to VisiblePaths
            </span>
          </div>
          <div className="flex items-center gap-5">
            <HeaderLangDropdown />
            <HeaderProfile />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
