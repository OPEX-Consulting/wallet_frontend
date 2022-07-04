import React from "react";

function Printedticket({ allprints, pendingprint, inprint, date, printer }) {
  return (
    <div className="agentmain__printedticketdata">
      <div className="agentmain_printedticketdata1">{allprints}</div>
      <div className="agentmain_printedticketdata2">{pendingprint}</div>
      <div className="agentmain_printedticketdata3">{inprint}</div>
      <div className="agentmain_printedticketdata4">{date}</div>
      <div className="agentmain_printedticketdata5">
        <button>{printer}</button>
      </div>
    </div>
  );
}

export default Printedticket;
