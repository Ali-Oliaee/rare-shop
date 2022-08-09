import { useState } from 'react'
import {
  Table, TableBody, TableCell, Typography, TableHead,
  TableRow, Paper, Button, TableContainer,
} from '@mui/material'
import Delete from '@mui/icons-material/Delete'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, decreaseCart } from '../../../redux/reducers/CartSlice'
import Counter from './Counter'

const ethers = require('ethers')

export default function CartTable({ orders, handleDelete }) {
  const columns = ['تصویر کالا', 'نام کالا', 'قیمت', 'تعداد', 'تعداد', ' حذف']
  const dispatch = useDispatch()
  const [account, setAccount] = useState(null)
  const handleDecrement = (product) => dispatch(decreaseCart(product[0]))
  const handleIncrement = (product) => dispatch(addToCart(product[0]))
  const [cartTotalQuantity, cartTotalAmount] = JSON.parse(localStorage.getItem('total'))
  const connectToWallet = () => {
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then((address) => {
          window.ethereum
            .request({
              method: 'eth_getBalance',
              params: [address[0], 'latest'],
            // eslint-disable-next-line max-len
            }).then((balance) => setAccount({ address, balance: ethers.utils.formatEther(balance) }))
        })
    } return new Error('No wallet detected')
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((item) => (
                <TableCell key={item} align="center">{item}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {orders?.cartItems?.map((item) => (
              <TableRow
                key={item?.productDetail?.id}
                sx={{
                  '&:last-child td, &:last-child th': {
                    border: 0,
                  },
                }}
              >
                <TableCell component="th" scope="row">
                  <TableCell align="center">
                    <img
                      style={{ maxWidth: 60 }}
                      // eslint-disable-next-line no-unsafe-optional-chaining
                      src={`http://127.0.0.1:8000${item?.productDetail?.image}`}
                      alt="تصویر کالا"
                    />
                  </TableCell>
                </TableCell>
                <TableCell align="center">
                  <Link className="link-style" to={`/product/${item?.productDetail?.id}`}>
                    {item?.productDetail?.name}
                  </Link>
                </TableCell>
                <TableCell align="center">
                  {item?.productDetail?.price}
                </TableCell>
                <TableCell align="center">
                  {item?.productDetail?.inventory}
                </TableCell>
                <TableCell align="center">
                  <Counter
                    data={item}
                    handleIncrement={handleIncrement}
                    handleDecrement={handleDecrement}
                    inventory={item?.productDetail?.inventory}
                  />
                </TableCell>
                <TableCell align="center">
                  <Button
                    onClick={() => handleDelete(item?.productDetail?.id)}
                  >
                    <Delete />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: 50,
        }}
      >
        <Typography typography="p">
          {`تعداد اقلام: ${cartTotalQuantity?.toLocaleString(
            'fa',
          )} عدد`}

        </Typography>
        <Typography typography="p">
          {` جمع کل:  ${cartTotalAmount?.toLocaleString(
            'fa',
          )} تومان`}

        </Typography>
        {account && (
        <div style={{ direction: 'ltr' }}>
          <h3>Account Connected</h3>
          <p>
            Address:
            {' '}
            {account.address}
          </p>
          <p>
            Balance:
            {' '}
            {account.balance}
          </p>
        </div>
        )}
        {/* <Link style={{ textDecoration: "none" }} to="/checkout/userInfo">
               <Button variant="contained" sx={{ backgroundColor: "green", marginLeft: 20 }}>
                  نهایی کردن سبد خرید
               </Button>
            </Link> */}
        <Button variant="contained" sx={{ backgroundColor: 'green', marginLeft: 20 }} onClick={connectToWallet}>
          نهایی کردن سبد خرید
        </Button>
      </div>
    </>
  )
}
