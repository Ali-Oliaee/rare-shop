import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Delete from '@mui/icons-material/Delete'
import { makeStyles } from '@mui/styles'
import Button from '@mui/material/Button'
import { useDispatch } from 'react-redux'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { addToCart, decreaseCart } from '../../../redux/reducers/CartSlice'
import Counter from './Counter'

const ethers = require('ethers')

const useStyle = makeStyles({
  root: {
    width: '70%',
    margin: 'auto',
  },
})

export default function CartTable({ orders, handleDelete }) {
  const columns = ['تصویر کالا', 'نام کالا', 'قیمت', 'تعداد', 'تعداد', ' حذف']
  const dispatch = useDispatch()
  const classes = useStyle()
  const [account, setAccount] = useState(null)
  const handleDecrement = (product) => dispatch(decreaseCart(product[0]))
  const handleIncrement = (product) => dispatch(addToCart(product[0]))
  const [cartTotalQuantity, cartTotalAmount] = JSON.parse(localStorage.getItem('total'))
  // eslint-disable-next-line consistent-return
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
    } else return alert('install metamask extension!!')
  }

  return (
    <>
      <TableContainer className={classes.root} component={Paper}>
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
                      src={process.env.BASE_URL + item?.productDetail?.image}
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
