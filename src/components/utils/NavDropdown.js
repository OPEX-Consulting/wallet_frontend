import React from "react";

import "./NavDrop.css";

function NavDropdown({ mainnavTitle, Icon1, Icon2, handleSlider }) {
  return (
    <div className="dashboardUsers">
      {Icon1 ? <Icon1 className="user__icon" /> : ""}
      <span>{mainnavTitle}</span>
      <Icon2 className="dashboard__down" onClick={handleSlider} />
    </div>
  );
}

export default NavDropdown;
