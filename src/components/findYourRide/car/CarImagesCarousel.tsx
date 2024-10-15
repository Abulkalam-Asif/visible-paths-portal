"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import Image from "next/image";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

type CarImagesCarouselProps = {
  images: string[];
};

const CarImagesCarousel = ({ images }: CarImagesCarouselProps) => {
  const sliderRef = useRef<Slider>(null);

  const previousSlide = () => {
    sliderRef.current?.slickPrev();
  };

  const nextSlide = () => {
    sliderRef.current?.slickNext();
  };

  const CustomPrevArrow = (props: any) => (
    <button
      className="custom-arrows prev-arrow"
      onClick={props.onClick}
      style={{ display: "none" }}
    />
  );

  const CustomNextArrow = (props: any) => (
    <button
      className="custom-arrows next-arrow"
      onClick={props.onClick}
      style={{ display: "none" }}
    />
  );

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      <section className="w-full relative px-6 pt-4 xl:px-8">
        <div>
          <Slider {...sliderSettings} ref={sliderRef}>
            {images?.map((image: string, index: number) => (
              <div key={index} className="~/md:~h-20/32 lg:~lg:~h-28/36">
                <Image
                  src={image}
                  alt="car"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="w-full absolute top-1/2 left-0 -translate-y-1/2 flex items-center justify-between">
          <button onClick={previousSlide}>
            <FaAnglesLeft
              size={24}
              className="text-customRed w-6 h-auto xl:w-7"
            />
          </button>
          <button onClick={nextSlide}>
            <FaAnglesRight
              size={24}
              className="text-customRed w-6 h-auto xl:w-7"
            />
          </button>
        </div>
      </section>
    </>
  );
};

export default CarImagesCarousel;
