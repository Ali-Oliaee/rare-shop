import React, { useState, useEffect } from "react";
import { FileApi } from "../../../api/FileApi";
import { BASE_URL } from "../../../core/constants";
import MyModal from "./Modal";

export default function NewProductModal() {
   const [selectedFile, setSelectedFile] = useState(null);

   const handleFileSelect = (event) => {
      setSelectedFile(event.target.files[0]);
      console.log(selectedFile);
   };
   // const handleUploadFile = () => {
   //    if (selectedFile) {
   //       const response = FileApi.formdata(BASE_URL + "/upload", selectedFile);
   //       console.log(response);
   //    }
   // };
   return (
      <div>
         <MyModal buttonName={"کالای جدید"} handleFileSelect={handleFileSelect}/>
      </div>
   );
}
