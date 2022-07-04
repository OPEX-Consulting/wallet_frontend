import React from "react";
import "./AgentInfoItems.css";
function AgentInfoItems({ handleAgent }) {
  return (
    <div className="agentinfoitems">
      <div className="manageagents__td1">Agent Name</div>
      <div className="manageagents__td2">Agent Location</div>
      <div className="manageagents__td3">
        <button onClick={handleAgent}>check</button>
      </div>
    </div>
  );
}

export default AgentInfoItems;
