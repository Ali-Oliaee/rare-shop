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
import { TextField, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { ProductApi } from "../../../api/Products";

const useStyle = makeStyles({
   tableContainer: {
      background: "#E6BC98",
      width:"70%",
      margin:"1rem auto",
      paddingBottom:"5rem",
     
   },
   root: {
      width: "70%",
      margin: "auto",
      marginTop: 50,
      overflow: "hidden",
      border: "1px solid black",

      "& .MuiButtonBase-root svg": {
         transform: "rotate(180deg)",
      },
      "& .row_cell": {
         width: 300,
         textAlign: "center",
      },
      "& .MuiTableCell-head ": {
         background: "black",
         color:"white",
         padding: 40,
      },
      myButton:{
         marginRight: 30,
         marginTop: "20px",
      },
      "& .MuiTableContainer-root::-webkit-scrollbar": {
         display: "none", /* for Chrome, Safari, and Opera */
     }
   },
});

export default function Inventories() {
   const [page, setPage] = useState(0);
   const [rowsPerPage, setRowsPerPage] = useState(10);
   const [products, setProducts] = useState([]);
   const [edit, setEdit] = useState(true);
   const classes = useStyle();

   const getProducts = async () => {
      const res = await ProductApi.gets();
      setProducts(res.data);
   };

   useEffect(() => {
      getProducts();
   }, [edit]);

   const handleChangePage = (event, newPage) => {
      setPage(newPage);
   };

   const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
   };
   function defaultLabelDisplayedRows({ from, to, count }) {
      return `${from}–${to} از ${count !== -1 ? count : `more than ${to}`}`;
   }
   return (
      // <div style={{margin:"100px"}}>
         <div className={classes.tableContainer}>
         <Button className={classes.myButton}>ذخیره</Button>
            <Paper className={classes.root} sx={{ borderRadius: 0 }}>
               <TableContainer sx={{ maxHeight: 440 }}>
                  <Table stickyHeader aria-label="sticky table">
                     <TableHead>
                        <TableRow className={classes.table_row}>
                           <TableCell className="row_cell">نام کالا</TableCell>
                           <TableCell className="row_cell">قیمت</TableCell>
                           <TableCell className="row_cell">موجودی</TableCell>
                        </TableRow>
                     </TableHead>
                     <TableBody>
                        {Object.values(products)
                           .slice(
                              page * rowsPerPage,
                              page * rowsPerPage + rowsPerPage
                           )
                           .map((row) => {
                              if (row.inventory > 0) {
                                 return (
                                    <TableRow
                                       className="table_row"
                                       role="checkbox"
                                       tabIndex={-1}
                                       key={row.code}
                                    >
                                       <TableCell className="row_cell">
                                          {row.name}
                                       </TableCell>
                                       {edit ? (
                                          <TextField
                                             id="standard-multiline-flexible"
                                             multiline
                                             maxRows={4}
                                             value={row.price}
                                             // onChange={handleChange}
                                             // onClick={setEdit(!edit)}
                                             variant="standard"
                                          />
                                       ) : (
                                          <TableCell className="row_cell">
                                            <Typography>{row.price.toLocaleString()}</Typography> 
                                          </TableCell>
                                       )}
                                       <TableCell className="row_cell">
                                          {row.inventory}
                                       </TableCell>
                                    </TableRow>
                                 );
                              }
                           })}
                     </TableBody>
                  </Table>
               </TableContainer>
               <TablePagination
                  className={classes.pagination}
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  labelRowsPerPage="صفحه"
                  count={products.length}
                  rowsPerPage={rowsPerPage}
                  labelDisplayedRows={defaultLabelDisplayedRows}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
               />
            </Paper>
         </div>
      // </div>
   );
}
