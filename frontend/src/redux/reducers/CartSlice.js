/* eslint-disable prefer-const */
/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
  cartItems: localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  userInfo: [],
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingIndex = state.cartItems.findIndex(
        (item) => item?.productDetail?.id === action.payload?.id,
      )
      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          count: state.cartItems[existingIndex].count + 1,
          productDetail: {
            ...state.cartItems[existingIndex].productDetail,
          },
        }
      } else {
        const tempProductItem = {
          ...action.payload,
        }
        state.cartItems.push(tempProductItem)

        toast.success('Product added to cart', {
          position: 'bottom-left',
        })
      }
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item?.productDetail?.id === action.payload?.id,
      )

      if (state.cartItems[itemIndex].count > 1) {
        state.cartItems[itemIndex].count -= 1

        toast.error(' از تعداد محصولات قابل سفارش یک عدد کاسته شد!', {
          position: 'bottom-left',
        })
      } else if (state.cartItems[itemIndex].count === 1) {
        removeCartProducts(action.payload)
        // const nextCartItems = state.cartItems.filter(
        //    (item) => item.id !== action.payload.id
        // );

        // state.cartItems = nextCartItems;

        // toast.error("محصول با موفقیت از سبد خرید شما پاک شد.", {
        //    position: "bottom-left",
        // });
      }
    },
    removeCartProducts(state, action) {
      const nextCartItems = state.cartItems.filter(
        (item) => item?.productDetail?.id !== action.payload,
      )

      state.cartItems = nextCartItems

      toast.error('محصول با موفقیت از سبد خرید شما پاک شد.', {
        position: 'bottom-left',
      })

      return state
    },
    getUserInfo(state, action) {
      state.userInfo = action.payload
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { count } = cartItem
          const price = cartItem.productDetail?.price
          const itemTotal = price * count
          cartTotal.total += itemTotal
          cartTotal.quantity += count

          return cartTotal
        },
        {
          total: 0,
          quantity: 0,
        },
      )
      total = parseFloat(total.toFixed(2))
      state.cartTotalQuantity = quantity
      state.cartTotalAmount = total
      localStorage.setItem(
        'total',
        JSON.stringify([state.cartTotalQuantity, state.cartTotalAmount]),
      )
    },
    clearCart(state, action) {
      state.cartItems = []
    },
  },
})

export const {
  addToCart,
  decreaseCart,
  removeCartProducts,
  getTotals,
  clearCart,
  getUserInfo,
} = CartSlice.actions
export default CartSlice.reducer
