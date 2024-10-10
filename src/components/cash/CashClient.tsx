"use client";
import React, { useState } from "react";
import CashLeftSecCal from "./CashLeftSecCal";
import CashRightSecResult from "./CashRightSecResult";

const CashClient = () => {
  const [carPrice, setCarPrice] = useState(0);
  return (
    <section className="min-h-screen h-auto bg-survey bg-no-repeat bg-top bg-cover">
      <div className="max-w-5xl mx-auto ~px-4/12 pb-4 ~/md:~pt-36/40 lg:pt-36">
        <div className="~/sm:~px-20/40">
          <h1 className="bg-customRed rounded-lg text-white ~/sm:~text-md/3xl text-center py-4 font-extrabold">
            CASH - TOTAL PAYMENT CALCULATOR
          </h1>
        </div>
        <div className="~/sm:~mt-5/10 w-full flex flex-col sm:flex-row gap-5">
          <CashLeftSecCal carValue={carPrice} setCarValue={setCarPrice} />
          <div className="flex justify-center items-center w-full">
            <CashRightSecResult carValue={carPrice} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CashClient;
