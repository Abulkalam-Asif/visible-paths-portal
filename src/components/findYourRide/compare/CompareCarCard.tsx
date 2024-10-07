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
      <div className="w-full bg-[#737475]/30 backdrop-blur-md border-[3px] border-white rounded-tr-[3.5rem] rounded-b-lg px-6 pt-5 text-white flex flex-col">
        <div className="relative z-0 w-full flex-1 flex flex-col">
          <div className="w-[calc(100%+4px)] translate-x-[-2px] relative z-[1]">
            <Image
              src={compareCarBgImg}
              alt="car"
              width={300}
              height={251.89}
              className="w-full h-auto"
            />
            <Image
              src={image}
              alt={name}
              width={300}
              height={300}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-auto"
            />
            <span className="absolute top-4 left-0 text-lg font-bold bg-black/20 px-3 py-1 border border-white rounded-l rounded-r-3xl">
              {name}
            </span>
          </div>
          <div className="flex-1 relative pt-24 pb-16 rounded-b-md -translate-y-16 border border-white flex flex-col items-center gap-2 bg-black/20 backdrop-blur-[2px] lg:pt-20">
            <h2 className="text-2xl font-bold bg-black/20 border border-white backdrop-blur-[2px] px-3 py-1 rounded">
              ${price}
            </h2>
            <div className="flex items-center gap-2 text-lg font-bold bg-black/20 border border-white backdrop-blur-[2px] px-3 py-1 rounded">
              <Image
                src={prosIcon}
                alt="pros"
                width={24}
                height={24}
                className="w-5 h-auto"
              />
              <h3>Pros</h3>
            </div>
            <ul className="list-disc w-3/4 text-sm space-y-1 font-bold mt-1 lg:text-base">
              {pros.map((pro, index) => (
                <li key={index}>{pro}</li>
              ))}
            </ul>
            <div className="mt-2 flex items-center gap-2 text-lg font-bold bg-black/20 border border-white backdrop-blur-[2px] px-3 py-1 rounded">
              <Image
                src={prosIcon}
                alt="cons"
                width={24}
                height={24}
                className="w-5 h-auto"
              />
              <h3>Cons</h3>
            </div>
            <ul className="list-disc w-3/4 text-sm space-y-1 font-bold mt-1 lg:text-base">
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
        <div className="hidden lg:flex self-center text-white text-3xl items-center justify-center font-black text-center bg-black w-16 h-16 min-w-16 min-h-16 rounded-full">
          <span>VS</span>
        </div>
      )}
    </>
  );
};

export default CompareCarCard;
