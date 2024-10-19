import { paymentCarImg } from "@/assets/images";
import Image from "next/image";
import React from "react";

const PaymentScreen2 = () => {
  return (
    <>
      <div className="max-w-8xl mx-auto ~px-4/8 pb-12 ~/md:~pt-36/40 lg:~lg:~pt-32/48">
        <h2 className="text-center ~/sm:~text-sm/2xl text-white font-bold bg-customRed w-fit px-4 py-2 rounded mx-auto md:~md:~text-2xl/4xl">
          VisiblePaths Leads You to a Perfect Ride!
        </h2>
        <div className="w-full bg-customCream rounded-3xl px-4 py-6 font-bold flex flex-col items-center text-center gap-6 mt-4 md:~md:~mt-8/16 md:~md:~px-4/8 md:~md:~py-8/16 md:~md:~gap-6/12">
          <table>
            <thead>
              <tr>
                <td>Features</td>
                <td>Base model</td>
                <td>Fully loaded</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </>
  );
};

export default PaymentScreen2;
