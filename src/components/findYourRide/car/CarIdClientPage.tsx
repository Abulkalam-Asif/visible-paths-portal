import Image from "next/image";
import React from "react";
import {
  autoCheckIcon,
  drivenRedIcon,
  engineRedIcon,
  locationRedIcon,
  mileageRedIcon,
  vinIcon,
} from "@/assets/images";
import { FiCheckCircle } from "react-icons/fi";

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
        <div className="max-w-8xl mx-auto ~px-4/12 pb-12 ~/md:~pt-32/40 lg:~lg:~pt-28/44">
          <div className="bg-customCream rounded-2xl w-full p-4 flex flex-col gap-4">
            <div>
              <div className="flex flex-col items-center gap-2 text-center font-bold py-4 px-4 text-white rounded-lg bg-car bg-no-repeat bg-cover bg-center">
                <h2>{carData.tagline}</h2>
                <Image
                  src={carData.image}
                  alt={carData.name}
                  width={400}
                  height={400}
                />
              </div>
            </div>
            <div>
              <div className="bg-white border border-[#c7c7c7] rounded-lg px-4 py-4 space-y-2">
                <div className="flex items-center justify-between font-bold text-xl">
                  <h2>{carData.name}</h2>
                  <h2>${carData.price}</h2>
                </div>
                <p className="font-bold text-sm">{carData.description}</p>
                <div className="space-y-2 text-xxs whitespace-nowrap text-[#737373] font-bold">
                  <div className="flex items-center justify-between gap-1">
                    <p className="flex items-center gap-1">
                      <Image
                        src={mileageRedIcon}
                        alt="Mileage"
                        width={20}
                        height={20}
                        className="h-5 w-auto"
                      />
                      <span>{carData.mileage}</span>
                    </p>
                    <p className="flex items-center gap-1">
                      <Image
                        src={engineRedIcon}
                        alt="Engine"
                        width={20}
                        height={20}
                        className="h-5 w-auto"
                      />
                      <span>{carData.engine}</span>
                    </p>
                    <p className="flex items-center gap-1">
                      <Image
                        src={drivenRedIcon}
                        alt="Driven"
                        width={20}
                        height={20}
                        className="h-5 w-auto"
                      />
                      <span>{carData.driven}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image
                      src={vinIcon}
                      alt="vin"
                      width={25}
                      height={25}
                      className="w-5 h-auto"
                    />
                    <span>VIN: {carData.vin}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image
                      src={autoCheckIcon}
                      alt="AutoCheck"
                      width={150}
                      height={150}
                      className="h-6 w-auto"
                    />
                    <span>Vehicle history report</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiCheckCircle className="w-4 h-auto text-customRed" />
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
                  <div className="flex items-center gap-1">
                    <Image
                      src={locationRedIcon}
                      alt="Location"
                      width={20}
                      height={20}
                      className="w-5 h-auto"
                    />
                    <span>{carData.seller}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarIdClientPage;
