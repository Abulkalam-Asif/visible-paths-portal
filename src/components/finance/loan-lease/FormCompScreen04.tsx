import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FormInputBox from "./FormInputBox";
import Navigators from "@/components/survey/Navigators";
import { useRouter, useSearchParams } from "next/navigation";

type FormDataType = {
  securityNumber: string;
  dob: string | null;
};

const defaultFormData: FormDataType = {
  securityNumber: "",
  dob: null,
};

const FormCompScreen04 = () => {
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
    const data = localStorage.getItem("formDataScreen04");
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
    localStorage.setItem("formDataScreen04", JSON.stringify(formData));
  };

  //checking state changings
  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);

  const onNext = () => {
    saveFormDataToLocalStorage();
    router.push("/finance/loan-lease?page=signup");
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
      <form>
        <div className="grid grid-cols-1 sm:grid-cols-2 ~/sm:~gap-4/10 ~/lg:~px-4/12">
          <FormInputBox
            type="text"
            label="Social Security Number"
            name="securityNumber"
            idHtmlFor="securityNumber"
            value={formData.securityNumber}
            inputHandler={formDataInputHandler}
            placeholder="Security Number"
            required={true}
          />

          <div className="flex flex-col gap-2.5">
            <label className="font-bold text-white" htmlFor="dob">
              Date Of Birth
            </label>
            <input
              type="date"
              id="dob"
              value={formData.dob || ""}
              name="dob"
              required={true}
              className="px-4 py-2.5 placeholder:text-white text-white text-sm border-2 border-white rounded font-medium backdrop-blur-[50] bg-white/30"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                formDataInputHandler("dob", e.target.value);
              }}
            />
          </div>
        </div>
        <div className="ml-auto w-max ~/sm:~mt-6/2">
          <Navigators handleNext={onNext} handlePrevious={onPrev} />
        </div>
      </form>
    </motion.div>
  );
};

export default FormCompScreen04;
