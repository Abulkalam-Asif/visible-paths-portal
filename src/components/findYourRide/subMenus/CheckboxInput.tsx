import React from "react";

type CheckboxInputProps = {
  name: string;
  selectedOptions: string[];
  setState: (selectedOptions: string[]) => void;
  options: {
    label: string;
    value: string;
  }[];
};

const CheckboxInput = ({
  name,
  selectedOptions,
  setState,
  options,
}: CheckboxInputProps) => {
  const colorInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(
      e.target.checked
        ? [...selectedOptions, e.target.value]
        : selectedOptions.filter(color => color !== e.target.value),
    );
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        {options.map(({ label, value }: { label: string; value: string }) => (
          <label
            key={value}
            htmlFor={label}
            className="relative flex items-center ~gap-8/10 cursor-pointer">
            <input
              type="checkbox"
              name={name}
              id={label}
              value={value}
              onChange={colorInputHandler}
              className="w-0 h-0 peer"
            />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 ~w-5/7 ~h-5/7 border-[0.5px] border-black bg-white/80 rounded-md peer-checked:bg-black"></span>
            <span className="capitalize font-bold ~text-xs/base">{label}</span>
          </label>
        ))}
      </div>
    </>
  );
};

export default CheckboxInput;
