import React, { useState, useRef } from "react";
import MyModal from "./Modal";
import { AdminApi } from "../../../api/AdminApi";
import { ProductsApi } from "../../../api/Products";
import Button from "@mui/material/Button";
export default function NewProductModal() {
   const [newProduct, setNewProduct] = useState({
      name: "",
      categoryId: null,
      subCategoryId: null,
      price: null,
      inventory: null,
      image: "",
      images: [],
      description: "",
   });
   const imgRef = useRef();
   const preview = (file) => {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
         if (imgRef && imgRef.current) imgRef.current.src = e.target?.result;
      };
      fileReader.readAsDataURL(file);
   };

   const handleUploadFile = async (e) => {
      let files = e.target.files;
       preview(files[0]);
      let temp = [];
      Object.values(files).map((item) => {
         const fd = new FormData();
         fd.append("image", item);
         let tempRes = AdminApi.upload(fd);
         temp.push(tempRes);
      });
      const arrayResponse = await Promise.all(temp);
      setNewProduct({
         ...newProduct,
         image: `/files/${arrayResponse[0].data.filename}`,
         images: arrayResponse.map((i) => `/files/${i.data.filename}`),
      });
   };
   // setNewProduct({ ...newProduct, image: "/files/" + res.data.filename });
   const addProduct = () => {
      const apiCall = async () => {
         await ProductsApi.post(newProduct);
      };
      apiCall();
   };
   return (
      <div>
         <MyModal
            handleUploadFile={handleUploadFile}
            newProduct={newProduct}
            setNewProduct={setNewProduct}
            buttonName={<Button sx={{backgroundColor:"#ffea00", marginBottom:1}}>کالای جدید</Button>}
            addProduct={addProduct}
            imgRef={imgRef}
         />
      </div>
   );
}
