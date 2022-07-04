import React from "react";
import { Link } from "react-router-dom";

function NavLinks({ to, title, className, handleNavigationlinks }) {
  return (
    <Link
      to={`${to ? to : ""}`}
      className={`links ${className}`}
      onClick={handleNavigationlinks}
    >
      <span>{title}</span>
    </Link>
  );
}

export default NavLinks;
