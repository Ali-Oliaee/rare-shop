import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductApi } from "../../../api/Products"; 
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  const [products, setProducts] = useState([]);
 
  const getProducts = async () => {
    const res = await ProductApi.gets({
       params: { _limit: 6 },
    });
    setProducts(res.data);

 };
 
  useEffect(() => {
//      getProducts();
  });
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
      
      </Swiper>
    </>
  );
}
