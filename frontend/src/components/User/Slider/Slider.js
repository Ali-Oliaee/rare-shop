/* eslint-disable react/destructuring-assignment */
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper'
import { Link } from 'react-router-dom'
import './Slider.scss'

export default function Slider(props) {
  return (
    <>
      <div style={{ width: 500 }}>
        <h2>
          <Link
            className="mylink"
            to={`/products/${props.urlCategory}`}
          >
            {props.findCategoryName(props.category)}
          </Link>
        </h2>
        <h3>{props?.description}</h3>
      </div>
      <Swiper
        style={{
          '--swiper-pagination-color': `${props.color}`,
        }}
        spaceBetween={30}
        centeredSlides
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {props.data?.map((swipe) => (
          <SwiperSlide className="swiperImg" key={swipe.id}>
            <Link
              style={{ width: '100%' }}
              to={`/product/${swipe.id}`}
            >
              {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
              <img src={process.env.BASE_URL + swipe.image} alt="image" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* eslint-disable-next-line max-len */}
      {/* <swiper :style="" :loop="false" :spaceBetween="10" :navigation="true" :thumbs="{ swiper: thumbsSwiper }" class="w-full aspect-w-1 aspect-h-1"> */}
      {/* )} */}
    </>
  )
}
