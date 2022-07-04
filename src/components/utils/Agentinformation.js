import React from "react";
import "./Agentinformation.css";

function Agentinformation({ heading = "Agent Information" }) {
  return (
    <div className="agent__agentinformationcontainer">
      <div className="agent__informationtop">
        <h2>{heading} </h2>
        <div className="agent__agentinformation">
          <div className="agent__agentinfo1">
            <h3>Agents Name</h3>
            <span>Joe Money</span>
          </div>
          <div className="agent__agentinfo1">
            <h3>Agents Location</h3>
            <span>Km 8 Royal Estate</span>
          </div>
          <div className="agent__agentinfo1">
            <h3>Agents BVN</h3>
            <span>bvn210299303990</span>
          </div>
          <div className="agent__agentinfo1">
            <h3>Area Covered</h3>
            <span>Ogbomoso North</span>
          </div>
          <div className="agent__agentinfo1">
            <h3>Agents Transaction</h3>
            <span>
              <button>check</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agentinformation;
