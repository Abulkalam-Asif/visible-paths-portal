import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FormInputBox from "../finance/loan-lease/FormInputBox";
import Navigators from "../survey/Navigators";
import RequestDemoSelect from "../finance/loan-lease/RequestDemoSelect";

type FormDataType = {
  commute: string;
  commuteMiles: string;
};

const defaultFormData: FormDataType = {
  commute: "",
  commuteMiles: "",
};

const InsuranceFormScreen03 = () => {
  const [formData, setFormData] = useState<FormDataType>(defaultFormData);
  const router = useRouter();
  const params = useSearchParams();
  const myParams = new URLSearchParams(params);

  const formDataInputHandler = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const data = localStorage.getItem("insuranceformDataScreen03");
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
    localStorage.setItem("insuranceformDataScreen03", JSON.stringify(formData));
  };

  const onNext = () => {
    saveFormDataToLocalStorage();
    myParams.delete("page");
    myParams.set("summary", "true");
    router.push("/insurance?" + myParams.toString());
  };

  const onPrev = () => {
    const newPage = 2;
    myParams.set("page", newPage.toString());
    router.push("/insurance?" + myParams.toString());
    return newPage.toString();
  };

  return (
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
      <form>
        <div className="grid grid-cols-1 gap-y-2 lg:~lg:~gap-y-2/4">
          <RequestDemoSelect
            label="Number of days you commute per week"
            name="commute"
            idHtmlFor="commute"
            value={formData.commute}
            inputHandler={formDataInputHandler}
            required={true}
            options={[
              { label: "5", value: "5" },
              { label: "10", value: "10" },
              { label: "15", value: "15" },
            ]}
          />
          <FormInputBox
            type="text"
            label="How many miles do your commute one way?"
            name="commuteMiles"
            idHtmlFor="commuteMiles"
            value={formData.commuteMiles}
            inputHandler={formDataInputHandler}
            placeholder="20"
            required={true}
          />
        </div>
        <div className="ml-auto w-max ~/sm:~mt-6/4">
          <Navigators handleNext={onNext} handlePrevious={onPrev} />
        </div>
      </form>
    </motion.div>
  );
};

export default InsuranceFormScreen03;
