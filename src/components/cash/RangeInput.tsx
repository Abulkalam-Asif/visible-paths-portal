"use client";
import React from "react";

type RangeInputProps = {
  label: string;
  name: string;
  idHtmlFor: string;
  min: number;
  max: number;
  step: number;
  prefix: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  displayValue?: string | undefined;
};

const RangeInput = ({
  label,
  name,
  idHtmlFor,
  min,
  max,
  step,
  prefix,
  value,
  onChange,
  displayValue,
}: RangeInputProps) => {
  return (
    <>
      <div className="w-full">
        <label htmlFor={idHtmlFor} className="font-bold">
          {label}
        </label>
        <div className="flex items-center gap-3">
          <div className="relative w-5/6">
            <input
              type="range"
              name={name}
              id={idHtmlFor}
              min={min}
              step={step}
              max={max}
              value={value}
              onChange={onChange}
              className="range_slider w-full"
            />
            <div className="text-xxs text-white font-medium xl:text-xs">
              <span className="absolute bottom-0 translate-y-2/3 left-0 xl:translate-y-full">
                {`${prefix}${min}`}
              </span>
              <span className="absolute bottom-0 translate-y-2/3 left-1/2 transform -translate-x-1/2 xl:translate-y-full">
                {`${prefix}${min + Math.floor((max - min) / 2)}`}
              </span>
              <span className="absolute bottom-0 translate-y-2/3 right-0 xl:translate-y-full">
                {`${prefix}${max}`}
              </span>
            </div>
          </div>
          <span className="w-1/6 min-w-max bg-customRed text-center whitespace-nowrap font-semibold text-white bg-accent1 px-1 py-1 rounded">
            {displayValue ? displayValue : `${prefix}${value}`}
          </span>
        </div>
      </div>
    </>
  );
};

export default RangeInput;
