import Home from "./Home";
import Product from "./Product";
import Payment from "./Payment";
import Cart from "./Cart"
const routes = [
   {
      path: "/home",
      component: <Home />,
      isPrivate: false,
   },
   {
      path: "/product",
      component: <Product />,
      isPrivate: false,
   },
   {
      path: "/payment",
      component: <Payment />,
      isPrivate: false,
   },
   {
    path: "/cart",
    component: <Cart />,
    isPrivate: false,
 },
];
