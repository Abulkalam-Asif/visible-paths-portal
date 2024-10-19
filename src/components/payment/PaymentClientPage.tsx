"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import PaymentScreen1 from "./PaymentScreen1";
import PaymentScreen2 from "./PaymentScreen2";

const PaymentClientPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentScreen = searchParams.get("screen") || "1";
  return (
    <>
      <section className="min-h-screen h-auto bg-main bg-no-repeat bg-top bg-cover">
        {currentScreen === "1" && <PaymentScreen1 />}
        {currentScreen === "2" && <PaymentScreen2 />}
      </section>
    </>
  );
};

export default PaymentClientPage;
