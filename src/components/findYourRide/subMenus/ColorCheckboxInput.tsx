import React from "react";

type ColorCheckboxInputProps = {
  name: string;
  selectedOptions: string[];
  setState: (selectedOptions: string[]) => void;
  options: {
    label: string;
    hex: string;
  }[];
};

const ColorCheckboxInput = ({
  name,
  selectedOptions,
  setState,
  options,
}: ColorCheckboxInputProps) => {
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
        {options.map(({ label, hex }: { label: string; hex: string }) => (
          <div
            key={hex}
            className="flex items-center gap-6 justify-between">
            <label
              htmlFor={label}
              className="relative flex items-center gap-8 cursor-pointer">
              <input
                type="checkbox"
                name={name}
                id={label}
                value={hex}
                onChange={colorInputHandler}
                className="w-0 h-0 peer"
              />
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 border-[0.5px] border-black bg-white/80 rounded-md peer-checked:bg-black"></span>
              <span className="capitalize font-bold ~text-xs/sm">
                {label}
              </span>
            </label>
            <span
              style={{ background: hex }}
              className="w-4 h-4 rounded-full"></span>
          </div>
        ))}
      </div>
    </>
  );
};

export default ColorCheckboxInput;
