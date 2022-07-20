import React from "react";
import mainBg from "../../assets/DTT.jpg";
import MyButton from "../../components/myButton/MyButton";
import Flag from "../../assets/flag Ukraine.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="mainBanner">
      <img src={mainBg} alt="" className="mainBannerBgImage" />
      {/* <div className="mainBannerBox">
        <h2 className="mainBannerBoxTitle">Street wears</h2>
        <p className="mainBannerBoxText">
          High quality cool tshirts for street fashion
        </p>
        <button className="mainBannerBoxButton">
          Start shopping <img src={FluentArrow} alt="" />
        </button>
      </div> */}
      {/* <div className="supportUkraine">
        <div className="supportUkraineBlue">
          <p>Support</p>
        </div>
        <div className="supportUkraineYellow">
          <p>Ukraine</p>
        </div>
      </div> */}
      <div className="mainBannerButtons">
        <MyButton>About</MyButton>
        <MyButton
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          Support
          <img src={Flag} alt="" className="flagImg" />
        </MyButton>
      </div>
    </div>
  );
};

export default Banner;
