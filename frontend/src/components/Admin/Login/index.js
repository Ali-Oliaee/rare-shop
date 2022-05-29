import React from "react";
import { AdminApi } from "../../../api/AdminApi";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import Image from "../../../assets/pic/channelBackground.jpeg";
import { setAdminInfo } from "../../../redux/reducers/adminSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { UserApi } from "../../../api/UserApi";
const Container = styled("div")`
   width: 65vw;
   height: 70vh;
   background-image: url(${Image});
   background-repeat: no-repeat;
   background-size: cover;
   margin: 7rem auto;
   border-radius: 2rem;
   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
   padding: 9.4rem 0;
`;
const FormSubmit = styled("form")`
   width: 50%;
   background: white;
   border-radius: 2rem;
   margin: auto;
   padding: 2rem;
   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
const FiledInput = styled("input")`
   width: 100%;
   padding: 1rem 2rem;
   border: "1px solid black";
   border: none;
   border-radius: 2rem;
   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
const MyButton = styled("button")`
   border-radius: 2rem;
   border: none;
   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
   padding: 10px;
   margin: auto;
   text-aligne: center;
   width: 100%;
   background: #bb906d;
`;
const Login = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const formik = useFormik({
      initialValues: {
         username: "",
         password: "",
      },
      validationSchema: Yup.object({
         username: Yup.string()
            .min(3, "نام کاربری باید شامل حداقل ۳ کارکتر باشد.")
            .max(50, "نام شما باید شامل حداکثر ۵۰ کارکتر باشد!")
            .required("پر کردن این فیلد ضروری است!"),
         password: Yup.string()
            .min(3, "کلمه عبور شما باید شامل حداقل 8 کارکتر باشد!")
            .max(50, "کلمه عبور شما باید شامل حداکثر 50 کارکتر باشد!")
            .required("پر کردن این فیلد ضروری است!"),
      }),

      onSubmit: (values, { setSubmitting }) => {
         setSubmitting(false);
         localStorage.removeItem("token");
         AdminApi.login(values)
         .then((res) => {
               const token = res.data.token;
               localStorage.setItem("token", token);
               dispatch(setAdminInfo(token));
               // toast.success("ورود با موفقیت انجام شد");
               navigate("/dashboard/products");
            })
            .catch((err) => {
               alert("hello")
               toast.error("نام کاربری یا رمز عبور صحیح نمی باشد :(");
               // setButtonLoading(false);
            });
      },
   });
   return (
      <Container>
         <FormSubmit onSubmit={formik.handleSubmit}>
            <FiledInput
               type="text"
               placeholder="نام کاربری"
               id="username-input"
               name="username"
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.username}
            />
            <p className="error">
               {formik.touched.username &&
                  formik.errors.username &&
                  formik.errors.username}
            </p>
            <FiledInput
               type="text"
               placeholder="رمز عبور"
               id="password-input"
               name="password"
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.password}
            />
            <p className="error">
               {formik.errors.password &&
                  formik.touched.password &&
                  formik.errors.password}
            </p>

            <MyButton type="submit">ورود</MyButton>

            <Link to="/">بازگشت به سایت</Link>
         </FormSubmit>
      </Container>
   );
};

export default Login;
