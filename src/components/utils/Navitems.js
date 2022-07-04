import React from "react";
import "./Navitems.css";

function Navitems({ Icon, title, className, handleNavigation }) {
  return (
    <div className={`navitems__items ${className}`} onClick={handleNavigation}>
      {Icon && <Icon className="navitems__icon" />}
      <span>{title}</span>
    </div>
  );
}

export default Navitems;
