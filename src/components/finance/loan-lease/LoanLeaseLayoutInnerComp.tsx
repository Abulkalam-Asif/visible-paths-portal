"use client";
import React, { useEffect, useState } from "react";
import FormCompScreen01 from "./FormCompScreen01";
import { useSearchParams } from "next/navigation";
import FormCompScreen02 from "./FormCompScreen02";
import FormCompScreen03 from "./FormCompScreen03";
import FormCompScreen04 from "./FormCompScreen04";
import FormCompSummaryScreen from "./FormCompSummaryScreen";

export default function LoanLeaseLayoutInnerComp() {
  const params = useSearchParams();
  const myParams = new URLSearchParams(params);
  const [currentPage, setCurrentPage] = useState(myParams.get("page") || "1");

  useEffect(() => {
    const page = myParams.get("page");
    if (page) {
      setCurrentPage(page);
    }
  }, [myParams.get("page")]);

  if (currentPage === "1" || currentPage === "") {
    return <FormCompScreen01 />;
  }

  if (currentPage === "2") {
    return <FormCompScreen02 />;
  }

  if (currentPage === "3") {
    return <FormCompScreen03 />;
  }
  if (currentPage === "4") {
    return <FormCompScreen04 />;
  }
  if (currentPage === "5") {
    return <FormCompSummaryScreen />;
  }
}
