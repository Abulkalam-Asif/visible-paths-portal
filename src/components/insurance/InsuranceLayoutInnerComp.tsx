"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import InsuranceFormScreen01 from "./InsuranceFormScreen01";
import InsuranceFormScreen02 from "./InsuranceFormScreen02";
import InsuranceFormScreen03 from "./InsuranceFormScreen03";

export default function InsuranceLayoutInnerComp() {
  const params = useSearchParams();
  const myParams = new URLSearchParams(params);
  const [currentPage, setCurrentPage] = useState(myParams.get("page") || "1");

  useEffect(() => {
    const page = myParams.get("page");
    if (page) {
      setCurrentPage(page);
      console.log("page", page);
    }
  }, [myParams.get("page")]);

  if (currentPage === "1" || currentPage === "") {
    return <InsuranceFormScreen01 />;
  }
  if (currentPage === "2") {
    return <InsuranceFormScreen02 />;
  }
  if (currentPage === "3") {
    return <InsuranceFormScreen03 />;
  }
}
