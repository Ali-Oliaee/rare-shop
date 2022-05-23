import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { makeStyles } from "@mui/styles";
import Editor from "./Editor";
const style = {};
const useStyle = makeStyles({
   root: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 500,
      height: 550,
      background: "white",
      border: "2px solid #000",
      boxShadow: 24,
      padding: 40,
      "& .MuiFormControl-root": {
         // width: "100%",
         margin: 10,
      },
      "& .MuiButton-root": {
         background: "black",
         marginBottom: 20,
         marginTop: 20,
      },
   },
   fileButton: {
      float: "left",
      marginBottom: 20,
   },
});
const MyModal = (props) => {
   const {
      newProduct,
      setNewProduct,
      buttonName,
      handleUploadFile,
      handleFileSelect,
      imageAdress,
      addProduct,
   } = props;
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   const classes = useStyle();
   const p2e = (s) => s.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));
//filter harf
   const saveClickHandler = () => {
      handleClose();
      setNewProduct();
   };
   return (
      <div>
         <Button onClick={handleOpen}>{buttonName}</Button>

         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box className={classes.root}>
               <input value={imageAdress} />
               <button onClick={handleUploadFile}>upload</button>
               <Button
                  className={classes.fileButton}
                  variant="contained"
                  component="label"
               >
                  افزودن عکس
                  <input type="file" hidden onChange={handleFileSelect} />
               </Button>
               <TextField
                  className={classes.inputName}
                  label="نام کالا"
                  name="name"
                  variant="standard"
                  value={newProduct?.name}
                  // focused
                  onChange={(e) =>
                     setNewProduct({
                        ...newProduct,
                        [e.target.name]: e.target.value,
                     })
                  }
               />
               {/* <FormControl sx={{display: "flex"}}> */}
               <TextField
                  label="قیمت"
                  name="price"
                  variant="standard"
                  value={newProduct?.price}
                  onChange={(e) =>
                     setNewProduct({
                        ...newProduct,
                        price:parseInt(p2e(e.target.value)),
                     })
                  }
               />
               <TextField
                  label="تعداد موجودی"
                  name="inventory"
                  variant="standard"
                  value={newProduct?.inventory}
                  onChange={(e) =>
                     setNewProduct({
                        ...newProduct,
                        inventory: e.target.value,
                     })
                  }
               />
               {/* </FormControl> */}
               <FormControl
                  name="categoryId"
                  fullWidth
                  value={newProduct?.categoryId}
                  onChange={(e) =>
                     setNewProduct({
                        ...newProduct,
                        categoryId: parseInt(e.target.value),
                     })
                  }
               >
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                     دسته بندی
                  </InputLabel>
                  <NativeSelect
                     defaultValue={1}
                     inputProps={{
                        name: "categoryId",
                        id: "uncontrolled-native",
                     }}
                  >
                     <option></option>
                     <option value={1}> پوشاک </option>
                     <option value={2}>کیف و کفش </option>
                     <option value={3}>اکسسوری</option>
                  </NativeSelect>
               </FormControl>
               <FormControl
                  name="subCategoryId"
                  fullWidth
                  value={newProduct?.categoryId}
                  onChange={(e) =>
                     setNewProduct({
                        ...newProduct,
                        subCategoryId: parseInt(e.target.value),
                     })
                  }
               >
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                     زیر دسته بندی
                  </InputLabel>
                  <NativeSelect
                     defaultValue={1}
                     inputProps={{
                        name: "subCategoryId",
                        id: "controlled-native",
                     }}
                  >
                     <option></option>
                     <option value={1}>شلوار</option>
                     <option value={2}>تیشرت و شومیز</option>
                     <option value={3}>پیراهن</option>
                     <option value={4}>کفش اسپرت</option>
                     <option value={5}>کفش مجلسی</option>
                     <option value={6}>کیف</option>
                     <option value={7}>عینک</option>
                     <option value={8}>گردنبند و دستبند</option>
                     <option value={9}>گوشواره و انگشتر</option>
                  </NativeSelect>
               </FormControl>
               <Editor newProduct={newProduct} setNewProduct={setNewProduct} />
               <Button
                  onClick={addProduct}
                  variant="contained"
                  component="label"
               >
                  ذخیره
               </Button>
            </Box>
         </Modal>
      </div>
   );
};

export default MyModal;
