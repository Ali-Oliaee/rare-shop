import React, { useState, useEffect } from "react";
import CartTable from "../../components/User/Cart/CartTable";
import { useDispatch, useSelector } from "react-redux";
import {
   removeCartProducts,
   getTotals,
   clearCart,
} from "../../redux/reducers/CartSlice";
import Lottie from "react-lottie";
import { Typography } from "@mui/material";
const Cart = () => {
   const [orders, setOrders] = useState([]);

   const cart = useSelector((state) => state.cart);
   const dispatch = useDispatch();
   
   useEffect(() => {
      setOrders(cart);
      dispatch(getTotals());
   }, [cart]);

   const handleDelete = (id) => {
      dispatch(removeCartProducts(id));
   };
   const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: require("../../assets/animations/empty-cart.json"),
      rendererSettings: {
         preserveAspectRatio: "xMidYMid slice",
      },
   };
   return (
      <>
         {orders?.cartItems?.length > 0 ? (
            <CartTable orders={orders} handleDelete={handleDelete} />
         ) : (
            <>
               <Lottie options={defaultOptions} height={400} width={400} />
               <Typography variant="h3" sx={{ textAlign: "center" }}>
                  سبد خرید شما خالیست!
               </Typography>
            </>
         )}
      </>
   );
};

export default Cart;
