"use client";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import PaymentScreen1 from "./PaymentScreen1";
import PaymentScreen2 from "./PaymentScreen2";
import PaymentScreen3 from "./PaymentScreen3";

const PaymentClientPage = () => {
  const searchParams = useSearchParams();
  const currentScreen = searchParams.get("screen") || "1";

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="min-h-screen h-auto bg-main bg-no-repeat bg-top bg-cover">
        {currentScreen === "1" && <PaymentScreen1 />}
        {currentScreen === "2" && <PaymentScreen2 />}
        {currentScreen === "3" && <PaymentScreen3 />}
      </section>
    </Suspense>
  );
};

export default PaymentClientPage;
