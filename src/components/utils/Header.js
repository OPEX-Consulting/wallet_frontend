import React from "react";
import "./Header.css";
import { AiOutlineLogout } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <nav className="header__nav">
        <Link to="/">
          <div className="header__logo">
            <img src="assets/images/logo.png" alt="logo" />
            {/* <h2>COLLECTIONS</h2> */}
          </div>
        </Link>
        <div className="header__right">
          <div className="header__user">
            <FaUserCircle className="header__usericon" />
            <span>User</span>
          </div>
          <div className="header__logout">
            <AiOutlineLogout className="header__usericon" />
            <span>Logout</span>
          </div>
        </div>
      </nav>
      {/* Mobile Nav will go here */}
    </div>
  );
}

export default Header;
