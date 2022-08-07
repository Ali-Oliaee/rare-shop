import React from 'react'
// import MuiImageSlider from "mui-image-slider";

function Imagegallery({ images }) {
  const gallery = []
  // eslint-disable-next-line array-callback-return
  images.map((item) => {
    gallery.push(process.env.BASE_URL + item)
  })
  //  return <MuiImageSlider images={gallery} />;
  return (
    <h3>vdfvd</h3>
  )
}

export default Imagegallery
