import React from "react";
import mainBg from "../../assets/slider.png";
import FluentArrow from "../../assets/fluent_arrow-right-28-regular.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="mainBanner">
      <img src={mainBg} alt="" className="mainBannerBgImage" />
      <div className="mainBannerBox">
        <h2 className="mainBannerBoxTitle">Street wears</h2>
        <p className="mainBannerBoxText">
          High quality cool tshirts for street fashion
        </p>
        <button className="mainBannerBoxButton">
          Start shopping <img src={FluentArrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
