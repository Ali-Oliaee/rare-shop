import React from "react";
import MuiImageSlider from "mui-image-slider";
import { BASE_URL } from "../../core/constants";
const Imagegallery = ({images}) => {
  const gallery = []
  images.map(item => {
    gallery.push(BASE_URL+item)
  })
   return <MuiImageSlider images={gallery} />;
};

export default Imagegallery;
