import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="headerContainer">
      <nav className="headerNavbar">
        <a href="#" className="headerLink">
          home
        </a>
        <a href="#" className="headerLink">
          shop
        </a>
        <a href="#" className="headerLink">
          jackets & coats
        </a>
        <a href="#" className="headerLink">
          hoodies & t-shirts
        </a>
        <a href="#" className="headerLink">
          pants
        </a>
        <a href="#" className="headerLink">
          boots
        </a>
        <a href="#" className="headerLink">
          other
        </a>
        <a href="#" className="headerLink">
          digthatthing custom
        </a>
      </nav>
      <nav className={showMenu ? "headerNavbarMobile" : "disable"}>
        <a href="#" className="headerLink">
          home
        </a>
        <a href="#" className="headerLink">
          shop
        </a>
        <a href="#" className="headerLink">
          jackets & coats
        </a>
        <a href="#" className="headerLink">
          hoodies & t-shirts
        </a>
        <a href="#" className="headerLink">
          pants
        </a>
        <a href="#" className="headerLink">
          boots
        </a>
        <a href="#" className="headerLink">
          other
        </a>
        <a href="#" className="headerLink">
          digthatthing custom
        </a>
      </nav>
      <div className="headerNavbarMobileIcon">
        {showMenu ? (
          <p onClick={() => setShowMenu(false)}>Show</p>
        ) : (
          <p onClick={() => setShowMenu(true)}>Hide</p>
        )}
      </div>
    </header>
  );
};

export default Header;
