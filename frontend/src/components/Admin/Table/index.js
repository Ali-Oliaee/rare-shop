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
import { Button } from "@mui/material";
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
      "& .row_cell": {
         width: 300,
         textAlign: "center",
      },
   },
});
const headColmns = [props.column];
export default function MyTable() {
   const [page, setPage] = useState(0);
   const [rowsPerPage, setRowsPerPage] = useState(10);
   const [products, setProducts] = useState([]);
   const [edit, setEdit] = useState(true);
   const classes = useStyle();

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
      <>
         <Button>ذخیره</Button>
         <Paper className={classes.root} sx={{ borderRadius: 0 }}>
            <TableContainer sx={{ maxHeight: 440 }}>
               <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                     <TableRow className={classes.table_row}>
                        {headColmns.map((item) => (
                           <TableCell className="row_cell"></TableCell>
                        ))}
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {Object.values(props.goods)
                        .slice(
                           page * rowsPerPage,
                           page * rowsPerPage + rowsPerPage
                        )
                        .map((row) => {
                           return (
                              <TableRow
                                 className="table_row"
                                 sx={{ bgcolor: "light_nude.main" }}
                                 role="checkbox"
                                 tabIndex={-1}
                                 key={row.code}
                              >
                                 {props.rowsCell.map((cell) => (
                                    <TableCell className="row_cell">
                                       {cell}
                                    </TableCell>
                                 ))}
                                 {/* <TableCell className="row_cell">
                                       {row.name}
                                    </TableCell>

                                    <TableCell className="row_cell">
                                       {row.price.toLocaleString()}
                                    </TableCell>

                                    <TableCell className="row_cell">
                                       {row.inventory}
                                    </TableCell> */}
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
               count={props.goods.length}
               rowsPerPage={rowsPerPage}
               labelDisplayedRows={defaultLabelDisplayedRows}
               page={page}
               onPageChange={handleChangePage}
               onRowsPerPageChange={handleChangeRowsPerPage}
            />
         </Paper>
      </>
   );
}
