import React from "react";

function Govtheader() {
  return (
    // <!-- top-bar start -->
    <header>
      <div className="top-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-3">
              <div className="top-heading">
                <h2>Lagos State Government</h2>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="search-bar">
                <form action="dummy">
                  <button>
                    <i className="flaticon-magnifying-glass"></i>
                  </button>
                  <input type="text" placeholder="Search for something" />
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-5">
              <div className="settings">
                <a href="dummy">
                  <i className="flaticon-settings-1"></i>
                </a>
              </div>
              <div className="notofication">
                <a href="dummy">
                  <i className="flaticon-notification"></i>
                </a>
              </div>
              <div className="profile">
                <a href="dummy">
                  <img src="assets/images/profile.png" alt="images" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="toogle-bar">
          <span id="toggle">
            <i className="fas fa-bars"></i>
          </span>
        </div>
      </div>
    </header>
    // <!-- top-bar end -->
  );
}

export default Govtheader;
