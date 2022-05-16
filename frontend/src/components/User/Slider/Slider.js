import React, { useRef, useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { AdminApi } from "../../../api/AdminApi";
import { Autoplay, Pagination, Navigation } from "swiper";
import { BASE_URL } from "../../../core/constants";
import "./Slider.scss";
import { Link } from "react-router-dom";

export default function Slider(props) {
   const [Categories, setCategories] = useState([]);
   const inside = async () => {
      const categoryIdRes = await AdminApi.getCategoryId();
      setCategories(categoryIdRes.data);
   };
   useEffect(() => {
      inside();
   }, []);

   const findCategoryName = (id) => {
      let requestedCategoryObject = Object.values(Categories).find(
         (el) => el.id === id
      );
       return requestedCategoryObject?.name;
   };
   return (
      <>
         <Link to={`/products/${props.urlCategory}`}>
            {findCategoryName(props.category)}
         </Link>
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
