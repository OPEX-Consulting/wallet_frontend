import React from "react";
import Govtheader from "./Govtheader";
import Govtmain from "./Govtmain";
import Govtnav from "./Govtnav";

function Govthome() {
  return (
    <>
      <Govtnav />
      <Govtheader />
      <Govtmain />
    </>
  );
}

export default Govthome;
