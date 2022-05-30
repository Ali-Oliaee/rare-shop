import React, { useState, useEffect } from 'react';
import CartTable from '../../components/User/Cart/CartTable';
import { useDispatch, useSelector } from 'react-redux';
const Cart = () => {
  const [orders, setOrder] = useState("");
  const sdf = useSelector(state => state.cart)

  useEffect(() => {
     let items = JSON.parse(localStorage.getItem("cart"));
     if(items) {
       setOrder(items)
     }
  }, []);
  return (
    <div>
      <CartTable orders={orders} setOrder={setOrder}/>
    </div>
  );
}

export default Cart;
