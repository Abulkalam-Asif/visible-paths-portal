import React from "react";
import CheckboxInput from "./CheckboxInput";

type FuelTypeSubMenuProps = {
  fuelTypes: string[];
  setFuelTypes: (fuelTypes: string[]) => void;
};
const fuelTypeData = [
  {
    label: "Diesel",
    value: "diesel",
  },
  {
    label: "Electric",
    value: "electric",
  },
  {
    label: "Gas",
    value: "gas",
  },
  {
    label: "Hybrid",
    value: "hybrid",
  },
  {
    label: "Other",
    value: "other",
  },
  {
    label: "Plug-In Hybrid",
    value: "plugInHybrid",
  },
];

const FuelTypeSubMenu = ({ fuelTypes, setFuelTypes }: FuelTypeSubMenuProps) => {
  return (
    <>
      <div className="flex flex-col gap-2 pt-1 w-max">
        <CheckboxInput
          name="fuelTypes"
          selectedOptions={fuelTypes}
          setState={setFuelTypes}
          options={fuelTypeData.map(({ label, value }) => ({
            label,
            value,
          }))}
        />
      </div>
    </>
  );
};

export default FuelTypeSubMenu;
