"use client";
import {
  autoCheckIcon,
  drivenWhiteIcon,
  engineWhite2Icon,
  locationWhiteIcon,
  mileageWhite2Icon,
} from "@/assets/images";
import Image from "next/image";
import React, { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { motion } from "framer-motion";
import Link from "next/link";

type FindYourRideCarCardProps = {
  id: string;
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
  id,
  name,
  price,
  image,
  mileage,
  engine,
  driven,
  properties,
  seller,
}: FindYourRideCarCardProps) => {
  const [isFavourite, setIsFavourite] = useState(false);
  return (
    <>
      <Link
        href={`/find-your-ride/compare/${id}`}
        className="min-w-64 w-full py-3 border border-customRed shadow-lg rounded-[10px] bg-white/80 backdrop-blur-[10px] font-bold sm:w-1/2 lg:w-1/3">
        <div className="px-3 xs:px-4">
          <div className="flex flex-row items-center justify-between">
            <span className="text-sm">{name}</span>
            {isFavourite && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => setIsFavourite(false)}>
                <GoHeartFill className="w-5 h-auto" />
              </motion.button>
            )}
            {!isFavourite && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => setIsFavourite(true)}>
                <GoHeart className="w-5 h-auto" />
              </motion.button>
            )}
          </div>
          <span className="text-xl">${price}</span>
        </div>
        <div className="w-auto h-20 mx-auto">
          <Image
            src={image}
            alt={name}
            className="w-full h-full object-contain"
            width={300}
            height={200}
          />
        </div>
        <hr className="bg-white my-4" />
        <div className="px-3 space-y-2">
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
          <div className="flex items-center gap-2 text-xxs">
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
          <div className="flex items-center gap-2 text-xxs">
            <Image
              src={locationWhiteIcon}
              alt="Location"
              width={16}
              height={16}
            />
            <span>{seller}</span>
          </div>
          <div className="flex items-center text-xs gap-2">
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
      </Link>
    </>
  );
};

export default FindYourRideCarCard;
