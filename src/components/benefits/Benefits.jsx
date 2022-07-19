import React from "react";
import Cart from "../../assets/benefir-cart.png";
import "./Benefits.css";
import Protection from "../../assets/benefit-protection.png";
import Guarantee from "../../assets/benefit-guarantee.png";
import Saving from "../../assets/benefit-savings.png";

const benefits = [
  {
    id: 1,
    image: Cart,
    title: "Free Delivery",
    desc: "Lorem ipsum dolor sit amet, consectetur adipi elit. ipsum dolor sitamet.",
  },
  {
    id: 2,
    image: Protection,
    title: "100% secure payment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipi elit. ipsum dolor sitamet.",
  },
  {
    id: 3,
    image: Guarantee,
    title: "Quality guarantee",
    desc: "Lorem ipsum dolor sit amet, consectetur adipi elit. ipsum dolor sitamet.",
  },
  {
    id: 4,
    image: Saving,
    title: "Guaranteed savings",
    desc: "Lorem ipsum dolor sit amet, consectetur adipi elit. ipsum dolor sitamet.",
  },
];

const Benefits = () => {
  return (
    <div className="benefits">
      {benefits.map((item) => (
        <div className="benefitItem" key={item.id}>
          <div className="benefitItemIcon">
            <img
              src={item.image}
              alt={item.title}
              className="benefitItemIconImg"
            />
          </div>
          <div className="benefitItemTitle">{item.title}</div>
          <div className="benefitItemDesc">{item.desc}</div>
        </div>
      ))}
    </div>
  );
};

export default Benefits;
