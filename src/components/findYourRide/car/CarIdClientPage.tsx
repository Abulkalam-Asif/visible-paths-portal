import Image from "next/image";
import React from "react";
import {
  autoCheckIcon,
  drivenRedIcon,
  engineRedIcon,
  locationRedIcon,
  mileageRedIcon,
  padlockcon,
  vinIcon,
} from "@/assets/images";
import { FiCheckCircle } from "react-icons/fi";
import CarImagesCarousel from "./CarImagesCarousel";

type CarIdClientPageProps = {
  carData: {
    image: string;
    name: string;
    price: string;
    description: string;
    tagline: string;
    images: string[];
    mileage: string;
    engine: string;
    driven: string;
    vin: string;
    properties: string[];
    seller: string;
  };
};

const CarIdClientPage = ({ carData }: CarIdClientPageProps) => {
  return (
    <>
      <section className="min-h-screen h-auto bg-main bg-no-repeat bg-top bg-cover">
        <div className="max-w-8xl mx-auto ~px-4/8 pb-12 ~/md:~pt-32/40 lg:~lg:~pt-28/44">
          <div className="bg-customCream rounded-2xl w-full p-4 flex flex-col gap-4 lg:flex-row lg:~lg:~px-5/8 lg:~lg:~py-7/10 lg:rounded-3xl lg:gap-6">
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col items-center gap-2 text-center font-bold py-4 px-4 text-white rounded-lg bg-car bg-no-repeat bg-cover bg-center ~/md:~text-xl/2xl sm:gap-4 sm:py-6 lg:~lg:~text-2xl/4xl lg:~lg:~gap-8/12 lg:~lg:~px-7/10 lg:~lg:~py-8/12 lg:rounded-2xl">
                <h2 className="max-w-[30ch] mx-auto">{carData.tagline}</h2>
                <Image
                  src={carData.image}
                  alt={carData.name}
                  width={400}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <CarImagesCarousel
                images={[
                  "/temp/carousel1.png",
                  "/temp/carousel2.png",
                  "/temp/carousel3.png",
                ]}
              />
            </div>
            <div className="w-full space-y-4 flex flex-col items-center lg:w-1/2 lg:~lg:~space-y-4/6">
              <div className="w-full bg-white border border-[#c7c7c7] rounded-lg px-4 py-4 ~/md:~space-y-2/4 lg:~lg:~px-5/7 lg:~lg:~py-6/8 lg:~lg:~space-y-3/5">
                <div className="flex items-center justify-between font-bold ~/md:~text-xl/3xl lg:~lg:~text-2xl/4xl">
                  <h2>{carData.name}</h2>
                  <h2>${carData.price}</h2>
                </div>
                <p className="font-bold ~/md:~text-sm/base lg:~lg:~text-base/xl">
                  {carData.description}
                </p>
                <div className="~/md:~space-y-2/4 ~/md:~text-xxs/sm whitespace-nowrap text-[#737373] font-bold lg:~lg:~text-sm/lg">
                  <div className="flex items-center ~/md:~gap-1/3">
                    <p className="flex items-center ~/md:~gap-1/3">
                      <Image
                        src={mileageRedIcon}
                        alt="Mileage"
                        width={20}
                        height={20}
                        className="~/md:~h-5/8 w-auto lg:~lg:~w-7/10"
                      />
                      <span>{carData.mileage}</span>
                    </p>
                    <p className="flex items-center ~/md:~gap-1/3">
                      <Image
                        src={engineRedIcon}
                        alt="Engine"
                        width={20}
                        height={20}
                        className="~/md:~h-5/8 w-auto lg:~lg:~w-7/10"
                      />
                      <span>{carData.engine}</span>
                    </p>
                    <p className="flex items-center ~/md:~gap-1/3">
                      <Image
                        src={drivenRedIcon}
                        alt="Driven"
                        width={20}
                        height={20}
                        className="~/md:~h-5/8 w-auto lg:~lg:~w-7/10"
                      />
                      <span>{carData.driven}</span>
                    </p>
                  </div>
                  <div className="flex items-center ~/md:~gap-1/3">
                    <Image
                      src={vinIcon}
                      alt="vin"
                      width={25}
                      height={25}
                      className="~/md:~w-5/8 h-auto"
                    />
                    <span>VIN: {carData.vin}</span>
                  </div>
                  <div className="flex items-center ~/md:~gap-1/3">
                    <Image
                      src={autoCheckIcon}
                      alt="AutoCheck"
                      width={200}
                      height={200}
                      className="~/md:~h-6/10 w-auto lg:~lg:~h-10/14"
                    />
                    <span>Vehicle history report</span>
                  </div>
                  <div className="flex items-center ~/md:~gap-1/3">
                    <FiCheckCircle className="~/md:~w-4/7 h-auto text-customRed" />
                    <ul className="flex items-center flex-wrap">
                      {carData.properties.map((property, index) => (
                        <li key={index}>
                          {property}
                          {index < carData.properties.length - 1 && (
                            <span className="mr-1">,</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center ~/md:~gap-1/3">
                    <Image
                      src={locationRedIcon}
                      alt="Location"
                      width={20}
                      height={20}
                      className="~/md:~w-5/8 h-auto"
                    />
                    <span>{carData.seller}</span>
                  </div>
                </div>
              </div>
              <button className="flex items-center gap-2 bg-customRed px-4 py-2 rounded-lg text-white font-bold lg:~lg:~text-base/2xl lg:~lg:~px-4/6 lg:~lg:~py-2/4 lg:~lg:~gap-2/4">
                <Image
                  src={padlockcon}
                  alt="Lock"
                  width={20}
                  height={20}
                  className="~/md:~w-4/6 h-auto lg:~lg:~w-6/8"
                />
                <span>Unlock Your Financing</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarIdClientPage;
