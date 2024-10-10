"use client";
import React, { useEffect, useState } from "react";
import SummaryPageSingleComp from "./SummaryPageSingleComp";
import { useRouter, useSearchParams } from "next/navigation";

const FormCompSummaryScreen = () => {
  const router = useRouter();
  const params = useSearchParams();
  const myParams = new URLSearchParams(params);

  const [adjustedScreen1Data, setAdjustedScreen1Data] = useState({});
  const [adjustedScreen2Data, setAdjustedScreen2Data] = useState({});
  const [adjustedScreen3Data, setAdjustedScreen3Data] = useState({});
  const [adjustedScreen4Data, setAdjustedScreen4Data] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Code to run only on the client side
      const screen1Data = JSON.parse(localStorage.getItem("formDataScreen01") || "{}");
      const screen2Data = JSON.parse(localStorage.getItem("formDataScreen02") || "{}");
      const screen3Data = JSON.parse(localStorage.getItem("formDataScreen03") || "{}");
      const screen4Data = JSON.parse(localStorage.getItem("formDataScreen04") || "{}");

      setAdjustedScreen1Data({
        Name: `${screen1Data.firstName || ""} ${screen1Data.lastName || ""}`,
        Email: screen1Data.email || "",
        "Phone Number": screen1Data.phone || "",
      });

      setAdjustedScreen2Data({
        Address: `${screen2Data.address || ""} ${screen2Data.city || ""} ${screen2Data.state || ""} ${screen2Data.zip || ""}`,
        "Time at Residence": screen2Data.livingTime || "",
      });

      setAdjustedScreen3Data({
        Status: screen3Data.employeStatus || "",
        "Job Title": screen3Data.jobTitle || "",
        "Time At Employer": screen3Data.experience || "",
        "Monthly Income": screen3Data.montlyIncome || "",
      });

      setAdjustedScreen4Data({
        "Social Security Number": screen4Data.securityNumber || "",
        "Date of Birth": screen4Data.dob || "",
      });
    }
  }, []);

  const Next = () => {
    myParams.delete("page");
    router.push("/finance/loan-lease/results");
  };

  return (
    <div className="flex flex-col justify-between items-center gap-8">
      <SummaryPageSingleComp
        title={"Personal"}
        dataItems={Object.keys(adjustedScreen1Data).map(key => {
          const myKey = key as keyof typeof adjustedScreen1Data;
          return {
            label: myKey as string,
            value: adjustedScreen1Data[myKey] as string,
          };
        })}
      />
      <SummaryPageSingleComp
        title={"Address"}
        dataItems={Object.keys(adjustedScreen2Data).map(key => {
          const myKey = key as keyof typeof adjustedScreen2Data;
          return {
            label: myKey as string,
            value: adjustedScreen2Data[myKey] as string,
          };
        })}
      />
      <SummaryPageSingleComp
        title={"Employment"}
        dataItems={Object.keys(adjustedScreen3Data).map(key => {
          const myKey = key as keyof typeof adjustedScreen3Data;
          return {
            label: myKey as string,
            value: adjustedScreen3Data[myKey] as string,
          };
        })}
      />
      <SummaryPageSingleComp
        title={"Verification"}
        dataItems={Object.keys(adjustedScreen4Data).map(key => {
          const myKey = key as keyof typeof adjustedScreen4Data;
          return {
            label: myKey as string,
            value: adjustedScreen4Data[myKey] as string,
          };
        })}
      />
      <div className="flex w-full justify-center">
        <button
          onClick={Next}
          className="self-center bg-customRed text-white py-4 px-3 rounded-lg text-xl font-bold">
          Submit Application
        </button>
      </div>
    </div>
  );
};

export default FormCompSummaryScreen;
