import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import relogio from "../../assets/highlights/relogio.png";
import iphone from "../../assets/highlights/iphone.png";
import jbl from "../../assets/highlights/jbl.png";

import Image from "next/image";

export default function Carousel() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const goToNext = () => {
    sliderRef.current?.slickNext?.();
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev?.();
  };

  return (
    <div>
      <Slider ref={sliderRef} {...settings}>
        <div className="w-full sm:w-1/2 lg:w-1/3 h-6 rounded-lg">
          <Image src={relogio} alt="Relógio" className="rounded-lg" />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 h-64 rounded-lg">
          <Image src={iphone} alt="Iphone" className="rounded-lg" />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 h-64 rounded-lg">
          <Image src={jbl} alt="JBL" className="rounded-lg" />
        </div>
      </Slider>

      <div className="mt-4 flex justify-between">
        <button
          onClick={goToPrev}
          className="bg-blueMarine-600 text-white font-bold py-6 px-6 rounded-full"
        >
          <IoIosArrowBack className="text-blue-500" />
        </button>
        <button
          onClick={goToNext}
          className="bg-blueMarine-600 text-white font-bold py-6 px-6 rounded-full"
        >
          <IoIosArrowForward className="text-blue-500" />
        </button>
      </div>
    </div>
  );
}
