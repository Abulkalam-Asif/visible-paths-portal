import React from "react";
import ColorCheckboxInput from "./ColorCheckboxInput";

type ColorSubMenuProps = {
  colors: string[];
  setColors: (colors: string[]) => void;
};
const colorsData = [
  {
    name: "black",
    hex: "#000000",
  },
  {
    name: "green",
    hex: "#36A645",
  },
  {
    name: "blue",
    hex: "#3A64C5",
  },
  {
    name: "orange",
    hex: "#FE9F1C",
  },
  {
    name: "red",
    hex: "#FF0000",
  },
  {
    name: "sliver",
    hex: "#C7C7C7",
  },
  {
    name: "gray",
    hex: "#8C8A8A",
  },
  {
    name: "gold",
    hex: "#987713",
  },
];

const ColorSubMenu = ({ colors, setColors }: ColorSubMenuProps) => {
  return (
    <>
      <div className="flex flex-col gap-2 pt-1">
        <ColorCheckboxInput
          name="colors"
          selectedOptions={colors}
          setState={setColors}
          options={colorsData.map(color => ({
            label: color.name,
            hex: color.hex,
          }))}
        />
      </div>
    </>
  );
};

export default ColorSubMenu;
