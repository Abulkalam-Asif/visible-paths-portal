"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import StepNodeComp from "../finance/loan-lease/StepNodeComp";
import LineComp from "../finance/loan-lease/LineComp";
import { insuranceFirstPageIcon } from "@/assets/images";
import Image from "next/image";

type Props = {
  children: React.ReactNode;
};

const stepJson = [
  {
    node_number: 1,
    node_title: "Personal Info",
  },
  {
    node_number: 2,
    node_title: "ID/Vehicle Details",
  },
  {
    node_number: 3,
    node_title: "Insurance",
  },
];

const InsuranceLayoutPage = ({ children }: Props) => {
  const params = useSearchParams();
  const myParams = new URLSearchParams(params);

  const [currentPage, setCurrentPage] = React.useState(
    Number(params.get("page")) || 1,
  );

  useEffect(() => {
    setCurrentPage(Number(params.get("page")) || 1);
  }, [myParams.get("page")]);

  const titleArray = [
    "",
    "Let's Get Started, JP!",
    "Give us Your Vehicle Details!",
    "Now, JP let’s Get Some Details on Your Commute.",
  ];

  return (
    <div className="md:flex justify-between">
      <div className="w-full self-center max-w-md pb-6 sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
        <div className="bg-[rgba(246,244,241,1)] pb-2 pt-7 mb-10 rounded-[40px] ~/lg:~px-4/8">
          <div className="flex flex-col justify-between items-center gap-8">
            <div className="w-full flex justify-center items-center">
              <h1 className="text-black text-center font-bold ~/sm:~text-xl/3xl lg:~lg:~text-3xl/4xl">
                {titleArray[currentPage]}
              </h1>
            </div>
            <div className="flex justify-center w-full items-center ">
              {stepJson.map((step, index) => (
                <div key={index} className="flex items-center max-w-full">
                  <StepNodeComp
                    nodeNumber={step.node_number}
                    title={step.node_title}
                    isHighlighted={
                      currentPage > step.node_number ||
                      currentPage === step.node_number
                    }
                  />
                  {index !== stepJson.length - 1 && (
                    <LineComp
                      width="~/lg:~w-4/32 lg:~lg:~w-32/44"
                      isHighlighted={
                        currentPage !== 1 && currentPage > step.node_number
                      }
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="lg:~lg:~mt-10/20 mt-10">{children}</div>
        </div>
      </div>
      <div className="hidden w-full self-end sm:flex h-full">
        <Image
          src={insuranceFirstPageIcon}
          alt="firstPage"
          width={150}
          height={50}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default InsuranceLayoutPage;
