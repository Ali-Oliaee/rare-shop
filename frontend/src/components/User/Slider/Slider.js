import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { BASE_URL } from "../../../core/constants";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Skeleton  from "@mui/material/Skeleton";
import "./Slider.scss";

export default function Slider(props) {
   const dispatch = useDispatch();
   const loading = useSelector((state) => state.loading);
   return (
      <>
         <div style={{ width: 500 }}>
            <h2>
               <Link className="mylink" to={`/products/${props.urlCategory}`}>
                  {props.findCategoryName(props.category)}
               </Link>
            </h2>
            <h3>{props?.description}</h3>
         </div>
         {/* {loading ? (
            <Skeleton variant="rectangular" width={500} height={550} />
         ) : ( */}
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
                  <SwiperSlide className="swiperImg" key={swipe.id}>
                     {
                        <Link to={`/product/${swipe.id}`}>
                           <img src={BASE_URL + swipe.image} />
                        </Link>
                     }
                  </SwiperSlide>
               ))}
            </Swiper>
         {/* )} */}
      </>
   );
}
