import { paymentCarImg } from "@/assets/images";
import Image from "next/image";
import React from "react";

const PaymentClientPage = () => {
  return (
    <>
      <section className="min-h-screen h-auto bg-main bg-no-repeat bg-top bg-cover">
        <div className="max-w-8xl mx-auto ~px-4/8 pb-12 ~/md:~pt-36/40 lg:~lg:~pt-32/48">
          <h2 className="~/sm:~text-xl/2xl text-white font-bold bg-customRed w-fit px-6 py-2 rounded mx-auto md:~md:~text-2xl/4xl">
            Hello From VisiblePaths!
          </h2>
          <div className="flex flex-col items-center ~/sm:~gap-4/8 mt-4 md:flex-row md:~md:~mt-8/16">
            <div className="w-full bg-customCream rounded-3xl px-4 py-6 font-bold flex flex-col items-center text-center gap-6 md:~md:~mb-12/24 md:w-[45%] md:~md:~px-4/8 md:~md:~py-8/16 md:~md:~gap-6/12">
              <h3 className="uppercase ~/sm:~text-base/xl bg-white border border-[#C7C7C7] rounded px-4 py-2 text-customRed md:~md:~text-xl/3xl">
                Fully Loaded
              </h3>
              <h4 className="~/sm:~text-xl/3xl max-w-[25ch] md:~md:~text-2xl/4xl">
                No ads, Simulations and So Much More!
              </h4>
              <button className="~/sm:~text-sm/lg text-white font-bold bg-customRed w-fit px-4 py-2 rounded mx-auto md:~md:~text-base/2xl md:~md:~px-6/10 md:~md:~py-2/4 md:rounded-xl">
                BEGIN MY 7-DAY FREE RIDE NOW
              </button>
            </div>
            <div className="w-4/5 md:self-end md:w-[55%]">
              <Image
                src={paymentCarImg}
                alt="Car"
                width={800}
                height={800}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentClientPage;
