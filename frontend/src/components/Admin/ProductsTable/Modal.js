import React, { useState, useRef } from "react";
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
         margin: 10,
      },
      "& .MuiButton-root": {
         background: "black",
         marginBottom: 10,
         marginTop: 20,
      },
   },
   fileButton: {
      float: "left",
   },
   ".MuiButtonBase-root svg": {
      color: "black",
   },
});
const MyModal = (props) => {
   const {
      row,
      newProduct,
      setNewProduct,
      buttonName,
      handleUploadFile,
      addProduct,
      imgRef,
   } = props;
   const [open, setOpen] = useState(false);
   const [errorText, setErrorText] = useState("");
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   const classes = useStyle();
   const p2e = (s) => s.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));
   const handleChangeValidate = (event) => {
      setNewProduct({
         ...newProduct,
         [event.target.name]: event.target.value,
      });
      if (event.target.value.match(/\d/g)) {
         setErrorText("");
      } else {
         setErrorText("لطفا عدد وارد کنید!");
      }
   };
   return (
      <div>
         <div
            onClick={handleOpen}
         >
            {buttonName}
         </div>

         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box className={classes.root}>
               {/* <button onClick={handleUploadFile}>upload</button> */}
               <Button
                  className={classes.fileButton}
                  variant="contained"
                  component="label"
               >
                  افزودن عکس
                  <input
                     type="file"
                     multiple
                     hidden
                     onChange={handleUploadFile}
                  />
               </Button>

               <TextField
                  className={classes.inputName}
                  label="نام کالا"
                  name="name"
                  defaultValue={row?.name}
                  variant="standard"
                  value={newProduct?.name}
                  onChange={(e) =>
                     setNewProduct({
                        ...newProduct,
                        [e.target.name]: e.target.value,
                     })
                  }
               />
               <TextField
                  label="قیمت"
                  name="price"
                  variant="standard"
                  helperText={errorText}
                  defaultValue={row?.price}
                  error={errorText}
                  value={newProduct?.price}
                  onChange={handleChangeValidate}
               />
               <img
                  style={{ float: "left" }}
                  alt={""}
                  src=""
                  ref={imgRef}
                  height={100}
               />

               <TextField
                  label="تعداد موجودی"
                  name="inventory"
                  variant="standard"
                  defaultValue={row?.inventory}
                  helperText={errorText}
                  error={errorText}
                  value={newProduct?.inventory}
                  onChange={handleChangeValidate}
               />

               <FormControl
                  name="categoryId"
                  fullWidth
                  defaultValue={row?.categoryId}
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
                  value={newProduct?.subCategoryId}
                  defaultValue={row?.subCategoryId}
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
               <Editor
                  description={row?.description}
                  newProduct={newProduct}
                  setNewProduct={setNewProduct}
               />
               <Button
                  onClick={() => {
                     addProduct();
                     handleClose();
                  }}
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
