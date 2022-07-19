import React from "react";
import "./Categories.css";
import categoryImage1 from "../../assets/nathan-oakley-category.png";
import categoryImage2 from "../../assets/nathan-oakley-category2.png";
import categoryImage3 from "../../assets/nathan-oakley-category3.png";

const categories = [
  { id: 1, image: categoryImage1, title: "Printed t-shirts" },
  { id: 2, image: categoryImage2, title: "t-shirts" },
  { id: 3, image: categoryImage3, title: "speak your mind" },
];

const Categories = () => {
  return (
    <div className="categories">
      {categories.map((item) => (
        <div className="categoriesItem" key={item.id}>
          <img src={item.image} alt="" className="categoriesItemImage" />
          <div className="categoriesItemTitle">{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
