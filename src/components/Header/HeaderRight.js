import React from "react";
import "./HeaderRight.css";

const HeaderRight = ({ Icon, title }) => {
  return (
    <div className="headerRight__options">
      {Icon && <Icon className="headerRight__Icon" />}
      <p>{title}</p>
    </div>
  );
};

export default HeaderRight;
