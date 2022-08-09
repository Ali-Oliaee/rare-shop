import React, { useState, useEffect } from 'react'
import Slider from '../../components/User/Slider/Slider'
import ProductsApi from '../../api/Products'
import AdminApi from '../../api/AdminApi'
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/bundle'

function Home() {
  const [products, setProducts] = useState([])
  const [Categories, setCategories] = useState([])

  const getProducts = async () => {
    const clothesRes = await ProductsApi.gets({
      params: { categoryId: 1, _limit: 6 },
    })
    const shoesRes = await ProductsApi.gets({
      params: { categoryId: 2, _limit: 6 },
    })
    const accessoryRes = await ProductsApi.gets({
      params: { categoryId: 3, _limit: 6 },
    })
    setProducts([clothesRes.data, shoesRes.data, accessoryRes.data])
  }
  const getCategoryData = async () => {
    const categoryIdRes = await AdminApi.getCategoryId()
    setCategories(categoryIdRes.data)
  }

  const findCategoryName = (id) => {
    const requestedCategoryObject = Object.values(Categories).find(
      (el) => el.id === id,
    )
    return requestedCategoryObject?.name
  }

  useEffect(() => {
    getCategoryData()
    getProducts()
  }, [])

  return (
    <div className="home-page">
      <section className="container">
        <div className="description">
          به فروشگاه ما خوش آمدید
          <br />
          <br />
          خرید انواع پوشاک و کفش به سرعت و با کیفیت
        </div>
        <Slider
          category={1}
          data={products[0]}
          color="#1f8fb8"
          description={Categories[0]?.description}
          urlCategory="clothes"
          findCategoryName={findCategoryName}
        />
      </section>
      <div className="divider" />
      <section className="container">
        <Slider
          category={2}
          color="#ff5d8f"
          data={products[1]}
          description={Categories[1]?.description}
          urlCategory="shoes-bag"
          findCategoryName={findCategoryName}
        />
        <div className="description">
          خرید انواع کفش و کاپشن
          <br />
          به سرعت و با کیفیت
        </div>
      </section>
      <div className="divider" />
      <section className="container">
        <div className="description">
          خرید انواع کفش و کاپشن
          <br />
          به سرعت و با کیفیت
        </div>
        <Slider
          color="#147df5"
          category={3}
          data={products[2]}
          description={Categories[2]?.description}
          urlCategory="accessory"
          findCategoryName={findCategoryName}
        />
      </section>
    </div>
  )
}

export default Home
