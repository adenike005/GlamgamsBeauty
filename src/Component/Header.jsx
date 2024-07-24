import React, { useState, useRef, useEffect } from "react";
import "../Styles/Header.css";
import { Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import user from '/images/usericon.png';
import Logo from '/images/logo.png';
import { motion } from "framer-motion";

const nav_link = [
  {
    path: 'home',
    display: 'Home'
  },
  {
    path: 'shop',
    display: 'Shop'
  },
  {
    path: 'cart',
    display: 'Cart'
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [menuOpen]);

  const menuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavLinkClick = () => {
    setMenuOpen(false);
  };

  const handleBackgroundClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="header">
      <Container>
        <Row>
          <div className="nav_Wrapper">
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
            <div className={`navigation ${menuOpen ? 'active_menu' : ''}`} ref={menuRef} onClick={handleBackgroundClick}>
              <ul className="menu" onClick={(e) => e.stopPropagation()}>
                {nav_link.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink 
                      to={`/${item.path}`} 
                      className={(navClass) => navClass.isActive ? 'nav_active' : ''}
                      onClick={handleNavLinkClick}
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav_icons">
              <span className="fav_icon">
                <i className='ri-heart-line'></i>
                <div className="badge">1</div>
              </span>
              <span className="cart_icon">
                <i className='ri-shopping-bag-line'></i>
                <div className="badge">1</div>
              </span>
              <span>
                <motion.img whileTap={{ scale: 3.2 }} src={user} alt="user" />
              </span>
              <div className="mobile_menu">
                <span onClick={menuToggle}>
                  <i className='ri-menu-line'></i>
                </span>
              </div>
            </div>
          </div>
          {menuOpen && <div className="fixed-background" onClick={handleBackgroundClick}></div>}
        </Row>
      </Container>
    </div>
  );
};

export default Header;









