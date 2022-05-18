import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Icon } from "@mui/material";
import { ProductsApi } from "../../../api/Products";
const Delete = ({ id, onFinish }) => {
   const deleteHandler = async (id) => {
     await ProductsApi.delete(id);
     onFinish()
      //let deleted = Object.values(products).filter((el) => el.id !== id);
      // setProducts(deleted);
   };
   return (
      <div>
         <Icon onClick={() => deleteHandler(id)}>
            <DeleteIcon />
         </Icon>
      </div>
   );
};

export default Delete;
