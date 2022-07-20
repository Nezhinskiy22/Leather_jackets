import React from "react";
import footerLogo from "../../assets/footerLogo.png";
import "./Footer.css";
import FacebookIcon from "../../assets/FacebookIcon.png";
import TwitterIcon from "../../assets/TwitterIcon.png";
import PinterestIcon from "../../assets/PinterestIcon.png";
import InstagramIcon from "../../assets/InstagramIcon.png";
import YoutubeIcon from "../../assets/YoutubeIcon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerWrapper">
        <div className="footerLeft">
          <div className="footerLogo">
            <img src={footerLogo} alt="" />
          </div>
          <div className="footerSocialIcons">
            <div className="footerIconWrapper">
              <img src={FacebookIcon} alt="" />
            </div>
            <div className="footerIconWrapper">
              <img src={TwitterIcon} alt="" />
            </div>
            <div className="footerIconWrapper">
              <img src={PinterestIcon} alt="" />
            </div>
            <div className="footerIconWrapper">
              <img src={InstagramIcon} alt="" />
            </div>
            <div className="footerIconWrapper">
              <img src={YoutubeIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="footerRight">
          <div className="footerList">
            <h3>Quick links</h3>
            <p>Home</p>
            <p>About us</p>
            <p>Offers</p>
            <p>Services</p>
            <p>Contact us</p>
          </div>
          <div className="footerList">
            <h3>About</h3>
            <p>How it work</p>
            <p>our packages</p>
            <p>promotions</p>
            <p>refer a friend</p>
          </div>
          <div className="footerList">
            <h3>Help Centre</h3>
            <p>Payments</p>
            <p>Shipping</p>
            <p>Product returns</p>
            <p>FAQs</p>
            <p>Checkout</p>
            <p>other Issues</p>
          </div>
        </div>
      </div>
      <div className="footerBelow">
        <div className="footerUnderline"></div>
        <div className="footerBelowInfo">
          <p>© 2022 UNICLUB. All rights reserved.</p>
          <p>
            Design by <b>TemplatesJungle</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
