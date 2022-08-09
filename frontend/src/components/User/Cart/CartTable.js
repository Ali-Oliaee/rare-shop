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
  const columns = ['تصویر کالا', 'نام کالا', 'قیمت', 'تعداد باقی مانده', 'تعداد', ' حذف']
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
    } else console.error('Please install MetaMask to use this dapp')
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
              <TableRow key={item?.productDetail?.id}>
                <TableCell component="th" scope="row">
                  <TableCell align="center">
                    <img
                      style={{ maxWidth: 40 }}
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
                  <Button onClick={() => handleDelete(item?.productDetail?.id)}>
                    <Delete />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="basket-info">
        <div>
          <Typography typography="p">
            {`تعداد اقلام: ${cartTotalQuantity?.toLocaleString('fa')} عدد`}
          </Typography>
          <Typography typography="p">
            {` جمع کل:  ${cartTotalAmount?.toLocaleString('fa')} تومان`}
          </Typography>
        </div>
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
            {' '}
            ETH
          </p>
        </div>
        )}
        <Button variant="contained" onClick={connectToWallet}>
          نهایی کردن سبد خرید
        </Button>
      </div>
    </>
  )
}
