import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { makeStyles } from "@mui/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
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
   },
   pagination: {
      "& p": {
         color: "red",
      },
   },
});
const columns = [
   { id: "name", label: "Name", minWidth: 170 },
   { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
   {
      id: "population",
      label: "Population",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
   },
];
function createData(name, image, category, delit) {
   return { name, image, category, delit };
}

const rows = [createData("India", "IN", 1324171354)];

export default function GoodsTable() {
   const [page, setPage] = React.useState(0);
   const [rowsPerPage, setRowsPerPage] = React.useState(10);
   const [age, setAge] = React.useState("");
   const classes = useStyle();

   const handleChange = (event) => {
      setAge(event.target.value);
   };

   const handleChangePage = (event, newPage) => {
      setPage(newPage);
   };

   const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
   };

   return (
      <Paper className={classes.root} sx={{ borderRadius: 0 }}>
         <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
               <TableHead>
                  <TableRow className={classes.table_row}>
                     <TableCell style={{ minWidth: 100 }}>تصویر</TableCell>
                     <TableCell style={{ minWidth: 100 }}>نام محصول</TableCell>
                     <TableCell style={{ minWidth: 100 }}>
                        <FormControl
                           variant="standard"
                           sx={{ m: 1, minWidth: 120 }}
                        >
                           <InputLabel id="demo-simple-select-standard-label">
                              دسته بندی
                           </InputLabel>
                           <Select
                              labelId="demo-simple-select-standard-label"
                              id="demo-simple-select-standard"
                              value={age}
                              onChange={handleChange}
                              label="Age"
                           >
                              {/* <MenuItem value="">
                                 <em>None</em>
                              </MenuItem> */}
                              <MenuItem value={10}>پوشاک</MenuItem>
                              <MenuItem value={20}>کیف و کفش</MenuItem>
                              <MenuItem value={30}>اکسسوری</MenuItem>
                           </Select>
                        </FormControl>
                     </TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {rows
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
                              {columns.map((column) => {
                                 const value = row[column.id];
                                 return (
                                    <TableCell
                                       key={column.id}
                                       align={column.align}
                                    >
                                       {column.format &&
                                       typeof value === "number"
                                          ? column.format(value)
                                          : value}
                                    </TableCell>
                                 );
                              })}
                              <DeleteIcon />
                              <EditIcon />
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
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
         />
      </Paper>
   );
}
