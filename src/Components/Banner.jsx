"use client";

import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperData = [
  {
    name: "Fiddle Leaf Fig",
    slogan: "Bright light, happy leaves!",
  },
  {
    name: "Snake Plant",
    slogan: "Water sparingly, thrive effortlessly.",
  },
  {
    name: "Monstera",
    slogan: "Filter your air and your worries.",
  },
];

export default function Banner() {
  return (
    <div className="mx-auto bg-gradient-to-r from-green-400 via-green-300 to-green-400 py-4 mt-1">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="overflow-hidden"
      >
        {swiperData.map((swiper, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex flex-col justify-center items-center pt-10 pb-15">
              <h3 className="text-2xl md:text-3xl font-bold">{swiper.name}</h3>
              <p className="text-lg md:text-xl text-gray-600 mt-2">
                {swiper.slogan}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
