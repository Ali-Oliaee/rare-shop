import {
  Table, TableBody, TableCell, Typography, TableHead,
  TableRow, Paper, Button, TableContainer,
} from '@mui/material'
import Delete from '@mui/icons-material/Delete'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, decreaseCart } from '../../../redux/reducers/CartSlice'
import Counter from './Counter'

export default function CartTable({ orders, handleDelete }) {
  const columns = ['تصویر کالا', 'نام کالا', 'قیمت', 'تعداد باقی مانده', 'تعداد', ' حذف']
  const dispatch = useDispatch()
  const handleDecrement = (product) => dispatch(decreaseCart(product[0]))
  const handleIncrement = (product) => dispatch(addToCart(product[0]))
  const [cartTotalQuantity, cartTotalAmount] = JSON.parse(localStorage.getItem('total'))

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
        <Button variant="contained">
          نهایی کردن سبد خرید
        </Button>
      </div>
    </>
  )
}
