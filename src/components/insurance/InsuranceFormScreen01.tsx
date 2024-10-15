"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navigators from "@/components/survey/Navigators";
import { useRouter, useSearchParams } from "next/navigation";
import FormInputBox from "../finance/loan-lease/FormInputBox";

type FormDataType = {
  firstName: string;
  dob: string | null;
};

const defaultFormData: FormDataType = {
  firstName: "",
  dob: null,
};

const InsuranceFormScreen01 = () => {
  const [formData, setFormData] = useState<FormDataType>(defaultFormData);
  const router = useRouter();
  const params = useSearchParams();
  const myParams = new URLSearchParams(params);
  const [currentPage, setCurrentPage] = useState(params.get("page") || "");

  const formDataInputHandler = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const data = localStorage.getItem("insuranceformDataScreen01");
    if (data) {
      const parsedData = JSON.parse(data);
      if (data) {
        setFormData(parsedData);
      } else {
        setFormData(defaultFormData);
      }
    }
  }, []);

  const saveFormDataToLocalStorage = () => {
    localStorage.setItem("insuranceformDataScreen01", JSON.stringify(formData));
  };

  const onNext = () => {
    saveFormDataToLocalStorage();
    setCurrentPage(() => {
      const newPage = 2;
      myParams.set("page", newPage.toString());
      router.push("/insurance?" + myParams.toString());
      return newPage.toString();
    });
  };

  const onPrev = () => {
    if (currentPage === "1") return;
  };

  return (
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
      <form>
        <div className="grid grid-cols-1 gap-y-2 lg:~lg:~gap-y-2/4">
          <FormInputBox
            type="text"
            label="First Name"
            name="firstName"
            idHtmlFor="firstName"
            value={formData.firstName}
            inputHandler={formDataInputHandler}
            placeholder="JP"
            required={true}
          />
          <div className="flex flex-col gap-2">
            <label
              className="font-bold lg:~lg:~text-md/lg text-black"
              htmlFor="dob">
              Date Of Birth
            </label>
            <input
              type="date"
              id="dob"
              value={formData.dob || ""}
              name="dob"
              required={true}
              className="px-4 py-2.5 placeholder:text-black text-black text-sm lg:~lg:~text-sm/lg border border-black rounded font-medium backdrop-blur-[50] bg-white/30"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                formDataInputHandler("dob", e.target.value);
              }}
            />
          </div>
        </div>
        <div className="ml-auto w-max ~/sm:~mt-6/4">
          <Navigators handleNext={onNext} handlePrevious={onPrev} />
        </div>
      </form>
    </motion.div>
  );
};

export default InsuranceFormScreen01;
