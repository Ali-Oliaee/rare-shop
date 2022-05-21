import React, { useState, useEffect } from "react";
import { FileApi } from "../../../api/FileApi";
import { BASE_URL } from "../../../core/constants";
import MyModal from "./Modal";
import { AdminApi } from "../../../api/AdminApi";
import { ProductsApi } from "../../../api/Products";
export default function NewProductModal() {
   const [selectedFile, setSelectedFile] = useState(null);
   const [newProduct, setNewProduct] = useState({
      name: "",
      categoryId: null,
      subCategoryId: null,
      inventory: null,
      image: "",
      price: null,
      description: "",
   });

   const handleFileSelect = (event) => {
      setSelectedFile(event.target.files[0]);
   };
   const handleUploadFile = async () => {
      const fd = new FormData();
      fd.append("image", selectedFile);
      await AdminApi.upload(fd).then((res) => {
         setNewProduct({ ...newProduct, image: "/files/" + res.data.filename });
      });
   };
   const addProduct = () => {
      const apiCall = async () => {
         let res = await ProductsApi.post(newProduct);
         console.log(res.data);
      };
      apiCall();
   };
   return (
      <div>
         <MyModal
            imageAdress={selectedFile?.filename}
            handleUploadFile={handleUploadFile}
            newProduct={newProduct}
            setNewProduct={setNewProduct}
            buttonName={"کالای جدید"}
            handleFileSelect={handleFileSelect}
            addProduct={addProduct}
         />
      </div>
   );
}
