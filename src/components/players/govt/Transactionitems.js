import React from "react";
import "./Transactionitems.css";
function Transactionitems() {
  return (
    <div className="transactionitems">
      <div className="agents__td1">Credit Agent</div>
      <div className="agents__td2">Deposit</div>
      <div className="agents__td3">Withdrawals</div>
      <div className="agents__td4">Transfer</div>
      {/* <div className="agents__td">Agents Manager</div>
      <div className="agents__td">
        <button>check</button>
      </div> */}
    </div>
  );
}

export default Transactionitems;
