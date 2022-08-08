import React from 'react'
import MuiImageSlider from 'mui-image-slider'

function Imagegallery({ images }) {
  const gallery = []
  images.map((item) => gallery.push(process.env.BASE_URL + item))
  return <MuiImageSlider images={gallery} />
}

export default Imagegallery
