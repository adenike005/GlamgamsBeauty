import React from 'react'
import '../Style/Section.css';
import Eclipe from '../../public/images/Eclipe.png'
import Rect from '../../public/images/Rect.png'

function Section() {
  return (
    <div className='About_container'>
        <div className="left">
            <div className="content">
                <div className="title">
                    <h3>Natural Ingredients, 
                    Natural Shine</h3>
                </div>
                <p>Our product range encompasses skincare, makeup, haircare, fragrant
 and body care items, all tailored to alleviate common beauty concerns 
and accentuate your natural features</p>
            </div>
        </div>
        <div className="right">
           <div className="img-container">
            <div className="img-stack top">
                <img src={Eclipe } className='img'/>
            </div>
            <div className="img-stack bottom">
                <img src={Rect} className='img'/>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Section