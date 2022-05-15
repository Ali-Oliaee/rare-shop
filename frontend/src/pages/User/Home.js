import React, { useState, useEffect } from "react";
import Slider from "../../components/User/Slider/Slider";
import { ProductApi } from "../../api/Products";
import "swiper/css/bundle";
const Home = () => {
   const [products, setProducts] = useState([]);

   const getProducts = async () => {
      const clothesRes = await ProductApi.gets({
         params: { categoryId: 1, _limit: 6 },
      });
      const shoesRes = await ProductApi.gets({
         params: { categoryId: 2, _limit: 6 },
      });
      const accessoryRes = await ProductApi.gets({
         params: { categoryId: 3, _limit: 6 },
      });
      setProducts([clothesRes.data,shoesRes.data,accessoryRes.data]);
   };

   useEffect(() => {
      getProducts();
   }, []);
   return (
      <>
         <Slider data={products[0]} category={1} urlCategory={"clothes"} />
         <Slider data={products[1]} category={2} urlCategory={"shoes-bag"}/>
         <Slider data={products[2]} category={3} urlCategory={"accessory"}/>
      </>
   );
};

export default Home;
