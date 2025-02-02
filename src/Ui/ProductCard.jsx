import React from 'react'
import productImg from '/images/shop13.png'
import { motion } from 'framer-motion'
import '../Styles/ProductCard.css'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/Slices/CartSlices'
import { toast } from 'react-toastify'


const ProductCard = ({item}) => {
    const dispatch = useDispatch()
    const addToCart = () =>{
        dispatch(cartActions.addItems({
            id: item.id,
            productName: item.productName,
            price : item.price,
            image : item.imgUrl,

        }));
         toast.success("product added Successfully")
        
    }
  return (
  <Col lg='3' md='4'>
    <div className="product_Item">
        <div className="product_img">
            <motion.img whileHover={{scale: 0.9}} src={item.imgUrl} alt="productImg" />
        </div>
        <div className='p-2 product_info'>
        <h3 className="product_name">
            <Link to='/shop/id'>{item.productName}</Link>
        </h3>
        <span >{item.category}</span>
        </div>
        <div className="product_card-bottom d-flex align-items-center justify-content-between p-2">
            <span className="price">${item.price}</span>
            <motion.span whileTap={{ scale: 1.2}} onClick={addToCart}>
                <i className='ri-add-line'></i>
            </motion.span>
        </div>
    </div>
  </Col>
  )
}

export default ProductCard