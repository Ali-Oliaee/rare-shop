import React, { useState, useEffect } from "react";
import ProductCard from "../../components/User/Product/ProductCard";
import { ProductApi } from "../../api/Products";
import { Grid } from "@mui/material";
import Pagination from '@mui/material/Pagination';
const AllProducts = () => {
   const [clothes, setClothes] = useState([]);
   const [shoesAndBag, setShoesAndBag] = useState([]);
   const [accessory, setAccessory] = useState([]);

   const getProducts = async () => {
    const clothesRes = await ProductApi.gets({
         params: { _page: 1, _limit: 6, categoryId: 1  },
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

   useEffect(() => {
      getProducts();
   }, []);

   return (
      <Grid container >
         {clothes.map((cloth) => (
            <Grid item m="auto" my={3} xs={10} md={4.8} key={cloth.id}><ProductCard data={cloth} /></Grid>
         ))}
         <Pagination count={10} />
      </Grid>
   );
};

export default AllProducts;
