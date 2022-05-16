import React, { useState, useEffect } from "react";
import ProductCard from "../../components/User/Product/ProductCard";
import { ProductApi } from "../../api/Products";
import { Grid } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { makeStyles } from "@mui/styles";
import { textAlign } from "@mui/system";

const useStyle = makeStyles({
   root: {
      "& .MuiButtonBase-root svg": {
         transform: "rotate(180deg)",
      },
      "& .paginationStyle": {
         textAlign: "center",
         margin: "auto"
      }
   },
});
const AllProducts = ({ cat }) => {
   const [products, setProducts] = useState([]);
   const [page, setPage] = useState(1);
   const [count, setCount] = useState(1);
   const classes = useStyle();

   const getProducts = async () => {
      const clothesRes = await ProductApi.gets({
         params: { _page: page, _limit: 6, categoryId: cat },
      });
      setCount(parseInt(clothesRes.headers["x-total-count"] / 6));
      setProducts(clothesRes.data);
   };

   const handlePageChange = (e, p) => {
      setPage(p);
   };
   useEffect(() => {
      getProducts();
   }, [page]);

   return (
      <div className={classes.root}>
         <Grid container>
            {products.map((good) => (
               <Grid item m="auto" my={3} xs={10} md={4.8} key={good.id}>
                  <ProductCard data={good} />
               </Grid>
            ))}
         </Grid>
         <Pagination page={page} count={count} onChange={handlePageChange} className="paginationStyle"/>{" "}
      </div>
   );
};

export default AllProducts;
