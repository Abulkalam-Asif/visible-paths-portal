"use client";
import React from "react";
import { FaUser } from "react-icons/fa";

const HeaderProfile = () => {
  return (
    <>
      <div>
        <button className="flex items-center justify-center">
          <FaUser size={24} className="w-8 h-auto text-white lg:~lg:~w-8/14" />
        </button>
      </div>
    </>
  );
};

export default HeaderProfile;
