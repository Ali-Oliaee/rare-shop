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
   const [orders, setOrder] = useState([]);
   const [orderData, setOrderData] = useState({
      customerDetail: {
         firstName: "",
         lastName: "",
         phone: null,
         shippingAddress: "",
      },
      orderDate: null,
      purchaseTotal: null,
      orderStatus: null,
      delivery: null,
      deliveredAt: null,
      orderItems: [
         {
            name: "",
            thumbnail: "",
            price: null,
            quantity: null,
         },
      ],
   });
   const cart = useSelector((state) => state.cart);
   const dispatch = useDispatch();
   const handleDelete = (id) => {
      dispatch(removeCartProducts(id));
   };
   useEffect(() => {
      let items = JSON.parse(localStorage.getItem("cart"));
      if (items) {
         setOrder(items);
      }
      dispatch(getTotals());
   }, [dispatch, cart]);
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
         {orders.length > 0 ? (
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
