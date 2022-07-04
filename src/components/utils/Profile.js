import React from "react";
import "./Profile.css";

function Profile({ logo, state, email, LGA }) {
  return (
    <div className="profile__details">
      <span className="profileSpan">Dashboard</span>
      <div className="profile__id">
        <h6>
          {state}
          {LGA && LGA}
        </h6>
        <span>{email}</span>
      </div>

      <div className="profile__image">
        <img src={logo} alt="profile" />
      </div>
    </div>
  );
}

export default Profile;
