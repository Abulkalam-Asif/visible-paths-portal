import React from "react";

type FormDataType = {
  pastInsurance: string;
  usage: string;
  rideSharing: string;
  accidents: string;
};

type Props = {
  question: string;
  name: string;
  formData: FormDataType;
  inputHandler: (name: string, value: string) => void;
};

const BooleanFormComp = ({ question, formData, name, inputHandler }: Props) => {
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputHandler(e.target.name, e.target.value);
  };
  return (
    <div className="max-w-full">
      <label
        htmlFor={name}
        className="font-semibold text-black lg:~lg:~text-md/lg">
        {question}
        <span className="text-accent1">*</span>
      </label>
      <div className="~/sm:~mt-1/2 flex ~/sm:~space-x-4/2 ~/sm:~text-md/xl max-w-full">
        <label
          className={`cursor-pointer ~/sm:~px-2/8 py-2 border rounded-lg flex justify-center items-center gap-2 ${
            formData[name as keyof typeof formData] === "Yes"
              ? "bg-customRed text-white"
              : "bg-white"
          }`}>
          <div className="w-2/3">
            <div
              className={`rounded-full w-6 h-6 border-2 flex justify-center items-center ${
                formData[name as keyof typeof formData] === "Yes"
                  ? "border-white"
                  : "border-black"
              } `}>
              <div
                className={`border-2 w-3 h-3 rounded-full  ${
                  formData[name as keyof typeof formData] === "Yes"
                    ? "bg-white"
                    : "border-black"
                }`}></div>
            </div>
          </div>
          <input
            type="radio"
            name={name}
            value="Yes"
            className="hidden"
            checked={formData[name as keyof typeof formData] === "Yes"}
            onChange={handleRadioChange}
          />
          YES
        </label>
        <label
          className={`cursor-pointer ~/sm:~px-2/8 py-2 border rounded-lg flex justify-center items-center gap-2 ${
            formData[name as keyof typeof formData] === "No"
              ? "bg-customRed text-white"
              : "bg-white"
          }`}>
          <div>
            <div
              className={`rounded-full w-6 h-6 border-2 flex justify-center items-center ${
                formData[name as keyof typeof formData] === "No"
                  ? "border-white"
                  : "border-black"
              } `}>
              <div
                className={`border-2 w-3 h-3 rounded-full  ${
                  formData[name as keyof typeof formData] === "No"
                    ? "bg-white"
                    : "border-black"
                }`}></div>
            </div>
          </div>
          <input
            type="radio"
            name={name}
            value="No"
            className="hidden"
            checked={formData[name as keyof typeof formData] === "No"}
            onChange={handleRadioChange}
          />
          NO
        </label>
      </div>
    </div>
  );
};

export default BooleanFormComp;
