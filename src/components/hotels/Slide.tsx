"use client";

import { A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { SlideItem } from "./slideItem";
import styles from "./styles.module.scss"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { hotels } from "./hotels_data";


const breakPoint = {
  500: {
    slidesPerView: 1,
  },
  700: {
    slidesPerView: 2,
  },
  1000: {
    slidesPerView: 3,
  }
}

export function HotelSlide() {
  return (
    <Swiper
      modules={[A11y]}
      spaceBetween={50}
      loop={true}
      breakpoints={breakPoint}
      slidesPerView={1}
      className={styles.swiper}
    >
        {hotels.map((hotel,index) => (
         <SwiperSlide className={styles.slide} key={index}>
            <SlideItem hotel={hotel} />
         </SwiperSlide>
        ))}
    </Swiper>
  );
}
