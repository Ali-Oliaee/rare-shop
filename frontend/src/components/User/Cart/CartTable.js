import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { OrdersApi } from "../../../api/OrdersApi";
import { BASE_URL } from "../../../core/constants";
import Delete from "@mui/icons-material/Delete";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
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
   const handleDecrement = (product) => {
      dispatch(decreaseCart(product));
   };
   const handleIncrement = (product) => {
      dispatch(addToCart(product));
   };
   const [cartTotalQuantity, cartTotalAmount] = JSON.parse(
      localStorage.getItem("total")
   );
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
                  {Object.values(orders).map((item) => {
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
                                    src={BASE_URL + item?.productDetail?.image}
                                    alt="تصویر کالا"
                                 />
                              </TableCell>
                           </TableCell>
                           <TableCell align="center">
                              {item?.productDetail?.name}
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
            <Typography typography="p">{`تعداد اقلام: ${cartTotalQuantity.toLocaleString(
               "fa"
            )} عدد`}</Typography>
            <Typography typography="p">{` جمع کل:  ${cartTotalAmount.toLocaleString(
               "fa"
            )} تومان`}</Typography>
            <Link to="/checkout/userInfo">
               <Button variant="contained" color="success">
                  نهایی کردن سبد خرید
               </Button>
            </Link>
         </div>
      </>
   );
}
