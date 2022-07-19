import React from "react";
import Logo from "../../assets/logo.png";
import User from "../../assets/heroicons-outline_user.png";
import Heart from "../../assets/heroicons-outline_heart.png";
import ShoppingBag from "../../assets/heroicons-outline_shopping-bag.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="headerContainer">
      <div className="headerLogo">
        <img src={Logo} alt="main" className="headerLogoImg" />
      </div>
      <nav className="headerNavbar">
        <a href="#" className="headerLink">
          Home
        </a>
        <a href="#" className="headerLink">
          Shop
        </a>
        <a href="#" className="headerLink">
          Hoodies
        </a>
        <a href="#" className="headerLink">
          T-Shirts
        </a>
        <a href="#" className="headerLink">
          Accessories
        </a>
        <a href="#" className="headerLink">
          Jackets
        </a>
      </nav>
      <div className="headerIcons">
        <img src={User} alt="User" />
        <img src={Heart} alt="Heart" />
        <img src={ShoppingBag} alt="ShoppingBag" />
      </div>
    </header>
  );
};

export default Header;
