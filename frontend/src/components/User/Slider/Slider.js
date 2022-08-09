import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper'
import { Link } from 'react-router-dom'
import './Slider.scss'

export default function Slider({
  urlCategory, category, description, color, findCategoryName, data,
}) {
  return (
    <div>
      <div>
        <h2>
          <Link className="mylink" to={`/products/${urlCategory}`}>
            {findCategoryName(category)}
          </Link>
        </h2>
        <h3>{description}</h3>
      </div>
      <Swiper
        style={{ '--swiper-pagination-color': `${color}` }}
        spaceBetween={30}
        centeredSlides
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {data?.map((swipe) => (
          <SwiperSlide className="swiperImg" key={swipe.id}>
            <Link style={{ width: '100%' }} to={`/product/${swipe.id}`}>
              <img src={`http://127.0.0.1:8000${swipe.image}`} alt="product" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
