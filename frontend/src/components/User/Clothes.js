import React, { useState, useEffect } from "react";
import ProductCard from "../../components/User/Product/ProductCard";
import { ProductApi } from "../../api/Products";
import { Grid } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
   root: {
      "& .MuiButtonBase-root svg": {
         transform: "rotate(180deg)",
      },
   },
});
const Clothes = () => {
   const [clothes, setClothes] = useState([]);
   // const [shoesAndBag, setShoesAndBag] = useState([]);
   // const [accessory, setAccessory] = useState([]);
   const [page, setPage] = useState(1);
   let _count = 1;
   const classes = useStyle()

   console.log();
   const getProducts = async () => {
      const clothesRes = await ProductApi.gets({
         params: { _page: page, _limit: 6, categoryId: 1 },
      });
      console.log(clothesRes.data);
      setClothes(clothesRes.data);
   };

   //  const getShoesBag = async () => {
   //     const clothesRes = await ProductApi.gets({
   //        params: { categoryId: 2, _limit: 6 },
   //     });
   //     setClothes(clothesRes.data);
   //  };
   //  const getClothes = async () => {
   //     const clothesRes = await ProductApi.gets({
   //        params: { categoryId: 3, _limit: 6 },
   //     });
   //     setClothes(clothesRes.data);
   //  };
   const handlePageChange = (e, p) => {
      setPage(p);
   };
   useEffect(() => {
      getProducts();
   }, [page]);

   return (
      <div className={classes.root}>
      <Grid container>
         {clothes.map((cloth) => (
            <Grid item m="auto" my={3} xs={10} md={4.8} key={cloth.id}>
               <ProductCard data={cloth} />
            </Grid>
         ))}
         <Pagination page={page} onChange={handlePageChange} count={6} />{" "}
      </Grid>
      </div>
   );
};

export default Clothes;
