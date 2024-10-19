import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaCheckCircle, FaMinusCircle } from "react-icons/fa";

const screen2Data = [
  {
    feature: "Adds",
    base_model: true,
    fully_loaded: true,
  },
  {
    feature: "Car Selection",
    base_model: true,
    fully_loaded: true,
  },
  {
    feature: "Simulations",
    base_model: false,
    fully_loaded: true,
  },
  {
    feature: "Credit Score Impact",
    base_model: false,
    fully_loaded: true,
  },
  {
    feature: "Amortization",
    base_model: false,
    fully_loaded: true,
  },
  {
    feature: "Impact on Insurance",
    base_model: false,
    fully_loaded: true,
  },
  {
    feature: "Rewards",
    base_model: false,
    fully_loaded: true,
  },
];

const PaymentScreen2 = () => {
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
          <table className="w-full">
            <thead className="~text-sm/2xl">
              <tr className="bg-customRed text-white">
                <td align="left" className="~px-2/4 py-2 lg:py-3">
                  Features
                </td>
                <td className="~px-2/4 py-2 lg:py-3">Base model</td>
                <td className="~px-2/4 py-2 lg:py-3">Fully loaded</td>
              </tr>
            </thead>
            <tbody className="~text-sm/2xl">
              {screen2Data.map((data, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "" : "bg-white border border-[##C7C7C7]"
                  } py-2`}>
                  <td
                    align="left"
                    className={`~px-2/6 ${
                      index % 2 === 0 ? "~py-2/5" : "~py-1/2"
                    }`}>
                    {data.feature}
                  </td>
                  <td
                    align="center"
                    className={`~px-2/6 ${
                      index % 2 === 0 ? "~py-2/5" : "~py-1/2"
                    }`}>
                    {data.base_model ? (
                      <FaCheckCircle className="text-customRed ~w-4/7 h-auto" />
                    ) : (
                      <FaMinusCircle className="~w-4/7 h-auto" />
                    )}
                  </td>
                  <td
                    align="center"
                    className={`~px-2/6 ${
                      index % 2 === 0 ? "~py-2/5" : "~py-1/2"
                    }`}>
                    {data.fully_loaded ? (
                      <FaCheckCircle className="text-customRed ~w-4/7 h-auto" />
                    ) : (
                      <FaMinusCircle className="~w-4/7 h-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col ~gap-1/3">
          <Link
            href={`/payment?screen=3`}
            className="~/sm:~text-xs/base text-white font-bold bg-customRed w-fit px-4 py-2 rounded mx-auto md:text-base md:~md:~px-6/10 md:py-2">
            BEGIN MY 7-DAY FREE RIDE NOW
          </Link>
          <Link
            href={`/payment?screen=1`}
            className="~/sm:~text-xs/base text-customRed font-bold w-fit px-4 py-2 rounded mx-auto md:text-base md:~md:~px-6/10 md:py-2">
            NOT RIGHT NOW
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default PaymentScreen2;
