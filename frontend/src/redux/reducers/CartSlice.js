import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const getPuchaseTotal = (items) => {
   let cartTotalAmount = Object.values(items)
      .reduce(
         (total, product) => total + product.productDetail.price * items.count,
         0
      )
      .toFixed(2);
   return cartTotalAmount;
};
const initialState = {
   cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
   cartTotalQuantity: 0,
   cartTotalAmount: 0,
};
export const CartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      addToCart: (state, action) => {
         console.log(action.payload);
         const existingIndex = state.cartItems.findIndex(
            (item) =>
               item?.productDetail?.id === action.payload?.productDetail?.id
         );
         if (existingIndex >= 0) {
            state.cartItems[existingIndex] = {
               count: state.cartItems[existingIndex].count + 1,
               productDetail: {
                  ...state.cartItems[existingIndex].productDetail,
               },
            };
         } else {
            let tempProductItem = {
               ...action.payload,
               count: 1,
            };
            state.cartItems.push(tempProductItem);
            toast.success("Product added to cart", {
               position: "bottom-left",
            });
         }
         localStorage.setItem("cart", JSON.stringify(state));
      },
      decreaseCart(state, action) {
         const itemIndex = state.cartItems.findIndex(
            (item) => item.id === action.payload.id
         );

         if (state.cartItems[itemIndex].count > 1) {
            state.cartItems[itemIndex].count -= 1;

            toast.info("Decreased product quantity", {
               position: "bottom-left",
            });
         } else if (state.cartItems[itemIndex].count === 1) {
            const nextCartItems = state.cartItems.filter(
               (item) => item.id !== action.payload.id
            );

            state.cartItems = nextCartItems;

            toast.error("Product removed from cart", {
               position: "bottom-left",
            });
         }

         localStorage.setItem("cart", JSON.stringify(state.cartItems));
      },
      removeCartProducts(state, action) {
         state.cartItems.map((cartItem) => {
            if (cartItem?.productDetail?.id === action.payload) {
               const nextCartItems = state.cartItems.filter(
                  (item) => item?.productDetail?.id !== cartItem?.productDetail?.id
               );
               state.cartItems = nextCartItems;

               toast.error("Product removed from cart", {
                  position: "bottom-left",
               });
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
            return state;
         });
      },
      getTotals(state, action) {
         let { total, quantity } = state.cartItems.reduce(
            (cartTotal, cartItem) => {
               console.log(cartItem);
               const { price, count } = cartItem;
               const itemTotal = price * count;

               cartTotal.total += itemTotal;
               cartTotal.quantity += count;

               return cartTotal;
            },
            {
               total: 0,
               quantity: 0,
            }
         );
         total = parseFloat(total.toFixed(2));
         state.cartTotalQuantity = quantity;
         state.cartTotalAmount = total;
      },
      clearCart(state, action) {
         state.cartItems = [];
         localStorage.setItem("cart", JSON.stringify(state.cartItems));
         toast.error("Cart cleared", { position: "bottom-left" });
      },
   },
});

export const {
   addToCart,
   decreaseCart,
   removeCartProducts,
   getTotals,
   clearCart,
} = CartSlice.actions;
export default CartSlice.reducer;
