import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type FindYourRideSubMenuLayoutProps = {
  children: React.ReactNode;
  heading: string;
  icon: string;
};

const FindYourRideSubMenuLayout = ({
  children,
  heading,
  icon,
}: FindYourRideSubMenuLayoutProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.1 }}
        className="w-max min-w-max absolute right-[calc(100%+.5rem)] bg-white/80 backdrop-blur-md border border-customRed rounded-md text-black ~px-3/6 pt-2 pb-4 space-y-2 sm:w-auto">
        <div className="flex items-center gap-2">
          <span className="font-bold ~text-sm/lg">{heading}</span>
          <Image
            src={icon}
            alt={heading}
            width={24}
            height={24}
            className="~w-4/6 h-auto"
          />
        </div>
        {children}
      </motion.div>
    </>
  );
};

export default FindYourRideSubMenuLayout;
