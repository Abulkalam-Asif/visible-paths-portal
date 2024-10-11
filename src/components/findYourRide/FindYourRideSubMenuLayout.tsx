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
        className="w-max min-w-max absolute right-[calc(100%+.5rem)] bg-white backdrop-blur-md border-[1.5px] border-black/60 rounded-2xl text-black px-3 pt-2 pb-4 space-y-2 sm:w-auto">
        <div className="flex items-center gap-2">
          <span className="font-bold text-sm">{heading}</span>
          <Image
            src={icon}
            alt={heading}
            width={24}
            height={24}
            className="h-4 w-auto"
          />
        </div>
        {children}
      </motion.div>
    </>
  );
};

export default FindYourRideSubMenuLayout;
