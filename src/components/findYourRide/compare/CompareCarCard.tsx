import { compareCarBgImg, prosIcon } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type CompareCarCardProps = {
  id: string;
  name: string;
  price: string;
  image: string;
  pros: string[];
  cons: string[];
  index: number;
};

const CompareCarCard = ({
  id,
  name,
  price,
  image,
  pros,
  cons,
  index,
}: CompareCarCardProps) => {
  return (
    <>
      <div className="w-full bg-[#F6F4F1] rounded-tr-[3.5rem] rounded-b-lg px-6 pt-5 flex flex-col lg:~lg:~px-3/6 lg:~lg:~pt-2/5 lg:~lg:~rounded-tr-[2rem]/[3.5rem]">
        <div className="relative z-0 w-full flex-1 flex flex-col">
          <div className="w-[calc(100%+4px)] translate-x-[-2px] relative z-[1]">
            <Image
              src={compareCarBgImg}
              alt="car"
              width={300}
              height={250}
              className="w-full h-auto"
            />
            <Image
              src={image}
              alt={name}
              width={300}
              height={300}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-auto"
            />
            <span className="absolute top-4 left-0 text-lg font-bold bg-[#F4F3F0] px-3 py-1 border border-black/60 rounded-l rounded-r-3xl lg:~lg:~text-sm/2xl lg:~lg:~top-2/4">
              {name}
            </span>
          </div>
          <div className="flex-1 relative pt-24 pb-16 rounded-b-md -translate-y-16 border border-[#C7C7C7] flex flex-col items-center gap-2 bg-white lg:~lg:~pt-16/20">
            <h2 className="text-2xl font-bold bg-white border border-[#C7C7C7] px-[0.3em] py-[0.1em] rounded lg:~lg:~text-base/3xl">
              ${price}
            </h2>
            <div className="flex items-center gap-2 text-lg font-bold bg-white border border-[#C7C7C7] px-[0.4em] py-[0.1em] rounded lg:~lg:~text-sm/2xl lg:~lg:~gap-2/4">
              <Image
                src={prosIcon}
                alt="pros"
                width={24}
                height={24}
                className="w-5 h-auto lg:~lg:~w-3/6"
              />
              <h3>Pros</h3>
            </div>
            <ul className="list-disc w-3/4 text-sm space-y-1 font-bold mt-1 lg:~lg:~text-xxs/base lg:~lg:~space-y-0/1.5">
              {pros.map((pro, index) => (
                <li key={index}>{pro}</li>
              ))}
            </ul>
            <div className="mt-2 flex items-center gap-2 text-lg font-bold bg-white border border-[#C7C7C7] px-3 py-1 rounded">
              <Image
                src={prosIcon}
                alt="cons"
                width={24}
                height={24}
                className="w-5 h-auto"
              />
              <h3>Cons</h3>
            </div>
            <ul className="list-disc w-3/4 text-sm space-y-1 font-bold mt-1 lg:~lg:~text-xxs/base lg:~lg:~space-y-0/1.5">
              {cons.map((con, index) => (
                <li key={index}>{con}</li>
              ))}
            </ul>
            <Link
              href={`/find-your-ride/${id}`}
              className="absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 text-white text-lg font-bold text-center bg-black w-20 h-20 rounded-full flex items-center justify-center">
              <span>Select</span>
            </Link>
          </div>
        </div>
      </div>
      {index !== 2 && (
        <div className="hidden lg:flex self-center text-white ~lg:~text-base/2xl items-center justify-center font-black text-center bg-black ~lg:~w-10/16 ~lg:~h-10/16 ~lg:~min-w-10/16 ~lg:~min-h-10/16 rounded-full">
          <span>VS</span>
        </div>
      )}
    </>
  );
};

export default CompareCarCard;
