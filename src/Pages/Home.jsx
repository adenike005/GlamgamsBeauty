import React, { useState, useEffect } from 'react';
import Helmet from '../Component/Halmet';
import { Container, Row, Col } from 'reactstrap';
import main from '/images/about3.png';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';
import { motion } from 'framer-motion';
import ProductList from '../Ui/ProductList';
import Products from '../../src/assets/data/Products';
import ServicesCard from '../Ui/ServicesCard'; // Import ServicesCard
import ServiceData from '../assets/data/serviceData'; // Import ServiceData

const Home = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const filterProducts = Products.filter(item => item.category === "Perfume").slice(0, 4);
    setData(filterProducts);
  }, []);

  const year = new Date().getFullYear();

  return (
    <Helmet title={"Home"}>
      <section className='hero_section'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero_content">
                <p className="hero_subtitle">Trending Product in {year}</p>
                <h2>Enhance your style with exquisite beauty products.</h2>
                <p>ElegantStyle Beauty Company delivers timeless elegance with premium beauty products designed to enhance and celebrate your natural grace.</p>
                <motion.button whileTap={{ scale: 2.1 }} className="buy_btn">
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
      <section className='services_section'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className="section_title">Our Services</h2>
            </Col>
            <ServicesCard data={ServiceData} /> {/* Use ServicesCard here */}
          </Row>
        </Container>
      </section>
      <section className='trending_product'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className="section_title">Trending products</h2>
            </Col>
            <ProductList data={data} />
          </Row>
        </Container>
      </section>
     
    </Helmet>
  );
}

export default Home;
