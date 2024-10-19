import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaCheckCircle, FaMinusCircle } from "react-icons/fa";


const PaymentScreen3 = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.2 }}
        className="max-w-5xl mx-auto ~px-4/8 pb-12 flex flex-col items-center ~gap-4/8 ~/md:~pt-36/40 lg:~lg:~pt-32/48">
        <h2 className="text-center ~/sm:~text-sm/2xl text-white font-bold bg-customRed w-fit px-4 py-2 rounded mx-auto md:~md:~text-2xl/4xl">
          VisiblePaths Leads You to a Perfect Ride!
        </h2>
        <div className="w-full bg-customCream rounded-3xl px-4 py-6 font-bold flex flex-col items-center text-center gap-6 md:~md:~px-4/8 md:py-8 md:~md:~gap-6/12">
        
        </div>
        <div className="flex flex-col ~gap-1/3">
          <Link
            href={`/payment?screen=3`}
            className="~/sm:~text-xs/base text-white font-bold bg-customRed w-fit px-4 py-2 rounded mx-auto md:text-base md:~md:~px-6/10 md:py-2">
            BEGIN MY 7-DAY FREE RIDE NOW
          </Link>
          <Link
            href={`/payment?screen=3`}
            className="~/sm:~text-xs/base text-customRed font-bold w-fit px-4 py-2 rounded mx-auto md:text-base md:~md:~px-6/10 md:py-2">
            NOT RIGHT NOW
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default PaymentScreen3;
