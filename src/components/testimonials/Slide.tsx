"use client";

import { A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "./testimonial_data";
import { SlideItem } from "./slideItem";
import styles from "./styles.module.scss"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const breakPoint = {
  500: {
    slidesPerView: 1,
  },
  700: {
    slidesPerView: 2,
  },
  800: {
    slidesPerView: 3,
  }
}

export function Slide() {
  return (
    <Swiper
      modules={[A11y]}
      spaceBetween={50}
      loop={true}
      breakpoints={breakPoint}
      slidesPerView={1}
      className={styles.swiper}
    >
        {testimonials.map((testimonial,index) => (
         <SwiperSlide className={styles.slide} key={index}>
            <SlideItem testimonial={testimonial} />
         </SwiperSlide>
        ))}
    </Swiper>
  );
}
