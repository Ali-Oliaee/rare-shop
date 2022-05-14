import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { makeStyles } from "@mui/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { OrdersApi } from "../../../api/OrdersApi";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Button } from "@mui/material";
import moment from "jalali-moment";
const useStyle = makeStyles({
   root: {
      width: "70%",
      margin: "auto",
      marginTop: 50,
      overflow: "hidden",
      border: "1px solid black",
      "& .table_row:hover": {
         background: "#E6BC98",
      },
      "& .MuiButtonBase-root svg": {
         transform: "rotate(180deg)",
      },
      "& .MuiTableContainer-root::-webkit-scrollbar": {
         display: "none", /* for Chrome, Safari, and Opera */
     }
   },
});

export default function Orders() {
   const [page, setPage] = useState(0);
   const [rowsPerPage, setRowsPerPage] = useState(10);
   const [arrange, setArrange] = useState(1);
   const [orders, setOrders] = useState([]);
   const [processOrders, setProcessOrders] = useState(true);
   const classes = useStyle();

   const filterOrdersByStatus = async () => {
      const orderStatus = processOrders ? 1 : 2;
      const sortingStatus = arrange == 1 ? "asc" : "desc";
      const res = await OrdersApi.gets({
         params: { orderStatus: orderStatus },
      });
      setOrders(res.data);
   };

   // aray.reduce((acc, cv) => ({...acc,[cv.id]:cv.name}), {})

   useEffect(() => {
      filterOrdersByStatus();
   }, [arrange,processOrders]);

   const handleChange = (event) => {
      let requestedCategory = event.target.value;
      setArrange(requestedCategory);
   };

   const handleChangePage = (event, newPage) => {
      setPage(newPage);
   };

   const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
   };
   const handleRadioChange = () => {
      setProcessOrders(!processOrders)
   }
   function defaultLabelDisplayedRows({ from, to, count }) {
      return `${from}–${to} از ${count !== -1 ? count : `more than ${to}`}`;
   };
   return (
      <>
         <FormControl>
            <RadioGroup
               row
               aria-labelledby="demo-row-radio-buttons-group-label"
               name="row-radio-buttons-group"
            >
               <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="سفارش های تحویل شده"
                  checked={!processOrders}
                  onChange={handleRadioChange}
               />
               <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="سفارش های در انتظار تحویل"
                  checked={processOrders}
                  onChange={handleRadioChange}
               />
            </RadioGroup>
         </FormControl>
         <Paper className={classes.root} sx={{ borderRadius: 0 }}>
            <TableContainer sx={{ maxHeight: 440 ,overflowY:"hidden"}}>
               <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                     <TableRow className={classes.table_row}>
                        <TableCell style={{ minWidth: 60 }}>
                           نام کاربر
                        </TableCell>
                        <TableCell style={{ minWidth: 100 }}>
                           مجموع مبلغ
                        </TableCell>
                        <TableCell style={{ minWidth: 100 }}>
                           <FormControl
                              variant="standard"
                              sx={{ m: 1, minWidth: 120 }}
                           >
                              <InputLabel id="demo-simple-select-standard-label">
                                 زمان ثبت سفارش
                              </InputLabel>
                              <Select
                                 labelId="demo-simple-select-standard-label"
                                 id="demo-simple-select-standard"
                                 onChange={handleChange}
                                 label="Age"
                              >
                                 <MenuItem value={1}>جدید ترین</MenuItem>
                                 <MenuItem value={2}>قدیمی ترین</MenuItem>
                              </Select>
                           </FormControl>
                        </TableCell>
                        <TableCell></TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {Object.values(orders)
                        .slice(
                           page * rowsPerPage,
                           page * rowsPerPage + rowsPerPage
                        )
                        .map((row) => {
                           let date = new Date(row.orderDate);
                           return (
                              <TableRow
                                 className="table_row"
                                 sx={{ bgcolor: "light_nude.main" }}
                                 role="checkbox"
                                 tabIndex={-1}
                                 key={row.code}
                              >
                                 <TableCell>
                                    {row.customerDetail.firstName +
                                       " " +
                                       row.customerDetail.lastName}
                                 </TableCell>
                                 <TableCell>
                                    {row.purchaseTotal.toLocaleString()}
                                 </TableCell>
                                 <TableCell>
                                    {moment(date, "YYYY/MM/DD")
                                       .locale("fa")
                                       .format("YYYY/MM/DD")}
                                 </TableCell>
                                 <TableCell>
                                    <Button>بررسی سفارش</Button>
                                 </TableCell>
                              </TableRow>
                           );
                        })}
                  </TableBody>
               </Table>
            </TableContainer>
            <TablePagination
               className={classes.pagination}
               rowsPerPageOptions={[10, 25, 100]}
               component="div"
               labelRowsPerPage="صفحه"
               count={orders.length}
               labelDisplayedRows={defaultLabelDisplayedRows}
               rowsPerPage={rowsPerPage}
               page={page}
               onPageChange={handleChangePage}
               onRowsPerPageChange={handleChangeRowsPerPage}
            />
         </Paper>
      </>
   );
}
