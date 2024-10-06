"use client";
import React, { useState } from "react";
import {
  priceIcon,
  yearIcon,
  mileageIcon,
  locationIcon,
  colorIcon,
  fuelTypeIcon,
  engineIcon,
  transmissionIcon,
  priceWhiteIcon,
  yearWhiteIcon,
  mileageWhiteIcon,
  locationWhiteIcon,
  colorWhiteIcon,
  fuelTypeWhiteIcon,
  engineWhiteIcon,
  transmissionWhiteIcon,
} from "@/assets/images";
import FindYourRideNavMenuBtn from "./FindYourRideNavMenuBtn";
import { motion } from "framer-motion";
import FindYourRideSubMenuLayout from "./FindYourRideSubMenuLayout";
import PriceSubMenu from "./subMenus/PriceSubMenu";
import YearSubMenu from "./subMenus/YearSubMenu";
import MileageSubMenu from "./subMenus/MileageSubMenu";
import LocationSubMenu from "./subMenus/LocationSubMenu";
import ColorSubMenu from "./subMenus/ColorSubMenu";
import FuelTypeSubMenu from "./subMenus/FuelTypeSubMenu";
import EngineSubMenu from "./subMenus/EngineSubMenu";
import TransmissionSubMenu from "./subMenus/TransmissionSubMenu";

const menuMetadata = {
  price: {
    icon: priceIcon,
    subMenuIcon: priceWhiteIcon,
    text: "Price",
  },
  year: {
    icon: yearIcon,
    subMenuIcon: yearWhiteIcon,
    text: "Year",
  },
  mileage: {
    icon: mileageIcon,
    subMenuIcon: mileageWhiteIcon,
    text: "Mileage",
  },
  location: {
    icon: locationIcon,
    subMenuIcon: locationWhiteIcon,
    text: "Location",
  },
  color: {
    icon: colorIcon,
    subMenuIcon: colorWhiteIcon,
    text: "Color",
  },
  fuelType: {
    icon: fuelTypeIcon,
    subMenuIcon: fuelTypeWhiteIcon,
    text: "Fuel Type",
  },
  engine: {
    icon: engineIcon,
    subMenuIcon: engineWhiteIcon,
    text: "Engine",
  },
  transmission: {
    icon: transmissionIcon,
    subMenuIcon: transmissionWhiteIcon,
    text: "Transmission",
  },
};

const FindYourRideNavMenu = () => {
  const [subMenuOpenType, setSubMenuOpenType] = useState<
    keyof typeof menuMetadata | null
  >(null);

  const menuBtnClickHandler = (type: keyof typeof menuMetadata) => {
    if (subMenuOpenType === type) {
      setSubMenuOpenType(null);
    } else {
      setSubMenuOpenType(type);
    }
  };

  // SubMenus data
  const [price, setPrice] = useState([0, 1000000]);
  const [year, setYear] = useState([2012, 2018]);
  const [mileage, setMileage] = useState([15, 25]);
  const [location, setLocation] = useState("00123");
  const [locationRadius, setLocationRadius] = useState(0);
  const [colors, setColors] = useState<string[]>([]);
  const [fuelTypes, setFuelTypes] = useState<string[]>([]);
  const [engines, setEngines] = useState<string[]>([]);
  const [transmissions, setTransmissions] = useState<string[]>([]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.1 }}
        className="absolute w-max top-[calc(100%+.5rem)] right-0 border border-white bg-white/30 backdrop-blur-md rounded-md px-1 py-3 grid grid-cols-2 ~gap-x-0.5/1 ~gap-y-3/5">
        {Object.keys(menuMetadata).map((key, index) => {
          const { icon, text } = menuMetadata[key as keyof typeof menuMetadata];
          return (
            <FindYourRideNavMenuBtn
              key={index}
              type={key as string}
              icon={icon}
              text={text}
              onClick={type =>
                menuBtnClickHandler(type as keyof typeof menuMetadata)
              }
            />
          );
        })}
        {subMenuOpenType && (
          <FindYourRideSubMenuLayout
            subMenuOpenType={subMenuOpenType}
            heading={menuMetadata[subMenuOpenType].text}
            icon={menuMetadata[subMenuOpenType].subMenuIcon}>
            {subMenuOpenType === "price" && (
              <PriceSubMenu price={price} setPrice={setPrice} />
            )}
            {subMenuOpenType === "year" && (
              <YearSubMenu year={year} setYear={setYear} />
            )}
            {subMenuOpenType === "mileage" && (
              <MileageSubMenu mileage={mileage} setMileage={setMileage} />
            )}
            {subMenuOpenType === "location" && (
              <LocationSubMenu
                location={location}
                setLocation={setLocation}
                locationRadius={locationRadius}
                setLocationRadius={setLocationRadius}
              />
            )}
            {subMenuOpenType === "color" && (
              <ColorSubMenu colors={colors} setColors={setColors} />
            )}
            {subMenuOpenType === "fuelType" && (
              <FuelTypeSubMenu
                fuelTypes={fuelTypes}
                setFuelTypes={setFuelTypes}
              />
            )}
            {subMenuOpenType === "engine" && (
              <EngineSubMenu engines={engines} setEngines={setEngines} />
            )}
            {subMenuOpenType === "transmission" && (
              <TransmissionSubMenu
                transmissions={transmissions}
                setTransmissions={setTransmissions}
              />
            )}
          </FindYourRideSubMenuLayout>
        )}
      </motion.div>
    </>
  );
};

export default FindYourRideNavMenu;
