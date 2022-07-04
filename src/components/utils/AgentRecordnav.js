import React from "react";
import "./Agentrecordnav.css";
import Navitems from "./Navitems";
function AgentRecordnav() {
  return (
    <div className="agentrecordnav">
      <Navitems title="All Credit" className="size" />
      <Navitems title="All Debit" className="size" />
      <Navitems title="Ticket Printed" className="size" />
      <Navitems title="Reversed Ticket" className="size" />
      <Navitems title="Deposit" className="size" />
      <Navitems title="Transaction History" className="size" />
    </div>
  );
}

export default AgentRecordnav;
