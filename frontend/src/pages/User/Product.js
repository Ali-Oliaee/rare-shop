import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid'
import { Button } from '@mui/material'
import Counter from '../../components/User/Cart/Counter'
import Imagegallery from '../../components/User/ImageGallery'
import { addToCart } from '../../redux/reducers/CartSlice'
import ProductsApi from '../../api/Products'
import './styles.scss'

function ProductDetails() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [productDetail, setProductDetail] = useState({})
  const [images, setImages] = useState([])
  const [show, setShow] = useState(false)
  const [count, setCount] = useState(1)
  const [isAddedToCart, setIsAddedToCart] = useState(false)
  const descRef = useRef()
  const getDetails = async () => {
    const res = await ProductsApi.get(id)
    setProductDetail(res.data)
    const gallery = res.data?.images
    setImages(gallery)
    descRef.current.innerHTML = res.data?.description
  }
  const handleShow = () => setShow(!show)
  useEffect(() => {
    getDetails()
  }, [id, count])
  const handleAddToCart = () => {
    if (count > productDetail.inventory) toast.error(`از این کالا تنها ${productDetail.inventory} عدد در انبار موجود میباشد!`)

    dispatch(addToCart({ productDetail, count }))
    setIsAddedToCart(true)
  }
  const handleDecrement = (product) => setCount(product[1])
  const handleIncrement = (product) => setCount(product[1])

  return (
    <div className="product-page">
      <div>
        <div className="card-body">
          <ImageList className="image-list" onClick={handleShow} cols={1}>
            {images?.map((item) => (
              <ImageListItem key={uuidv4()}>
                <img
                  src={`http://127.0.0.1:8000${item}`}
                  srcSet={`${`http://127.0.0.1:8000${item}`}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
          <img src={`http://127.0.0.1:8000${productDetail.image}`} alt="محصول" />
          <div className="card-content">
            <div>
              <h1 className="card-title">{productDetail.name}</h1>
              <p className="card-description">{'دسته بندی: پوشاک - شلوار '}</p>
              <p className="card-description">
                {` قیمت: ${productDetail.price?.toLocaleString('fa')} تومان`}
              </p>
            </div>
            <div className="card-footer">
              <Counter
                inventory={productDetail.inventory}
                data={{ productDetail, count }}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
              />
              {productDetail.inventory ? (
                <Button
                  className="card-button"
                  disabled={isAddedToCart}
                  onClick={handleAddToCart}
                >
                  افزودن به سبد خرید
                </Button>
              ) : <Button className="card-button" disabled>موجود نیست</Button>}
            </div>
          </div>
        </div>
        <p className="card-description" ref={descRef} style={{ color: 'black' }} />
      </div>
      {show && (
      <div className="gallery">
        <Imagegallery images={images} />
      </div>
      )}
    </div>
  )
}

export default ProductDetails
