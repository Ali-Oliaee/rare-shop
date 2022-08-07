import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Lottie from 'react-lottie'
import { Typography } from '@mui/material'
import styled from 'styled-components'
import {
  removeCartProducts,
  getTotals,
} from '../../redux/reducers/CartSlice'
import CartTable from '../../components/User/Cart/CartTable'

const Wrapper = styled('div')`
background: linear-gradient(0.25turn, #00c3ff,#ffff1c);
padding: 50px;
margin: 0;
`
function Cart() {
  const [orders, setOrders] = useState([])

  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    setOrders(cart)
    dispatch(getTotals())
  }, [cart])

  const handleDelete = (id) => {
    dispatch(removeCartProducts(id))
  }
  const defaultOptions = {
    loop: true,
    autoplay: true,
    // eslint-disable-next-line global-require
    animationData: require('../../assets/animations/empty-cart.json'),
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <Wrapper>
      {orders?.cartItems?.length > 0 ? (
        <CartTable orders={orders} handleDelete={handleDelete} />
      ) : (
        <>
          <Lottie options={defaultOptions} height={400} width={400} />
          <Typography variant="h3" sx={{ textAlign: 'center' }}>
            سبد خرید شما خالیست!
          </Typography>
        </>
      )}
    </Wrapper>
  )
}

export default Cart
