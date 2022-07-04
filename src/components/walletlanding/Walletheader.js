import React from "react";
import { Link } from "react-router-dom";
import "./Walletextra.css";

function Walletheader() {
  return (
    // <!-- header -->
    <header className="header header-sticky header-light-text">
      <div className="container">
        <div className="row align-items-center">
          <div className="header-nav w-100">
            <nav className="navbar navbar-light navbar-expand-lg has-mega-menu-advanced">
              <a className="navbar-brand header-brand width" href="index.html">
                <img
                  src="assets/images/logo.png"
                  className="header-logo
                primary-logo img-fluid"
                  alt="logo"
                />{" "}
                <img
                  src="assets/images/logo-light.png"
                  className="header-logo img-fluid"
                  alt="logo"
                />
              </a>

              {/* <!-- navbar menu items --> */}
              <div className="header-menu collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  {/* <!-- menu item : mega menu advanced --> */}
                  <li className="nav-item">
                    <a
                      className="nav-link homelink"
                      href="dummy.html"
                      id="homelink"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Home
                    </a>
                  </li>
                </ul>
              </div>

              {/* <!-- header right side --> */}
              <div className="header-btns">
                <nav className="header-nav-btns">
                  <ul className="list-inline m-0">
                    {/* <!-- buttons & menu toggle button on small devices --> */}

                    <li className="nav-item list-inline-item">
                      <Link to="/signin">
                        <button className="signin__button">Sign In</button>
                      </Link>

                      {/* <a
                        className="nav-link btn btn-info btn-curved"
                        href="signin.html"
                        id="elementlink"
                        role="button"
                      >
                        Sign In
                      </a> */}
                    </li>
                    <li className="list-inline-item">
                      {/* <!-- menu toggle button --> */}
                      <button
                        type="button"
                        className="btn menu-toggle d-block d-lg-none"
                      >
                        <i className="icon--menu-line"></i>
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Walletheader;
