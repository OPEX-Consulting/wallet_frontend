import React from "react";
import "./Credit.css";

function Credit({ name = "Adebisi Joy" }) {
  return (
    <form className="credit__container">
      <div className="credit__form">{name}</div>
      <div className="credit__amount">
        <input type="text" placeholder="Amount" />
      </div>

      <div className="credit__btn">
        <button type="submit">Credit</button>
      </div>
    </form>
  );
}

export default Credit;
