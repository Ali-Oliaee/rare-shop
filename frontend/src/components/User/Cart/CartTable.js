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
const useStyle = makeStyles({
  root: {
    width: "70%",
    margin: "auto",
  }
})
export default function CartTable() {
   const [order, setOrder] = useState([]);
   const columns = ["تصویر کالا", "نام کالا", "قیمت", "تعداد", " حذف"];
  const classes = useStyle()

   const getOrders = async () => {
      const ordersResponse = await OrdersApi.get(1);
      setOrder(ordersResponse.data);
      // console.log(ordersResponse.data.orderItems);
   };

   useEffect(() => {
      getOrders();
   }, []);
   return (
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
               {order?.orderItems?.map((item) => (
                
                  <TableRow
                     key={item.id}
                     sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                     <TableCell component="th" scope="row">
                        <TableCell align="center">
                           <img
                              style={{ maxWidth: 60 }}
                              src={BASE_URL + item.thumbnail}
                              alt="تصویر کالا"
                           />
                        </TableCell>
                     </TableCell>
                     <TableCell align="center">{item.name}</TableCell>
                     <TableCell align="center">{item.price}</TableCell>
                     <TableCell align="center">{item.quantity}</TableCell>
                     <TableCell align="center">{<Delete/>}</TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   );
}
