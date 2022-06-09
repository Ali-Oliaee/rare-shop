import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import moment from "jalali-moment";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
const style = {
   position: "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: 400,
   bgcolor: "background.paper",
   border: "2px solid #000",
   boxShadow: 24,
   p: 4,
};

export default function OrderDetailModal({ data, isDelivered, clickHandler }) {
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   let delivery = new Date(data.delivery);
   let orderDate = new Date(data.orderDate);
   let deliveredAt = new Date(data.deliveredAt);
   return (
      <div>
         <Button style={{ margin: 0 }} onClick={handleOpen}>
            بررسی سفارش
         </Button>
         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box sx={style}>
               <Typography id="modal-modal-title" variant="p">
                  {` نام مشتری: ${
                     data.customerDetails?.firstName +
                     " " +
                     data.customerDetails?.lastName
                  }`}
               </Typography>
               <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {`آدرس:‌ ${data.customerDetails?.address}`}
               </Typography>
               <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {`تلفن: ${data.customerDetails?.phone}`}
               </Typography>
               <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {`زمان تحویل: ${moment(delivery, "YYYY/MM/DD")
                     .locale("fa")
                     .format("YYYY/MM/DD")}`}
               </Typography>
               <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {`زمان سفارش: ${moment(orderDate, "YYYY/MM/DD")
                     .locale("fa")
                     .format("YYYY/MM/DD")}`}
               </Typography>
               <TableContainer>
                  <Table>
                     <TableHead>
                        <TableRow>
                           <TableCell>کالا</TableCell>
                           <TableCell>قیمت</TableCell>
                           <TableCell>تعداد</TableCell>
                        </TableRow>
                     </TableHead>
                     <TableBody>
                        {data.orderItems.map((row) => {
                           return (
                              <TableRow>
                                 <TableCell>
                                    <Link
                                       to={`/product/${data.id}`}
                                       className="link-style"
                                    >
                                       {" "}
                                       {row.name}
                                    </Link>
                                 </TableCell>
                                 <TableCell>{row.price}</TableCell>
                                 <TableCell>{row.quantity}</TableCell>
                              </TableRow>
                           );
                        })}
                     </TableBody>
                  </Table>
               </TableContainer>
               {isDelivered ? (
                  <Typography variant="p">{`زمان تحویل: ${moment(
                     deliveredAt,
                     "YYYY/MM/DD"
                  )
                     .locale("fa")
                     .format("YYYY/MM/DD")}`}</Typography>
               ) : (
                  <Button onClick={() => clickHandler(data.id)} variant="contained" color="success" sx={{m:2}}>تحویل شد</Button>
               )}
            </Box>
         </Modal>
      </div>
   );
}
