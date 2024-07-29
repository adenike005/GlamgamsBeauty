import React from 'react'

import { motion } from 'framer-motion'
import '../Styles/Services.css'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'


const Services = ({item}) => {
  return (
  <Col lg='4' md='4' sm='6' xs='12'>
    <div className="Services_Item">
        <div className="Services_img">
            <img whileHover={{scale: 0.9}} src={item.imgUrl} alt="productImg" />
        </div>
        <div className='p-2 Services_info'>
        <h3 className="Services_name">
            <Link to='/shop/id'>
            {item.productName}
            </Link>
        </h3>
        {/* <span >{item.description}</span> */}
        </div>
       
    </div>
  </Col>
  )
}

export default Services;