import React, { useState } from "react";
import Header from "../../utils/Header";
import "./AgentManager.css";
// import { MdDashboard } from "react-icons/md";
// import { FaCog } from "react-icons/fa";
import { BsCreditCardFill } from "react-icons/bs";
import {
  MdAccountBox,
  MdArrowDropDown,
  MdStoreMallDirectory,
} from "react-icons/md";
import { TiThSmall } from "react-icons/ti";
import { AiFillPrinter } from "react-icons/ai";
import { FaUser, FaUserCheck, FaWallet } from "react-icons/fa";
import { CgTrack } from "react-icons/cg";
import Profile from "../../utils/Profile";
import Navitems from "../../utils/Navitems";
import NavDropdown from "../../utils/NavDropdown";
import NavLinks from "../../utils/NavLinks";
import Transactionitems from "./Transactionitems";
import { Link, useNavigate } from "react-router-dom";
import { HiArrowSmLeft } from "react-icons/hi";
import AgentInfoItems from "./AgentInfoItems";
function AgentManager() {
  const navigate = useNavigate();
  const [slider, setSlider] = useState(false);
  const [players, setPlayers] = useState("govt");
  const [subSlider, setSubslider] = useState(false);
  const [accountinfoslider, setAccountinfoslider] = useState(false);

  const [slide, setSlide] = useState(false);
  const [active, setActive] = useState("localgovt");
  const handleSubslider = () => {
    setSubslider(!subSlider);
  };
  const handleSlider = () => {
    setSlider(!slider);
  };
  const handleSlide = () => {
    setSlide(!slide);
  };
  const handleAccountinfoslider = () => {
    setAccountinfoslider(!accountinfoslider);
  };
  const handleNav = () => {
    navigate("/localgovt");
  };
  const handleAgent = () => {
    navigate("/agent");
    console.log("no");
  };
  return (
    <div className="agentmanager">
      <Header />
      <div className="agentmanager__container">
        {/* Left navigation */}
        <nav className="agentmanager__left">
          {players === "govt" && (
            <Profile
              logo="plain-designify.png"
              state="OYO"
              email="govt@yahoo.com"
            />
          )}
          {players === "opex" && (
            <Profile state="OPEX" email="opex@yahoo.com" />
          )}
          {/* Left Items container */}
          <div className="agentmanager__itemscontainer">
            {players === "govt" ? (
              <>
                {/* <Navitems Icon={FaUser} title="Account Info" /> */}
                <div
                  className={`agentmanager__itemsclients users ${
                    active === "accountinfo" && "active"
                  }`}
                  onClick={() => setActive("accountinfo")}
                >
                  <NavDropdown
                    mainnavTitle="Account Info"
                    Icon1={MdAccountBox}
                    Icon2={MdArrowDropDown}
                    handleSlider={handleAccountinfoslider}
                  />
                  {accountinfoslider && (
                    <div className="agentmanagerUserToggle">
                      <NavLinks to="/openaccount" title="Open Account" />
                      <NavLinks to="/updateprofile" title="Update Profile" />
                      <NavLinks to="/uploaddocument" title="Upload Documents" />
                    </div>
                  )}
                </div>
                <Navitems
                  Icon={FaWallet}
                  title="Wallet Balance"
                  handleNav={handleNav}
                />
                <div
                  className={`agentmanager__itemsclients users ${
                    active === "localgovt" && "active"
                  }`}
                  onClick={() => setActive("localgovt")}
                >
                  <NavDropdown
                    mainnavTitle="Local Govt Area"
                    Icon1={MdStoreMallDirectory}
                    Icon2={MdArrowDropDown}
                    handleSlider={handleSlider}
                  />
                  {slider && (
                    <div className="agentmanagerUserToggle">
                      <NavLinks to="/localgovt" title="Local Govt" />
                      <NavLinks to="/govt_revenue" title="Daily Revenue" />
                      <NavLinks
                        to="/transaction"
                        title="Transaction"
                        className="activecolor"
                      />
                      <NavLinks to="/agentmanager" title="Manage Agents" />
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="agentmanager__itemsclients users">
                  <NavDropdown
                    mainnavTitle="Track Agents"
                    Icon1={CgTrack}
                    Icon2={MdArrowDropDown}
                    handleSlider={handleSubslider}
                  />
                  {subSlider && (
                    <div className="agentmanagerUserToggle">
                      <NavLinks to="/creditrecord" title="Credit Record" />
                      <NavLinks to="/agentinfo" title="Agent Information" />
                      <div
                        className={`agentmanager__agentrecord users__agent${
                          active === "creditrecord" && "active"
                        }`}
                        onClick={() => setActive("creditrecord")}
                      >
                        <NavDropdown
                          mainnavTitle="Agent Records"
                          Icon2={MdArrowDropDown}
                          handleSlider={handleSlide}
                        />
                        {slide && (
                          <div className="agentmanagerUserToggle z">
                            <NavLinks to="/allcredit" title="All Credits" />
                            <NavLinks to="/alldebit" title="All Debits" />
                            <NavLinks to="/ticket" title="Ticket printed" />
                            <NavLinks
                              to="/reversedticket"
                              title="Reversed Ticket"
                            />
                            <NavLinks to="/deposit" title="Deposit" />
                            <NavLinks
                              to="/traction"
                              title="Transaction History"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <Navitems Icon={FaUserCheck} title="Credit Agents" />
                <Navitems Icon={FaUserCheck} title="Credit SubAgents" />

                <Navitems Icon={AiFillPrinter} title="Print Receipts" />
                <Navitems Icon={BsCreditCardFill} title="Request Credit" />
                {/* Govt related Nav */}

                <Navitems Icon={TiThSmall} title="All Ticket" />
              </>
            )}
          </div>
        </nav>
        {/* Main Content */}
        <div className="agentmanager__right">
          <div className="agentmanager__rightcontainer">
            <div>
              {/* {" "}
              <Link to="/govt">
                <HiArrowSmLeft />
              </Link>{" "} */}
              <h1>Manage Agents </h1>
            </div>

            <div className="agentmanagerCenter">
              <h2 className="agentmanagerHeader">All Agents</h2>
              <div className="agentmanagerCenter__container">
                <div className="agentmanagerCenterHeader">
                  <div className="manageagent__th">Name</div>
                  <div className="manageagent__th">Location</div>
                  <div className="manageagent__th">More Details</div>
                </div>
                <AgentInfoItems handleAgent={handleAgent} />
                <AgentInfoItems />
                <AgentInfoItems />
                <AgentInfoItems />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgentManager;
