import React from "react";

function ReverseTicketData({
  allreverseticket,
  tickettracker,
  allticket,
  allprints,
  aprovedticket,
  extraticket,
  date,
}) {
  return (
    <div className="agent__reverseticketdata">
      <div className="agent_reverseticketdata1">{allreverseticket}</div>
      <div className="agent_reverseticketdata2">
        <button>{tickettracker}</button>
      </div>
      <div className="agent_reverseticketdata3">{allticket}</div>
      <div className="agent_reverseticketdata4">{allprints}</div>
      <div className="agent_reverseticketdata5">{aprovedticket}</div>
      <div className="agent_reverseticketdata6">{extraticket}</div>
      <div className="agent_reverseticketdata7">{date}</div>
    </div>
  );
}

export default ReverseTicketData;
