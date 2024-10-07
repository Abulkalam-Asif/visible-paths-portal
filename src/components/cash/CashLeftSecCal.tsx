"use client";
import React from "react";
import RangeInput from "./RangeInput";
import FormInputBox from "../finance/loan-lease/FormInputBox";
import { motion } from "framer-motion";

type prop = { 
  carValue: number | null;
  setCarValue: React.Dispatch<React.SetStateAction<number>>;
};

const CashLeftSecCal = ({ carValue, setCarValue }: prop) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCarValue(Number(e.target.value));
  };
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="backdrop-blur-financeForm text-white bg-[#737475]/30 border-white border-2 rounded-[20px] max-w-lg">
      <div className="p-10 flex flex-col items-center w-full ~/sm:~gap-7/14">
        <RangeInput
          label="Car Price"
          name="carPrice"
          idHtmlFor="carPrice"
          min={0}
          max={40000}
          step={1000}
          prefix="$"
          value={carValue || 0}
          onChange={handleChange}
        />
        <div className="flex flex-col justify-center gap-3 border-white border p-6 rounded-lg">
          <h1 className="text-xl font-extrabold ">Trade - In Value</h1>
          <p className="font-bold">
            We will take your trade-in value into account when estimating your
            monthly payments
          </p>
          <FormInputBox
            label="Enter Value"
            name="tradeInValue"
            idHtmlFor="tradeInValue"
            value=""
            placeholder="$2,000"
            required={true}
            type="text"
            inputHandler={() => {}}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default CashLeftSecCal;
