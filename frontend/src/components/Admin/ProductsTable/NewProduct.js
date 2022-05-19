import React, { useState, useEffect } from "react";
import { FileApi } from "../../../api/FileApi";
import { BASE_URL } from "../../../core/constants";
import MyModal from "./Modal";
import { AdminApi } from "../../../api/AdminApi";
import {ProductsApi} from "../../../api/Products"
export default function NewProductModal() {
   const [selectedFile, setSelectedFile] = useState(null);
   const [newProduct, setNewProduct] = useState({
      name: "",
      categoryId: null,
      subCategoryId: null,
      price: null,
      inventory: null,
      description: "",
   });

   const handleFileSelect = (event) => {
      setSelectedFile(event.target.files[0]);
      console.log(selectedFile);
   };
   const handleUploadFile = async () => {
      const fd = new FormData();
      fd.append("image", selectedFile);
      const res = await AdminApi.upload(fd);
   };
   const addProduct = async (id) => {
      const fd = new FormData();
      fd.append("data", newProduct);
      await ProductsApi.post(fd);
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
