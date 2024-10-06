import React from "react";

type RangeInputProps = {
  label: string;
  name: string;
  idHtmlFor: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  unit: string;
};

const RangeInput = ({
  label,
  name,
  idHtmlFor,
  min,
  max,
  step,
  value,
  onChange,
  unit,
}: RangeInputProps) => {
  return (
    <>
      <div className="~w-32/60">
        <div className="flex items-center justify-between font-bold ~text-sm/base">
          <label htmlFor={idHtmlFor}>{label}</label>
          <span>{`${value} ${unit}`}</span>
        </div>
        <div>
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
        </div>
      </div>
    </>
  );
};

export default RangeInput;
