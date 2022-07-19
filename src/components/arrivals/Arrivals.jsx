import React from "react";
import "./Arrivals.css";
import Title from "../../assets/arrivals-title.png";
import ArrivalImg1 from "../../assets/Rectangle 119 arrival.png";
import ArrivalImg2 from "../../assets/Rectangle 127 arrival.png";
import ArrivalImg3 from "../../assets/Rectangle 94 arrival.png";
import ArrivalImg4 from "../../assets/Rectangle 119 arrival2.png";
import MyButton from "../../components/myButton/MyButton";

const arrivals = [
  { id: 1, image: ArrivalImg1, title: "Seven Zero Five", price: "$30.00" },
  { id: 2, image: ArrivalImg2, title: "Seven Zero Five", price: "$99.00" },
  { id: 3, image: ArrivalImg3, title: "Seven Zero Five", price: "$30.00" },
  { id: 4, image: ArrivalImg4, title: "Seven Zero Five", price: "$70.00" },
  { id: 5, image: ArrivalImg1, title: "Seven Zero Five", price: "$30.00" },
  { id: 6, image: ArrivalImg2, title: "Seven Zero Five", price: "$99.00" },
  { id: 7, image: ArrivalImg3, title: "Seven Zero Five", price: "$30.00" },
  { id: 8, image: ArrivalImg4, title: "Seven Zero Five", price: "$90.00" },
];

const Arrivals = () => {
  return (
    <div className="arrivals">
      <div className="arrivalsTitle">
        <img src={Title} alt="New arrivals" className="arrivalsTitleImage" />
      </div>
      <div className="arrialsWrapper">
        {arrivals.map((item) => (
          <div className="arrivalsItem" key={item.id}>
            <img src={item.image} alt="" className="arrivalsItemImage" />
            <div className="arrivalsItemData">
              <div className="arrivalsItemTitle">{item.title}</div>
              <div className="arrivalsItemPrice">{item.price}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="arrivalsButton">
        <MyButton>View all products</MyButton>
      </div>
    </div>
  );
};

export default Arrivals;
