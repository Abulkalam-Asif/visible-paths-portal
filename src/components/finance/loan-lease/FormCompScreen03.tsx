import React, { useEffect, useState } from "react";
import FormInputBox from "./FormInputBox";
import RequestDemoSelect from "./RequestDemoSelect";
import { BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";
import Navigators from "@/components/survey/Navigators";
import { useRouter, useSearchParams } from "next/navigation";

type FormDataType = {
  employeStatus: string;
  experience: string;
  jobTitle: string;
  montlyIncome: string;
};

const defaultFormData: FormDataType = {
  employeStatus: "",
  experience: "",
  jobTitle: "",
  montlyIncome: "",
};

const FormCompScreen03 = () => {
  const [formData, setFormData] = useState<FormDataType>(defaultFormData);

  const router = useRouter();
  const params = useSearchParams();
  const myParams = new URLSearchParams(params);
  const [currentPage, setCurrentPage] = useState<string>(
    params.get("page") || "",
  );

  const formDataInputHandler = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const data = localStorage.getItem("formDataScreen03");
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
    localStorage.setItem("formDataScreen03", JSON.stringify(formData));
  };

  const onNext = () => {
    saveFormDataToLocalStorage();
    setCurrentPage((prev: string) => {
      const newPage = Number(prev) + 1;
      myParams.set("page", newPage.toString());
      router.push("/finance/loan-lease?" + myParams.toString());
      return newPage.toString();
    });
  };

  const onPrev = () => {
    setCurrentPage((prev: string) => {
      const newPage = Number(prev) - 1;
      myParams.set("page", newPage.toString());
      router.push("/finance/loan-lease?" + myParams.toString());
      return newPage.toString();
    });
  };
  return (
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
      <form
        className="flex flex-col gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 ~/lg:~px-4/12">
          <RequestDemoSelect
            label="Employe Status"
            name="employeStatus"
            idHtmlFor="employeStatus"
            value={formData.employeStatus}
            inputHandler={formDataInputHandler}
            required={true}
            options={[
              { label: "select Option", value: "" },
              { label: "Employed", value: "employed" },
              { label: "Self Employed", value: "selfEmployed" },
              { label: "Unemployed", value: "unemployed" },
            ]}
          />
          <FormInputBox
            label="Job Title"
            name="jobTitle"
            idHtmlFor="jobTitle"
            type="text"
            value={formData.jobTitle}
            inputHandler={formDataInputHandler}
            placeholder="Job Title"
            required={true}
          />
          <RequestDemoSelect
            label="How long have you worked there ?"
            name="experience"
            idHtmlFor="experience"
            value={formData.experience}
            inputHandler={formDataInputHandler}
            required={true}
            options={[
              { label: "select Option", value: "" },
              { label: "1-2 years", value: "1-2 years" },
              { label: "3-5 years", value: "3-5 years" },
              { label: "5+ years", value: "5+ years" },
            ]}
          />
          <RequestDemoSelect
            label="How much did you make a month(before taxes) ?"
            name="montlyIncome"
            idHtmlFor="montlyIncome"
            value={formData.montlyIncome}
            inputHandler={formDataInputHandler}
            required={true}
            options={[
              { label: "select Option", value: "" },
              { label: "Less than $1000", value: "Less than $1000" },
              { label: "$1000-$2000", value: "$1000-$2000" },
              { label: "$2000-$3000", value: "$2000-$3000" },
              { label: "$3000-$4000", value: "$3000-$4000" },
              { label: "$4000-$5000", value: "$4000-$5000" },
              { label: "$5000-$6000", value: "$5000-$6000" },
              { label: "$6000-$7000", value: "$6000-$7000" },
              { label: "$7000-$8000", value: "$7000-$8000" },
              { label: "$8000-$9000", value: "$8000-$9000" },
              { label: "$9000-$10000", value: "$9000-$10000" },
              { label: "More than $10000", value: "More than $10000" },
            ]}
          />
        </div>
        <div className="flex items-center gap-5 p-2 font-extrabold cursor-pointer w-fit">
          <BiPlus className="bg-customRed text-3xl text-white rounded-full" />
          <p className="text-lg text-white">Add Another Source Of Income</p>
        </div>
        <div className="ml-auto w-max">
          <Navigators handleNext={onNext} handlePrevious={onPrev} />
        </div>
      </form>
    </motion.div>
  );
};

export default FormCompScreen03;
