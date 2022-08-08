import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import Pagination from '@mui/material/Pagination'
import { useParams } from 'react-router-dom'
import ProductsApi from '../../api/Products'
import ProductCard from '../../components/User/Product/ProductCard'
import './styles.scss'

function AllProducts() {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [count, setCount] = useState(1)
  const cat = useParams()
  const getProducts = async () => {
    const clothesRes = await ProductsApi.gets({
      params: { _page: page, _limit: 8, categoryId: cat.category },
    })
    setCount(Math.ceil(clothesRes.headers['x-total-count'] / 8))
    setProducts(clothesRes.data)
  }

  const handlePageChange = (e, p) => setPage(p)
  useEffect(() => {
    getProducts()
  }, [page, cat, count])
  let categoryName = cat.category
  if (categoryName === 1) categoryName = 'پوشاک'
  else if (categoryName === 2) categoryName = 'کیف و کفش'
  else if (categoryName === 3) categoryName = 'اکسسوری'

  return (
    <div className="products-page">
      <Grid container ml={3} className="products-list">
        {products.map((product) => <ProductCard data={product} />)}
      </Grid>
      <Pagination
        className="pagination"
        hideNextButton={page === count}
        hidePrevButton={page === 1}
        page={page}
        count={count}
        onChange={handlePageChange}
      />
    </div>
  )
}

export default AllProducts
