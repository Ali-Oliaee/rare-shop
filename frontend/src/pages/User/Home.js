import React, { useState, useEffect } from "react";
import Slider from "../../components/User/Slider/Slider";
import { ProductApi } from "../../api/Products";
import { AdminApi } from "../../api/AdminApi";
import "swiper/css/bundle";
import MyTable from "../../components/User/Table/MyTable";
const Home = () => {
   const [products, setProducts] = useState([]);
   const [Categories, setCategories] = useState([]);

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
      setProducts([clothesRes.data, shoesRes.data, accessoryRes.data]);
   };
   const getCategoryData = async () => {
      const categoryIdRes = await AdminApi.getCategoryId();
      setCategories(categoryIdRes.data);
   };

   const findCategoryName = (id) => {
      let requestedCategoryObject = Object.values(Categories).find(
         (el) => el.id === id
      );
      return requestedCategoryObject?.name;
   };
   useEffect(() => {
      getCategoryData();
      getProducts();
   }, []);
   console.log(Categories[0]);
   return (
      <>
      <MyTable/>
         <div style={{ display: "flex", alignItems: "center" }}>
            <Slider
               category={1}
               data={products[0]}
               description={Categories[0]?.description}
               urlCategory={"clothes"}
               findCategoryName={findCategoryName}
            />
         </div>
         <div style={{ display: "flex", alignItems: "center",flexDirection: "row-reverse" }}>
            <Slider
               category={2}
               data={products[1]}
               description={Categories[1]?.description}
               urlCategory={"shoes-bag"}
               findCategoryName={findCategoryName}
            />
         </div>
         <div style={{ display: "flex", alignItems: "center" }}>
            <Slider
               category={3}
               data={products[2]}
               description={Categories[2]?.description}
               urlCategory={"accessory"}
               findCategoryName={findCategoryName}
            />
         </div>
      </>
   );
};

export default Home;
