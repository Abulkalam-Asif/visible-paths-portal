"use client";
import React, { useEffect, useState } from "react";
import FormInputBox from "./FormInputBox";
import { motion } from "framer-motion";
import Navigators from "@/components/survey/Navigators";
import { useRouter, useSearchParams } from "next/navigation";

type FormDataType = {
  firstName: string;
  lastName: string;
  email: string;
  confirmEmail: string;
  phone: string;
};

const defaultFormData: FormDataType = {
  firstName: "",
  lastName: "",
  email: "",
  confirmEmail: "",
  phone: "",
};

const FormCompScreen01 = () => {
  const [formData, setFormData] = useState<FormDataType>(defaultFormData);
  const router = useRouter();
  const params = useSearchParams();
  const myParams = new URLSearchParams(params);
  const [currentPage, setCurrentPage] = useState(params.get("page") || "");

  const formDataInputHandler = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const data = localStorage.getItem("formDataScreen01");
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
    localStorage.setItem("formDataScreen01", JSON.stringify(formData));
  };

  const onNext = () => {
    saveFormDataToLocalStorage();
    setCurrentPage(() => {
      const newPage = 2;
      myParams.set("page", newPage.toString());
      router.push("/finance/loan-lease?" + myParams.toString());
      return newPage.toString();
    });
  };

  const onPrev = () => {
    if (currentPage === "1") return;
  };

  return (
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
      <form>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 lg:~lg:~gap-x-10/20 lg:~lg:~gap-y-6/12">
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
          <FormInputBox
            type="text"
            label="Last Name"
            name="lastName"
            idHtmlFor="lastName"
            value={formData.lastName}
            inputHandler={formDataInputHandler}
            placeholder="JP Smith"
            required={true}
          />
          <FormInputBox
            type="email"
            label="Email Address"
            name="email"
            idHtmlFor="email"
            value={formData.email}
            inputHandler={formDataInputHandler}
            placeholder="jpsmith@visiblepath.com"
            required={true}
          />
          <FormInputBox
            type="email"
            label="Confirm Email Address"
            name="confirmEmail"
            idHtmlFor="confirmEmail"
            value={formData.confirmEmail}
            inputHandler={formDataInputHandler}
            placeholder="jpsmith@visiblepath.com"
            required={true}
          />
          <FormInputBox
            type="tel"
            label="Phone Number"
            name="phone"
            idHtmlFor="phone"
            value={formData.phone}
            inputHandler={formDataInputHandler}
            placeholder="Add Phone Number"
            required={true}
          />
        </div>
        <div className="ml-auto w-max ~/sm:~mt-6/2">
          <Navigators handleNext={onNext} handlePrevious={onPrev} />
        </div>
      </form>
    </motion.div>
  );
};

export default FormCompScreen01;
