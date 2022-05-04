import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/Product/ProductCard";
import { Grid } from "@mui/material";
import NewProductTable from "../components/Table/MyTable";

const Home = () => {
   const text = "<script>console.log('hello')</script>";
   return (
      <div>
         {/* <img src={data[0]?.image}/> */}
         {/* <p dangerouslySetInnerHTML={{__html: text}}></p> */}
        <Grid container m="auto">
          {/* <Grid item mx={"auto"} my={3} xs={10} md={5} lg={3.5}>
              <ProductCard />
          </Grid>
          <Grid item mx={"auto"} my={3} xs={10} md={5} lg={3.5}>
              <ProductCard />
          </Grid>
          <Grid item mx={"auto"} my={3} xs={10} md={5} lg={3.5}>
              <ProductCard />
          </Grid>
          <Grid item mx={"auto"} my={3} xs={10} md={5} lg={3.5}>
              <ProductCard />
          </Grid>
          <Grid item mx={"auto"} my={3} xs={10} md={5} lg={3.5}>
              <ProductCard />
          </Grid>
          <Grid item mx={"auto"} my={3} xs={10} md={5} lg={3.5}>
              <ProductCard />
          </Grid> */}
          <NewProductTable/>
         </Grid>
      </div>
   );
};

export default Home;
