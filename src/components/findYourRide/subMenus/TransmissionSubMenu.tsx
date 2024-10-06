import React from "react";
import CheckboxInput from "./CheckboxInput";

type TransmissionSubMenuProps = {
  transmissions: string[];
  setTransmissions: (transmissions: string[]) => void;
};
const transmissionData = [
  {
    label: "Manual",
    value: "manual",
  },
  {
    label: "Automatic",
    value: "automatic",
  },
];

const TransmissionSubMenu = ({
  transmissions,
  setTransmissions,
}: TransmissionSubMenuProps) => {
  return (
    <>
      <div className="flex flex-col gap-2 pt-1 w-max">
        <CheckboxInput
          name="transmissions"
          selectedOptions={transmissions}
          setState={setTransmissions}
          options={transmissionData.map(({ label, value }) => ({
            label,
            value,
          }))}
        />
      </div>
    </>
  );
};

export default TransmissionSubMenu;
