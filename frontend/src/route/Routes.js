import { Route, Routes } from 'react-router-dom'
import CheckoutForm from '../pages/User/CheckoutForm'
import Notfoundpage from '../pages/User/NotFoundPage'
import ResultPage from '../pages/User/Result'
import Home from '../pages/User/Home'
import AllProducts from '../pages/User/AllProducts'
import Product from '../pages/User/Product'
import Cart from '../pages/User/Cart'
// import Login from '../pages/Admin/Login'
// import UserLayout from '../pages/User/Layout'
import Inventory from '../pages/Admin/Inventory'
import Order from '../pages/Admin/Order'
import ProductsTable from '../pages/Admin/Products'
/**
* ? Learning
const Product = lazy(() => import('../pages/User/Product'))
*/

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout/cart" element={<Cart />} />
      {/* <Route path="/auth/login" element={<Login />} /> */}
      <Route path="/dashboard/products" element={<ProductsTable />} />
      <Route path="/dashboard/inventory" element={<Inventory />} />
      <Route path="/dashboard/order" element={<Order />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="*" element={<Notfoundpage />} />
      <Route path="/checkout/userInfo" element={<CheckoutForm />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="/products/category/:category" element={<AllProducts />} />
    </Routes>
  )
}

export default MainRouter
