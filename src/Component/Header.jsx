import React from "react";
import "../Styles/Header.css";
import { Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import user from '../../public/images/usericon.png'

const Header = () => {
  return (
    <div className="header">
      <Container>
        <Row>
          <div className="nav_Wrapper">
            <div className="logo">
                <span>GemGlam</span>
            </div>
            <div className="navigation">
                <ul className="menu">
                    <li className="nav_item">
                        <NavLink to='home'>Home</NavLink>
                    </li>
                    <li className="nav_item">
                        <NavLink to='shop'>Shop</NavLink>
                    </li>
                    <li className="nav_item">
                        <NavLink to='cart'>Cart</NavLink>
                    </li>
                </ul>
            </div>

            <div className="nav_icons">
                <span className="fav_icon">
                    <i class= 'ri-heart-line'></i>
                </span>
                <span className="cart_icon">
                    <i class='ri-shopping-bag-line'></i>
                </span>
                <span><img src={user} alt="logo" /></span>
            </div>

            <div className="mobile_menu">
                <span><i class='ri-menu-line'></i></span>
            </div>

          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
