"use client";
import {
  autoCheckIcon,
  drivenIcon,
  engine2Icon,
  locationIcon,
  mileage2Icon,
} from "@/assets/images";
import Image from "next/image";
import React, { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { motion } from "framer-motion";
import Link from "next/link";
import { Car } from "./FindYourRideCarsDisplay";

type FindYourRideCarCardProps = Car;
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
      <div className="min-w-40 w-full py-3 border-[0.5px] border-black/60 shadow-lg rounded bg-[#F4F3F0]/70 backdrop-blur-[10px] font-bold sm:w-1/2 lg:w-1/3">
        <div className="px-3">
          <div className="flex flex-row items-center justify-between">
            <Link
              href={`/find-your-ride/compare/${id}`}
              className="text-xxs hover:underline">
              {name}
            </Link>
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
          <span className="text-sm">${price}</span>
        </div>
        <div className="w-auto h-12 mx-auto">
          <Image
            src={image}
            alt={name}
            className="w-full h-full object-contain"
            width={300}
            height={200}
          />
        </div>
        <hr className="bg-white my-3" />
        <div className="px-2 space-y-2">
          <div className="flex items-center gap-1 text-[6px] whitespace-nowrap flex-wrap">
            <p className="flex items-center gap-1">
              <Image
                src={mileage2Icon}
                alt="Mileage"
                width={16}
                height={16}
                className="h-2.5 w-auto"
              />
              <span>{mileage}</span>
            </p>
            <p className="flex items-center gap-1">
              <Image
                src={engine2Icon}
                alt="Engine"
                width={16}
                height={16}
                className="h-2.5 w-auto"
              />
              <span>{engine}</span>
            </p>
            <p className="flex items-center gap-1">
              <Image
                src={drivenIcon}
                alt="Driven"
                width={16}
                height={16}
                className="h-2.5 w-auto"
              />
              <span>{driven}</span>
            </p>
          </div>
          <div className="flex items-center gap-1 text-[6px]">
            <FiCheckCircle className="w-3 h-auto" />
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
          <div className="flex items-center gap-1 text-xxxs">
            <Image
              src={locationIcon}
              alt="Location"
              width={12}
              height={12}
              className="w-3 h-auto"
            />
            <span>{seller}</span>
          </div>
          <div className="flex items-center text-xxxs gap-1">
            <Image
              src={autoCheckIcon}
              alt="AutoCheck"
              width={150}
              height={150}
              className="h-4 w-auto"
            />
            <span>Vehicle history report</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindYourRideCarCard;
