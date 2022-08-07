import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Delete from "@mui/icons-material/Delete";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import Counter from "./Counter";
import { addToCart, decreaseCart } from "../../../redux/reducers/CartSlice";
import { useDispatch } from "react-redux";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
   root: {
      width: "70%",
      margin: "auto",
   },
});

export default function CartTable({ orders, handleDelete }) {
   const columns = ["تصویر کالا", "نام کالا", "قیمت", "تعداد", "تعداد", " حذف"];
   const dispatch = useDispatch();
   const classes = useStyle();   
   const handleDecrement = (product) => dispatch(decreaseCart(product[0]));
   const handleIncrement = (product) => dispatch(addToCart(product[0]));
   const [cartTotalQuantity, cartTotalAmount] = JSON.parse(localStorage.getItem("total"));
   const connectToWallet = () =>  {
      if(window.ethereum){
         window.ethereum.request({method:'eth_requestAccounts'})
         .then(res => {
                 // Return the address of the wallet
                 console.log(res) 
         })
      }
      else return alert("install metamask extension!!")
   }

   return (
      <>
         <TableContainer className={classes.root} component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
               <TableHead>
                  <TableRow>
                     {columns.map((item) => (
                        <TableCell align="center">{item}</TableCell>
                     ))}
                  </TableRow>
               </TableHead>
               <TableBody>
                  {orders?.cartItems?.map((item) => {
                     return (
                        <TableRow
                           key={item?.productDetail?.id}
                           sx={{
                              "&:last-child td, &:last-child th": {
                                 border: 0,
                              },
                           }}
                        >
                           <TableCell component="th" scope="row">
                              <TableCell align="center">
                                 <img
                                    style={{ maxWidth: 60 }}
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
                              {
                                 <Counter
                                    data={item}
                                    handleIncrement={handleIncrement}
                                    handleDecrement={handleDecrement}
                                    inventory={item?.productDetail?.inventory}
                                 />
                              }
                           </TableCell>
                           <TableCell align="center">
                              {
                                 <Button
                                    onClick={() =>
                                       handleDelete(item?.productDetail?.id)
                                    }
                                 >
                                    <Delete />
                                 </Button>
                              }
                           </TableCell>
                        </TableRow>
                     );
                  })}
               </TableBody>
            </Table>
         </TableContainer>
         <div
            style={{
               display: "flex",
               justifyContent: "space-around",
               marginTop: 50,
            }}
         >
            <Typography typography="p">{`تعداد اقلام: ${cartTotalQuantity?.toLocaleString(
               "fa"
            )} عدد`}</Typography>
            <Typography typography="p">{` جمع کل:  ${cartTotalAmount?.toLocaleString(
               "fa"
            )} تومان`}</Typography>
            {/* <Link style={{ textDecoration: "none" }} to="/checkout/userInfo">
               <Button variant="contained" sx={{ backgroundColor: "green", marginLeft: 20 }}>
                  نهایی کردن سبد خرید
               </Button>
            </Link> */}
            <Button variant="contained" sx={{ backgroundColor: "green", marginLeft: 20 }} onClick={connectToWallet}>
                  نهایی کردن سبد خرید
            </Button>
         </div>
      </>
   );
}
