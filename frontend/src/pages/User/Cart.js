import React, { useState, useEffect } from 'react';
import CartTable from '../../components/User/Cart/CartTable';
import { useDispatch, useSelector } from 'react-redux';
const Cart = () => {
  const [cartOrders, setCartOrders] = useState([])
  const dispatch = useDispatch();
  
  return (
    <div>
      <CartTable/>
    </div>
  );
}

export default Cart;
