import React, { useEffect } from "react";
import { motion } from "framer-motion";
import RequestDemoSelect from "../finance/loan-lease/RequestDemoSelect";
import BooleanFormComp from "./BooleanFormComp";
import Navigators from "../survey/Navigators";
import { useRouter, useSearchParams } from "next/navigation";

type FormDataType = {
  pastInsurance: string;
  usage: string;
  rideSharing: string;
  accidents: string;
};

const defaultFormData: FormDataType = {
  pastInsurance: "",
  usage: "",
  rideSharing: "",
  accidents: "",
};

const InsuranceFormScreen02 = () => {
  const [formData, setFormData] = React.useState<FormDataType>(defaultFormData);
  const router = useRouter();
  const params = useSearchParams();
  const myParams = new URLSearchParams(params);
  const formDataInputHandler = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const data = localStorage.getItem("insuranceformDataScreen02");
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
    localStorage.setItem("insuranceformDataScreen02", JSON.stringify(formData));
  };

  const onNext = () => {
    saveFormDataToLocalStorage();

    const newPage = 3;
    myParams.set("page", newPage.toString());
    router.push("/insurance?" + myParams.toString());
    return newPage.toString();
  };

  const onPrev = () => {
    const newPage = 1;
    myParams.set("page", newPage.toString());
    router.push("/insurance?" + myParams.toString());
    return newPage.toString();
  };

  return (
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
      <form>
        <div className="grid grid-cols-1 gap-y-2 lg:~lg:~gap-y-2/4">
          <BooleanFormComp
            question="Have you had auto insurance in the past 30 days?"
            formData={formData}
            setFormData={setFormData}
            name="pastInsurance"
            inputHandler={formDataInputHandler}
          />
          <RequestDemoSelect
            label="Vehicle Use"
            name="rideSharing"
            idHtmlFor="rideSharing"
            value={formData.rideSharing}
            inputHandler={formDataInputHandler}
            required={true}
            options={[
              { label: "Ridesharing", value: "Ridesharing" },
              { label: "Personal Use", value: "Personal Use" },
              { label: "Others", value: "Others" },
            ]}
          />
          <BooleanFormComp
            question="I also use this vehicle for ridesharing"
            formData={formData}
            setFormData={setFormData}
            name="usage"
            inputHandler={formDataInputHandler}
          />
          <BooleanFormComp
            question="Have you had any driving accidents in the last 3 years?"
            formData={formData}
            setFormData={setFormData}
            name="accidents"
            inputHandler={formDataInputHandler}
          />
        </div>
        <div className="ml-auto w-max ~/sm:~mt-6/4">
          <Navigators handleNext={onNext} handlePrevious={onPrev} />
        </div>
      </form>
    </motion.div>
  );
};

export default InsuranceFormScreen02;
