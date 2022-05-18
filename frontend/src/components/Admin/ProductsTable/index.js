import React, { useState, useEffect } from "react";
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
import { ProductsApi } from "../../../api/Products";
import { AdminApi } from "../../../api/AdminApi";
import { BASE_URL } from "../../../core/constants";
import { Button, Icon } from "@mui/material";
import NewProductModal from "./NewProduct";
import Delete from "./Delete";
import Edit from "./Edit";

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
         display: "none" /* for Chrome, Safari, and Opera */,
      },
   },
});

export default function AllProductsTable() {
   const [page, setPage] = useState(0);
   const [rowsPerPage, setRowsPerPage] = useState(10);
   const [category, setCategory] = useState([]);
   const [products, setProducts] = useState([]);
   const [subCategories, setSubCategories] = useState([]);
   const [Categories, setCategories] = useState([]);
   const classes = useStyle();

   const getProducts = async () => {
      const res = await ProductsApi.gets({
         params: { categoryId: category },
      });
      setProducts(res.data);

      const categoryIdRes = await AdminApi.getCategoryId();
      setCategories(categoryIdRes.data);

      const subCategoryIdRes = await AdminApi.getSubCategoryId();
      setSubCategories(subCategoryIdRes.data);
   };

   useEffect(() => {
      getProducts();
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

   const findCategoryName = (id) => {
      let requestedCategoryObject = Categories.find((el) => el.id == id);
      return requestedCategoryObject?.name;
   };
   const findSubCategoryName = (id) => {
      let requestedSubCategoryObject = subCategories.find((el) => el.id == id);
      return requestedSubCategoryObject?.name;
   };

   function defaultLabelDisplayedRows({ from, to, count }) {
      return `${from}–${to} از ${count !== -1 ? count : `more than ${to}`}`;
   }
   return (
      <>
         <NewProductModal />
         <Paper className={classes.root} sx={{ borderRadius: 0 }}>
            <TableContainer
               className={classes.scrollClass}
               sx={{ maxHeight: 440, overflowY: "scroll" }}
            >
               <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                     <TableRow className={classes.table_row}>
                        <TableCell style={{ minWidth: 60, maxHeight: 60 }}>
                           تصویر
                        </TableCell>
                        <TableCell style={{ minWidth: 100 }}>
                           نام محصول
                        </TableCell>
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
                                 onChange={handleChange}
                              >
                                 {Categories.map((catgory) => (
                                    <MenuItem value={catgory?.id}>
                                       {catgory.name}
                                    </MenuItem>
                                 ))}
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
                                 <TableCell>
                                    {findCategoryName(row.categoryId) +
                                       "/ " +
                                       findSubCategoryName(row.subCategoryId)}
                                 </TableCell>
                                 <TableCell>
                                    <Delete
                                       onFinish={getProducts}
                                       id={row.id}
                                    />
                                    <Edit id={row.id} onFinish={getProducts} />
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
               labelDisplayedRows={defaultLabelDisplayedRows}
               count={products.length}
               rowsPerPage={rowsPerPage}
               page={page}
               onPageChange={handleChangePage}
               onRowsPerPageChange={handleChangeRowsPerPage}
            />
         </Paper>
      </>
   );
}
