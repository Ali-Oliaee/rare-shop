import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Slider from '../../components/User/Slider/Slider'
import ProductsApi from '../../api/Products'
import AdminApi from '../../api/AdminApi'
import Image from '../../assets/pic/shoes.jpeg'
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/bundle'

const Container1 = styled('div')`
   background: linear-gradient(to right, white, #f4ed64);
   display: flex;
   alignitems: center;
   padding: 0 50px;
   margin: 50px;
`
const DivImage = styled('div')`
   width: 100%;
   height: 40vh;
   background-image: url(${Image});
   background-position: center;
   background-size: cover;
   background-repeat: norepeat;
   background-attachment: fixed;
`
const Container2 = styled('div')`
   background: linear-gradient(to left, white, #ff5d8f);
   display: flex;
   flex-direction: row-reverse;
   alignitems: center;
   padding: 0 50px;
   margin: 50px;
`
const Container3 = styled('div')`
   background: linear-gradient(to right, white, #147df5);
   display: flex;
   alignitems: center;
   padding: 0 50px;
   margin: 50px;
`
const Container4 = styled('div')`
   background: linear-gradient(to right, white, #e9ff70);
   display: flex;
   alignitems: center;
   padding: 0 50px;
   margin: 50px;
`
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
    <>
      <Container1>
        <Slider
          category={1}
          data={products[0]}
          color="#F4ED64"
          description={Categories[0]?.description}
          urlCategory="clothes"
          findCategoryName={findCategoryName}
        />
      </Container1>
      <DivImage />
      <Container2>
        <Slider
          category={2}
          color="#ff5d8f"
          data={products[1]}
          description={Categories[1]?.description}
          urlCategory="shoes-bag"
          findCategoryName={findCategoryName}
        />
      </Container2>
      <DivImage />
      <Container3>
        <Slider
          color="#147df5"
          category={3}
          data={products[2]}
          description={Categories[2]?.description}
          urlCategory="accessory"
          findCategoryName={findCategoryName}
        />
      </Container3>
    </>
  )
}

export default Home
