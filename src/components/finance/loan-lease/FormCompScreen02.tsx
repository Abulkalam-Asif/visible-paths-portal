import React, { useEffect, useState } from "react";
import FormInputBox from "./FormInputBox";
import { motion } from "framer-motion";
import Navigators from "@/components/survey/Navigators";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

type FormDataType = {
  homeAdress: string;
  city: string;
  state: string;
  zipCode: string;
  livingTime: string;
  wish: string;
};

const defaultFormData: FormDataType = {
  homeAdress: "",
  city: "",
  state: "",
  zipCode: "",
  livingTime: "",
  wish: "",
};

const FormCompScreen02 = () => {
  const [formData, setFormData] = useState<FormDataType>(defaultFormData);

  const router = useRouter();
  const params = useSearchParams();
  const myParams = new URLSearchParams(params);

  const formDataInputHandler = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const data = localStorage.getItem("formDataScreen02");
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
    localStorage.setItem("formDataScreen02", JSON.stringify(formData));
  };

  const onNext = () => {
    saveFormDataToLocalStorage();

    const newPage = 3;
    myParams.set("page", newPage.toString());
    router.push("/finance/loan-lease?" + myParams.toString());
    return newPage.toString();
  };

  const onPrev = () => {
    const newPage = 1;
    myParams.set("page", newPage.toString());
    router.push("/finance/loan-lease?" + myParams.toString());
    return newPage.toString();
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, wish: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
          <FormInputBox
            type="text"
            label="Home Address"
            name="homeAdress"
            idHtmlFor="homeAdress"
            value={formData.homeAdress}
            inputHandler={formDataInputHandler}
            placeholder="Home Address"
            required={true}
          />
          <FormInputBox
            type="text"
            label="City"
            name="city"
            idHtmlFor="city"
            value={formData.city}
            inputHandler={formDataInputHandler}
            placeholder="city"
            required={true}
          />
          <FormInputBox
            type="text"
            label="State"
            name="state"
            idHtmlFor="state"
            value={formData.state}
            inputHandler={formDataInputHandler}
            placeholder="state"
            required={true}
          />
          <FormInputBox
            type="text"
            label="Zip Code"
            name="zipCode"
            idHtmlFor="zipCode"
            value={formData.zipCode}
            inputHandler={formDataInputHandler}
            placeholder="Zip Code"
            required={true}
          />
          <FormInputBox
            type="text"
            label="How long have you lived there?"
            name="livingTime"
            idHtmlFor="livingTime"
            value={formData.livingTime}
            inputHandler={formDataInputHandler}
            placeholder="Live there?"
            required={true}
          />
          <div className="p-2 lg:~lg:~p-2/5 max-w-full">
            <label htmlFor={"wish"} className="font-bold text-black text-xl">
              Do you own or rent ? <span className="text-accent1">*</span>
            </label>
            <div className="~/sm:~mt-1/2 flex ~/sm:~space-x-4/2 ~/sm:~text-md/xl max-w-full">
              <label
                className={`cursor-pointer ~/sm:~px-2/5 py-2 border rounded ${
                  formData.wish === "OWN"
                    ? "bg-customRed text-white"
                    : "border-black text-black"
                }`}>
                <input
                  type="radio"
                  name="wish"
                  value="OWN"
                  className="hidden"
                  checked={formData.wish === "OWN"}
                  onChange={handleRadioChange}
                />
                Own
              </label>
              <label
                className={`cursor-pointer ~/sm:~px-2/5 py-2 border rounded ${
                  formData.wish === "RENT"
                    ? "bg-customRed text-white"
                    : "border-black text-black"
                }`}>
                <input
                  type="radio"
                  name="wish"
                  value="RENT"
                  className="hidden"
                  checked={formData.wish === "RENT"}
                  onChange={handleRadioChange}
                />
                Rent
              </label>
              <label
                className={`cursor-pointer ~/sm:~px-2/5 py-2 border rounded ${
                  formData.wish === "OTHER"
                    ? "bg-customRed text-white"
                    : "border-black text-black"
                }`}>
                <input
                  type="radio"
                  name="wish"
                  value="OTHER"
                  className="hidden"
                  checked={formData.wish === "OTHER"}
                  onChange={handleRadioChange}
                />
                Other
              </label>
            </div>
          </div>
        </div>
        <div className="ml-auto w-max ~/sm:~mt-6/2">
          <Navigators handleNext={onNext} handlePrevious={onPrev} />
        </div>
      </form>
    </motion.div>
  );
};

export default FormCompScreen02;
