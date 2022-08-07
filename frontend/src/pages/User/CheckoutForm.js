/* eslint-disable array-callback-return */
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { DatePicker } from 'jalali-react-datepicker'
import OrdersApi from '../../api/OrdersApi'
import ProductsApi from '../../api/Products'

const FormSubmit = styled('form')`
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
   background: #9381ff;
`
const FiledInput = styled('input')`
   width: 80%;
   padding: 0.5rem 2rem;
   border: "1px solid black";
   border: none;
   border-radius: 2rem;
   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`
const MyButton = styled('button')`
   border-radius: 2rem;
   border: none;
   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
   padding: 5px;
   margin: auto;
   text-aligne: center;
   width: 10rem;
   background: #ff5d8f;
`
function Checkout() {
  const reduxData = useSelector((state) => state)
  const orderItems = []
  reduxData?.cart.cartItems.map((item) => {
    orderItems.push({
      name: item.productDetail.name,
      thumbnail: item.productDetail.image,
      price: item.productDetail.price,
      quantity: item.count,
    })
  })

  const phoneRegEx = /(0|\\+98)?([ ]|-|[()]){0,2}9[0|1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phone: null,
      address: '',
      date: null,
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, 'نام شما باید شامل حداقل ۲ کارکتر باشد.')
        .max(50, 'نام شما باید شامل حداکثر ۵۰ کارکتر باشد!')
        .required('پر کردن این فیلد ضروری است!'),
      lastName: Yup.string()
        .min(2, ' نام خانوادگی شما باید شامل حداقل ۲ کارکتر باشد !')
        .max(50, 'کلمه عبور شما باید شامل حداکثر 50 کارکتر باشد!')
        .required('پر کردن این فیلد ضروری است!'),
      date: Yup.number(),
      phone: Yup.string()
        .trim()
        .matches(phoneRegEx, 'شماره ی  وارد شده نامعتبر میباشد!')
        .required('شماره همراه خود را وارد کنید.')
        .max(13, 'شماره ی  وارد شده نامعتبر میباشد!'),
    }),
    onSubmit: async (values) => {
      try {
        const res = await OrdersApi.post({
          customerDetails: values,
          orderItems,
          purchaseTotal: reduxData.cart.cartTotalAmount,
          orderDate: Date.now(),
          orderStatus: 3,
          delivery: values.date,
          deliveredAt: null,
        })
        try {
          reduxData?.cart.cartItems.map(async (item) => {
            await ProductsApi.patch(item.productDetail.id, {
              inventory: item.productDetail.inventory - item.count,
            })
          })
        } catch (err) {
          Promise.reject(err)
        }

        localStorage.setItem('orderId', res.data.id)
        window.location.replace('http://localhost:5500/')
      } catch (err) {
        Promise.error(err)
      }
    },
  })
  return (
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
        {formik.touched.firstName
                  && formik.errors.firstName
                  && formik.errors.firstName}
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
        {formik.touched.lastName
                  && formik.errors.lastName
                  && formik.errors.lastName}
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
        {formik.touched.address
                  && formik.errors.address
                  && formik.errors.address}
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
        {formik.touched.phone
                  && formik.errors.phone
                  && formik.errors.phone}
      </p>
      <DatePicker
        placeholder="انتخاب تاریخ"
        locale="fa-IR"
        format="YYYY/MM/DD"
        preSelected={new Date().toLocaleString('fa-IR')}
        onClickSubmitButton={(i) => {
          // eslint-disable-next-line no-underscore-dangle
          const deliveryDate = new Date(i.value._d)
          formik.values.date = deliveryDate.getTime()
        }}
      />
      <p className="error">
        {formik.errors.date && formik.touched.date && formik.errors.date}
      </p>
      <div>
        <MyButton type="submit">رفتن به صفحه پرداخت</MyButton>
      </div>
    </FormSubmit>
  )
}
export default Checkout
