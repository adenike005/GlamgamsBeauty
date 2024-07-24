import React from 'react'
import Halmet from '../Component/Halmet'
import { Container, Row, Col } from 'reactstrap'
import main from '/images/about3.png'
import { Link } from 'react-router-dom'
import '../Styles/Home.css'
import { motion } from 'framer-motion'

const Home = () => {
  const year = new Date().getFullYear()
  return<Halmet title={"Home"}>
    <section className='hero_section'>
     <Container>
      <Row>
        <Col lg='6' md='6'>
          <div className="hero-_Content">
            <p className="hero_Subtitle">Treading Product in {year}</p>
            <h2>Enhance your style with exquisite beauty products.</h2>
            <p>ElegantStyle Beauty Company delivers timeless elegance with premium beauty products designed to enhance and celebrate your natural grace.</p>
            <motion.button whileTap={{scale: 2.1}}className="buy_btn">
              <Link to="/shop">Shop Now</Link>
            </motion.button>
          </div>
        </Col>
        <Col lg='6' md='6'>
         <div className="hero_img">
             <img src={main} alt="hero_img" />
         </div>
        </Col>
      </Row>
     </Container>
    </section>
  </Halmet>
}

export default Home