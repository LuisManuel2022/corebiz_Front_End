import React, { useEffect, useState } from "react";
import Products from "../Products";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./home.css";

const Home = () => {
  const [ProductsData, setProductsData] = useState([]);

  const peticionGet = () => {
    fetch("https://corebiz-test.herokuapp.com/api/v1/products")
      .then((response) => response.json())
      .then((data) => {
        setProductsData(data);
      });
  };
  useEffect(() => {
    peticionGet();
  }, []);

  return (
    <div className="products">
      <h1>Más Vendidos</h1>
      <hr />
      <div className="container_products ">
        <Swiper
          className="swiper_productos "
          modules={[Navigation, Pagination]}
          navigation
          loop="false"
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 2,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 2,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 2,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 2,
            },
          }}
        >
          {ProductsData.map((product, i) => (
            <SwiperSlide key={i}>
              <Products product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
