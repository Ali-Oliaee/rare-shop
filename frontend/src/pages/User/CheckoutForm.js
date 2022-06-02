import React from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getUserInfo } from "../../redux/reducers/CartSlice";
// import { DatePicker } from "jalali-react-datepicker";
// import { RangePicker } from "react-jalali-datepicker";
import { OrdersApi } from "../../api/OrdersApi";
import Order from "../Admin/Order";
const FormSubmit = styled("form")`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   background: white;
   width: 40vw;
   border-radius: 2rem;
   margin: 3rem auto;
   padding: 2rem;
   textalign: center;
   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
   background: #e6bc98;
`;
const FiledInput = styled("input")`
   width: 80%;
   padding: 0.5rem 2rem;
   border: "1px solid black";
   border: none;
   border-radius: 2rem;
   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
const MyButton = styled("button")`
   border-radius: 2rem;
   border: none;
   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
   padding: 5px;
   margin: auto;
   text-aligne: center;
   width: 10rem;
`;
const Checkout = () => {
   const orderData = useSelector((state) => state.cart);
   const registerOrder = async () => {
      await OrdersApi.post(orderData);
   };
   const phoneRegEx =
      /(0|\\+98)?([ ]|-|[()]){0,2}9[0|1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi;
   const dispatch = useDispatch();
   const formik = useFormik({
      initialValues: {
         firstName: "",
         lastName: "",
         date: null,
         phone: null,
         address: "",
      },
      validationSchema: Yup.object({
         firstName: Yup.string()
            .min(2, "نام شما باید شامل حداقل ۲ کارکتر باشد.")
            .max(50, "نام شما باید شامل حداکثر ۵۰ کارکتر باشد!")
            .required("پر کردن این فیلد ضروری است!"),
         lastName: Yup.string()
            .min(2, " نام خانوادگی شما باید شامل حداقل ۲ کارکتر باشد !")
            .max(50, "کلمه عبور شما باید شامل حداکثر 50 کارکتر باشد!")
            .required("پر کردن این فیلد ضروری است!"),
         date: Yup.number(),
         phone: Yup.string()
            .trim()
            .matches(phoneRegEx, "شماره ی  وارد شده نامعتبر میباشد!")
            .required("شماره همراه خود را وارد کنید.")
            .max(13, "شماره ی  وارد شده نامعتبر میباشد!"),
      }),
      onSubmit: (values) => {
         alert(JSON.stringify(values, null, 2));
         dispatch(getUserInfo(values));
         registerOrder();
         // window.location.replace('http://localhost:5500/')
      },
   });
   return (
      <>
         <FormSubmit onSubmit={formik.handleSubmit}>
            <h2>اطلاعات مشتری</h2>
            <FiledInput
               type="text"
               placeholder="نام "
               id="firstname"
               name="firstName"
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.firstName}
            />
            <p className="error">
               {formik.touched.firstName &&
                  formik.errors.firstName &&
                  formik.errors.firstName}
            </p>
            <FiledInput
               type="text"
               placeholder="نام خانوادگی"
               id="lastname"
               name="lastName"
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.lastName}
            />
            <p className="error">
               {formik.touched.lastName &&
                  formik.errors.lastName &&
                  formik.errors.lastName}
            </p>
            <FiledInput
               type="text"
               placeholder="آدرس "
               id="address"
               name="address"
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.address}
            />
            <p className="error">
               {formik.touched.address &&
                  formik.errors.address &&
                  formik.errors.address}
            </p>
            <FiledInput
               type="phone"
               placeholder="تلفن همراه "
               id="phone-number"
               name="phone"
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.phone}
            />
            <p className="error">
               {formik.touched.phone &&
                  formik.errors.phone &&
                  formik.errors.phone}
            </p>
            <FiledInput
               type="text"
               placeholder="تاریخ تحویل"
               id="delivery-date"
               name="date"
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.date}
            />
            {/* <RangePicker/> */}
            <p className="error">
               {formik.errors.date && formik.touched.date && formik.errors.date}
            </p>
            <div>
               <MyButton style={{ background: "green" }} type="submit">
                  پرداخت
               </MyButton>

               <MyButton style={{ background: "red" }} type="submit">
                  انصراف
               </MyButton>
            </div>
         </FormSubmit>
      </>
   );
};
export default Checkout;
