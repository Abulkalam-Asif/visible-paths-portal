import { locationIcon } from "@/assets/images";
import Image from "next/image";
import React from "react";
import RangeInput from "../../RangeInput";

type LocationSubMenuProps = {
  location: string;
  setLocation: (location: string) => void;
  locationRadius: number;
  setLocationRadius: (locationRadius: number) => void;
};

const LocationSubMenu = ({
  location,
  setLocation,
  locationRadius,
  setLocationRadius,
}: LocationSubMenuProps) => {
  const min = 0,
    max = 100;
  const locationSettingHandler = () => {
    // Set the location here
    setLocation("Current Location");
  };

  return (
    <div className="flex flex-col gap-2 px-2">
      <button
        onClick={locationSettingHandler}
        className="w-fit flex items-center text-sm gap-2 font-semibold px-3 py-1 border-[0.5px] border-black bg-white/80 rounded-md">
        <Image
          src={locationIcon}
          alt="Location"
          className="w-4 h-auto"
          width={24}
          height={24}
        />
        <span>{location}</span>
      </button>
      <RangeInput
        min={min}
        max={max}
        idHtmlFor="locationRadius"
        name="locationRadius"
        label="Radius"
        onChange={e => setLocationRadius(+e.target.value)}
        step={1}
        unit="Miles"
        value={locationRadius}
      />
    </div>
  );
};

export default LocationSubMenu;
