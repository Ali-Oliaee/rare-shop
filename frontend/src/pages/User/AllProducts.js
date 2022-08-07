import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import Pagination from '@mui/material/Pagination'
import { makeStyles } from '@mui/styles'
import { useParams } from 'react-router-dom'
import ProductsApi from '../../api/Products'
import Breadcrumb from '../../components/User/Bradcrumb'
import ProductCard from '../../components/User/Product/ProductCard'

const useStyle = makeStyles({
  root: {
    '& .MuiButtonBase-root svg': {
      transform: 'rotate(180deg)',
    },
    '& .MuiPagination-root ul': {
      justifyContent: 'center',
    },
  },
})
function AllProducts() {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [count, setCount] = useState(1)
  const classes = useStyle()
  const cat = useParams()
  const getProducts = async () => {
    const clothesRes = await ProductsApi.gets({
      params: { _page: page, _limit: 8, categoryId: cat.category },
    })
    setCount(Math.ceil(clothesRes.headers['x-total-count'] / 8))
    setProducts(clothesRes.data)
  }

  const handlePageChange = (e, p) => {
    setPage(p)
  }
  useEffect(() => {
    getProducts()
  }, [page, cat, count])
  let categoryName = cat.category
  if (categoryName === 1) categoryName = 'پوشاک'
  else if (categoryName === 2) categoryName = 'کیف و کفش'
  else if (categoryName === 3) categoryName = 'اکسسوری'

  return (
    <div className={classes.root}>
      <Breadcrumb category={categoryName} />
      <Grid container ml={3}>
        {products.map((good) => (
          <Grid item my={3} xs={12} sm={6} md={4} lg={3} key={good.id}>
            <ProductCard data={good} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        page={page}
        count={count}
        onChange={handlePageChange}
      />
      {' '}
    </div>
  )
}

export default AllProducts
