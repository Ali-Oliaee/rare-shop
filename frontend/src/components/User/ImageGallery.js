import React from 'react'
import MuiImageSlider from 'mui-image-slider'

function Imagegallery({ images }) {
  const gallery = []
  images.map((item) => gallery.push(`http://127.0.0.1:8000${item}`))
  return <MuiImageSlider images={gallery} />
}

export default Imagegallery
