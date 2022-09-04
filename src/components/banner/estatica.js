import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import car1 from "../img/car1.jpg";
import car2 from "../img/car2.jpg";
import car3 from "../img/car3.jpg";
import car4 from "../img/car4.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./estatica.css";

// import required modules
import { Navigation, Pagination } from "swiper";

export default function Estatica() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        
        loop="true"
        pagination={{ 
          clickable: true, 
          dynamicBullets: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={car1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={car2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={car3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={car4} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
