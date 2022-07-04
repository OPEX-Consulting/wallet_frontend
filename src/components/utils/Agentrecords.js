import React, { useState } from "react";
import NavLinks from "./NavLinks";

function Agentrecords() {
  const [active, setActive] = useState("agentcreditrecord");
  const [nav, setNav] = useState("agentmain");
  return (
    <>
      <NavLinks
        title="All Credits"
        className={`${active === "agentallcredit" && "adjust"}`}
        handleNavigationlinks={() => {
          setNav("agentallcredit");
          setActive("agentallcredit");
        }}
      />
      <NavLinks
        title="All Debits"
        className={`${active === "agentalldebit" && "adjust"}`}
        handleNavigationlinks={() => {
          setNav("agentalldebit");
          setActive("agentalldebit");
        }}
      />
      <NavLinks
        title="Ticket printed"
        className={`${active === "ticketprinted" && "adjust"}`}
        handleNavigationlinks={() => {
          setNav("ticketprinted");
          setActive("ticketprinted");
        }}
      />
      <NavLinks
        title="Reversed Ticket"
        className={`${active === "agentreverseticket" && "adjust"}`}
        handleNavigationlinks={() => {
          setNav("agentreverseticket");
          setActive("agentreverseticket");
        }}
      />
      <NavLinks
        title="Deposit"
        className={`${active === "agentdeposit" && "adjust"}`}
        handleNavigationlinks={() => {
          setNav("agentdeposit");
          setActive("agentdeposit");
        }}
      />
      <NavLinks
        title="Transaction History"
        className={`${active === "agenttransactionhist" && "adjust"}`}
        handleNavigationlinks={() => {
          setNav("agenttransactionhist");
          setActive("agenttransactionhist");
        }}
      />
    </>
  );
}

export default Agentrecords;
