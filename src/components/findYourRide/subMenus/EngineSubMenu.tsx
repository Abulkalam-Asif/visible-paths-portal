import React from "react";
import CheckboxInput from "./CheckboxInput";

type EngineSubMenuProps = {
  engines: string[];
  setEngines: (engines: string[]) => void;
};
const engineData = [
  {
    label: "4 Cylinders",
    value: "4Cylinders",
  },
  {
    label: "6 Cylinders",
    value: "6Cylinders",
  },
  {
    label: "8 Cylinders",
    value: "8Cylinders",
  },
  {
    label: "Other Cylinders",
    value: "otherCylinders",
  },
];

const EngineSubMenu = ({ engines, setEngines }: EngineSubMenuProps) => {
  return (
    <>
      <div className="flex flex-col gap-2 pt-1 w-max">
        <CheckboxInput
          name="engines"
          selectedOptions={engines}
          setState={setEngines}
          options={engineData.map(({ label, value }) => ({
            label,
            value,
          }))}
        />
      </div>
    </>
  );
};

export default EngineSubMenu;
