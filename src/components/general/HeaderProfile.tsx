"use client";
import Image from "next/image";
import React from "react";

const HeaderProfile = () => {
  return (
    <>
      <div className="bg-[#4D5C69]/60 border-[.25px] rounded-lg border-white/50">
        <button className="text-white font-bold ~text-sm/lg flex items-center ~gap-2/4 ~px-2/4 py-2">
          <div className="w-6 h-6 rounded-full overflow-hidden lg:sw-8 lg:sh-8">
            <Image
              src="/temp/profile.png"
              alt="User profile"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="ml-2">JP</span>
        </button>
      </div>
    </>
  );
};

export default HeaderProfile;
