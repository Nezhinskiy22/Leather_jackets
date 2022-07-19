import React from "react";
import "./MyButton.css";

const MyButton = ({ children }) => {
  return <button className="sexyButton">{children}</button>;
};

export default MyButton;
