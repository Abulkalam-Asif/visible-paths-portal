import {
  autoCheckIcon,
  drivenWhiteIcon,
  engineWhite2Icon,
  locationWhiteIcon,
  mileageWhite2Icon,
} from "@/assets/images";
import Image from "next/image";
import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { GoHeart } from "react-icons/go";

type FindYourRideCarCardProps = {
  name: string;
  price: string;
  image: string;
  mileage: string;
  engine: string;
  driven: string;
  properties: string[];
  seller: string;
};

const FindYourRideCarCard = ({
  name,
  price,
  image,
  mileage,
  engine,
  driven,
  properties,
  seller,
}: FindYourRideCarCardProps) => {
  return (
    <>
      <div className="py-3 border-[1.5px] border-white rounded-[10px] bg-white/30 backdrop-blur-[10px] text-white font-bold">
        <div className="px-3 xs:px-4">
          <div className="flex flex-row items-center justify-between">
            <span className="text-sm">{name}</span>
            <button>
              <GoHeart className="w-5 h-auto" />
            </button>
          </div>
          <span className="text-xl">${price}</span>
        </div>
        <div className="w-full h-auto max-w-40 mx-auto">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain"
          />
        </div>
        <hr className="bg-white my-4" />
        <div className="px-3 xs:px-4 space-y-2">
          <div className="flex items-center gap-2 text-xxs whitespace-nowrap flex-wrap">
            <p className="flex items-center gap-1">
              <Image
                src={mileageWhite2Icon}
                alt="Mileage"
                width={16}
                height={16}
              />
              <span>{mileage}</span>
            </p>
            <p className="flex items-center gap-1">
              <Image
                src={engineWhite2Icon}
                alt="Engine"
                width={16}
                height={16}
              />
              <span>{engine}</span>
            </p>
            <p className="flex items-center gap-1">
              <Image
                src={drivenWhiteIcon}
                alt="Driven"
                width={16}
                height={16}
              />
              <span>{driven}</span>
            </p>
          </div>
          <div className="flex items-center gap-2 text-xxs xs:px-2">
            <FiCheckCircle className="w-4 h-auto" />
            <ul className="flex items-center">
              {properties.map((property, index) => (
                <li key={index}>
                  {property}
                  {index < properties.length - 1 && (
                    <span className="mr-1">,</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-2 text-xxs xs:px-2">
            <Image
              src={locationWhiteIcon}
              alt="Location"
              width={16}
              height={16}
            />
            <span>{seller}</span>
          </div>
          <div className="flex items-center text-xs gap-2 xs:px-2">
            <Image
              src={autoCheckIcon}
              alt="AutoCheck"
              width={150}
              height={150}
              className="h-6 w-auto"
            />
            <span>Vehicle history report</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindYourRideCarCard;
