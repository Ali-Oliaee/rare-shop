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
import { ProductApi } from "../../../api/Products";
import { AdminApi } from "../../../api/AdminApi";
import { BASE_URL } from "../../../core/constants";
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
      "& .MuiTablePagination-actions": {
         display: "flex",
         flexDirection: "row-reverse",
      },
   },
});

function createData(name, image, category, delit) {
   return { name, image, category, delit };
}

const rows = [createData("India", "IN", 1324171354)];

export default function AllProducts() {
   const [page, setPage] = React.useState(0);
   const [rowsPerPage, setRowsPerPage] = React.useState(10);
   const [category, setCategory] = React.useState([]);
   const [products, setProducts] = React.useState([]);
   const classes = useStyle();

   React.useEffect(() => {
      const func = async () => {
         // const requestedCategoryId = await AdminApi.category({})
         const data = await ProductApi.gets({
            params: { _page: page, _limit: 20, categoryId: 3 },
         });
         setProducts(data.data);
      };
      func();
   }, [category]);

   const handleChange = (event) => {
      let requestedCategory = event.target.value;
      setCategory(requestedCategory);
   };

   const handleChangePage = (event, newPage) => {
      setPage(newPage);
   };

   const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
   };
   console.log(rowsPerPage)

   return (
      <Paper className={classes.root} sx={{ borderRadius: 0 }}>
         <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
               <TableHead>
                  <TableRow className={classes.table_row}>
                     <TableCell style={{ minWidth: 60 }}>تصویر</TableCell>
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
                              value={category}
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
                     <TableCell></TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {Object.values(products)
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
                              <TableCell>
                                 <img
                                    style={{ maxWidth: 60 }}
                                    src={BASE_URL + row.image}
                                    alt="تصویر کالا"
                                 />
                              </TableCell>
                              <TableCell>{row.name}</TableCell>
                              <TableCell>{row.subCategory}</TableCell>
                              <TableCell>
                                 <DeleteIcon />
                                 <EditIcon />
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
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
         />
      </Paper>
   );
}
