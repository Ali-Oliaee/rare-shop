import React, { useRef, useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductApi } from "../../../api/Products";
import { Autoplay, Pagination, Navigation } from "swiper";
import { BASE_URL } from "../../../core/constants";
import "./Slider.scss"
import { Link } from "react-router-dom";


export default function Slider(props) {
   
   return (
      <>
      <Link to={`/products${props.category}`}>{props.category}</Link>
         <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
               delay: 3500,
               disableOnInteraction: false,
            }}
            pagination={{
               clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
         >
            {props.data?.map((swipe) => (
               <SwiperSlide>{<img src={BASE_URL + swipe.image} />}</SwiperSlide>
            ))}
         </Swiper>
      </>
   );
}
