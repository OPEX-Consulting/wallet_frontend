import React from "react";
import "./Govtnav.css";

function Govtnav() {
  return (
    // <!-- left-sidebar start -->
    <aside>
      <div className="left-sidebar">
        <div className="logo-area">
          <div className="main-logo logowidth">
            <a href="index.html">
              <img
                src="assets/images/logo-light.png"
                alt="images"
                // style="width: 30%"
              />
            </a>
          </div>
        </div>
        <div className="sidebar-menu">
          <ul>
            <li className="active">
              <a href="index.html">
                <i className="flaticon-home"></i>
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="dummy">
                <i className="flaticon-money-transfer"></i>
                <span>Transactions</span>
              </a>
            </li>
            <li>
              <a href="dummy">
                <i className="flaticon-user"></i>
                <span>Accounts</span>
              </a>
            </li>
            <li>
              <a href="dummy">
                <i className="flaticon-economic-investment"></i>
                <span>Investments</span>
              </a>
            </li>
            <li>
              <a href="dummy">
                <i className="flaticon-credit-card"></i>
                <span>Credit Cards</span>
              </a>
            </li>
            <li>
              <a href="dummy">
                <i className="flaticon-loan"></i>
                <span>Loans</span>
              </a>
            </li>
            <li>
              <a href="dummy">
                <i className="flaticon-service"></i>
                <span>Services</span>
              </a>
            </li>
            <li>
              <a href="dummy">
                <i className="flaticon-econometrics"></i>
                <span>My Privileges</span>
              </a>
            </li>
            <li>
              <a href="dummy">
                <i className="flaticon-settings"></i>
                <span>Setting</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
    // <!-- left-sidebar end -->
  );
}

export default Govtnav;
