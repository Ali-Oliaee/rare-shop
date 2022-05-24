import React, { useState, useRef } from "react";
import { FileApi } from "../../../api/FileApi";
import { BASE_URL } from "../../../core/constants";
import MyModal from "./Modal";
import { AdminApi } from "../../../api/AdminApi";
import { ProductsApi } from "../../../api/Products";
export default function NewProductModal() {
   const [selectedFile, setSelectedFile] = useState([]);
   const [newProduct, setNewProduct] = useState({
      name: "",
      categoryId: null,
      subCategoryId: null,
      inventory: null,
      image: "",
      images: [],
      price: null,
      description: "",
   });

   // const handleFileSelect = (event) => {
   //    setSelectedFile(event.target.files);
   //    console.log(event.target.files);
   // };
   const imgRef = useRef();
   // const preview = (file) => {
   //    const fileReader = new FileReader();
   //    fileReader.onload = (e) => {
   //       if (imgRef && imgRef.current) imgRef.current.src = e.target?.result;
   //    };
   //    fileReader.readAsDataURL(file);
   // };

   // const changeHanler = async (e) => {
   //    preview(files[0]);
   //    let temp = [];
   //    selectedFile.map((item) => {
   //       const formData = new FormData();
   //       formData.append("image", item);
   //       const tempRequest = api.post("/upload", formData);
   //       temp.push(tempRequest);
   //    });

   // };

   const handleUploadFile = async (e) => {
      let files = e.target.files;
      // preview(selectedFile[0]);
      let temp = [];
      Object.values(files).map((item) => {
         const fd = new FormData();
         fd.append("image", item);
         let tempRes = AdminApi.upload(fd);
         temp.push(tempRes);
      });
      const arrayResponse = await Promise.all(temp);
      console.log(arrayResponse);
      setNewProduct({
         ...newProduct,
         image: `/files/${arrayResponse[0].data.filename}`,
         images: arrayResponse.map((i) => `/files/${i.data.filename}`),
      });
   };
   // setNewProduct({ ...newProduct, image: "/files/" + res.data.filename });
   const addProduct = () => {
      const apiCall = async () => {
         let res = await ProductsApi.post(newProduct);
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
            // handleFileSelect={handleFileSelect}
            addProduct={addProduct}
            imgRef={imgRef}
         />
      </div>
   );
}
