import { lazy, Suspense } from 'react'
import { CircularProgress } from '@mui/material'
import CheckoutForm from '../pages/User/CheckoutForm'
import Notfoundpage from '../pages/User/NotFoundPage'
import ResultPage from '../pages/User/Result'

const Home = lazy(() => import('../pages/User/Home'))
const Product = lazy(() => import('../pages/User/Product'))
const Cart = lazy(() => import('../pages/User/Cart'))
const Login = lazy(() => import('../components/Admin/Login'))
const UserLayout = lazy(() => import('../components/User/Layout'))
const Inventory = lazy(() => import('../pages/Admin/Inventory'))
const Order = lazy(() => import('../pages/Admin/Order'))
const ProductsTable = lazy(() => import('../pages/Admin/Products'))
const AllProducts = lazy(() => import('../pages/User/AllProducts'))

const routes = [
  {
    path: '/',
    component: (
      <Suspense fallback={<CircularProgress />}>
        <UserLayout>
          <Home />
        </UserLayout>
      </Suspense>
    ),
    isPrivate: false,
  },

  {
    path: '/products/category/:category',
    component: (
      <Suspense fallback={<CircularProgress />}>
        <UserLayout>
          <AllProducts />
        </UserLayout>
      </Suspense>
    ),
    isPrivate: false,
  },
  {
    path: '/checkout/cart',
    component: (
      <Suspense fallback={<CircularProgress />}>
        <UserLayout>
          <Cart />
        </UserLayout>
      </Suspense>
    ),
    isPrivate: false,
  },
  {
    path: '/auth/login',
    component: (
      <Suspense fallback={<CircularProgress />}>
        <Login />
      </Suspense>
    ),
    isPrivate: false,
  },
  {
    path: '/dashboard/products',
    component: (
      <Suspense fallback={<CircularProgress />}>
        <ProductsTable />
      </Suspense>
    ),
    isPrivate: true,
  },
  {
    path: '/dashboard/inventory',
    component: (
      <Suspense fallback={<CircularProgress />}>
        <Inventory />
      </Suspense>
    ),
    isPrivate: false,
  },
  {
    path: '/dashboard/order',
    component: (
      <Suspense fallback={<CircularProgress />}>
        <Order />
      </Suspense>
    ),
    isPrivate: false,
  },
  {
    path: '/product/:id',
    component: (
      <Suspense fallback={<CircularProgress />}>
        <UserLayout>
          <Product />
        </UserLayout>
      </Suspense>
    ),
    isPrivate: false,
  },
  {
    path: '*',
    component: <Notfoundpage />,
    isPrivate: false,
  },
  {
    path: '/checkout/userInfo',
    component: <CheckoutForm />,
    isPrivate: false,
  },
  {
    path: '/result',
    component: <ResultPage />,
    isPrivate: false,
  },
]

export default routes
