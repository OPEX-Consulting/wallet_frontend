import React from "react";

function TransactionHistory({
  allticket,
  reverseticket,
  creditfromgovt,
  ticketosubAg,
  date,
}) {
  return (
    <div className="agent__transationhistorydata">
      <div className="agent_transactiondata1">{allticket}</div>
      <div className="agent_transactiondata2">{reverseticket}</div>
      <div className="agent_transactiondata3">{creditfromgovt}</div>
      <div className="agent_transactiondata4">{ticketosubAg}</div>
      <div className="agent_transactiondata5">{date}</div>
    </div>
  );
}

export default TransactionHistory;
