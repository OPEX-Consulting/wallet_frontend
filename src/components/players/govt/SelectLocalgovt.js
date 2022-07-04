import React, { useState } from "react";
import { useNavigate } from "react-router";
import Header from "../../utils/Header";
import "./SelectLocalgovt.css";
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
function SelectLocalgovt() {
  const navigate = useNavigate();
  const localgovt = [
    { id: 1, localgovt: "select Local govt" },
    { id: 2, localgovt: "Ogbomoso South" },
    { id: 3, localgovt: "Ibarapa" },
    { id: 4, localgovt: "Ido" },
  ];
  const [slider, setSlider] = useState(false);
  const [players, setPlayers] = useState("govt");
  const [subSlider, setSubslider] = useState(false);
  const [active, setActive] = useState("localgovt");
  const [selectedlocalgovt, setSelectedlocalgovt] = useState([]);
  const [chosenlocalgovt, setChosenlocalgovt] = useState([]);

  const [accountinfoslider, setAccountinfoslider] = useState(false);

  const [slide, setSlide] = useState(false);
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
  const handleSelected = (e) => {
    e.preventDefault();
    // Save Chosen data in redux store
    setChosenlocalgovt(selectedlocalgovt);
    navigate("/localgovt");
  };
  return (
    <div className="selectlocalgovt">
      <Header />
      <div className="selectlocalgovt__container">
        {/* Left navigation */}
        <nav className="selectlocalgovt__left">
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
          <div className="selectlocalgovt__itemscontainer">
            {players === "govt" ? (
              <>
                {/* <Navitems Icon={FaUser} title="Account Info" /> */}
                <div className="dashboard__itemsclients users">
                  <NavDropdown
                    mainnavTitle="Account Info"
                    Icon1={MdAccountBox}
                    Icon2={MdArrowDropDown}
                    handleSlider={handleAccountinfoslider}
                  />
                  {accountinfoslider && (
                    <div className="selectlocalgovtUserToggle">
                      <NavLinks to="/openaccount" title="Open Account" />
                      <NavLinks to="/updateprofile" title="Update Profile" />
                      <NavLinks to="/uploaddocument" title="Upload Documents" />
                    </div>
                  )}
                </div>
                <Navitems Icon={FaWallet} title="Wallet Balance" />
                <Navitems
                  Icon={MdStoreMallDirectory}
                  title="Select Local Govt Area"
                  handleNav={handleNav}
                  className="activebg"
                />
                {/* <div className="selectlocalgovt__itemsclients users">
                  <NavDropdown
                    mainnavTitle="Local Govt Area"
                    Icon1={MdStoreMallDirectory}
                    Icon2={MdArrowDropDown}
                    handleSlider={handleSlider}
                  />
                  {slider && (
                    <div className="selectlocalgovtUserToggle">
                      <NavLinks to="/localgovt" title="Local Govt" />
                      <NavLinks to="/govt_revenue" title="Wallet Balance" />
                      <NavLinks to="/transaction" title="Transaction" />
                    </div>
                  )}
                </div> */}
              </>
            ) : (
              <>
                <div className="selectlocalgovt__itemsclients users">
                  <NavDropdown
                    mainnavTitle="Track Agents"
                    Icon1={CgTrack}
                    Icon2={MdArrowDropDown}
                    handleSlider={handleSubslider}
                  />
                  {subSlider && (
                    <div className="selectlocalgovtUserToggle">
                      <NavLinks to="/creditrecord" title="Credit Record" />
                      <NavLinks to="/agentinfo" title="Agent Information" />
                      <div className="selectlocalgovt__agentrecord users__agent">
                        <NavDropdown
                          mainnavTitle="Agent Records"
                          Icon2={MdArrowDropDown}
                          handleSlider={handleSlide}
                        />
                        {slide && (
                          <div className="selectlocalgovtUserToggle z">
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
        <div className="selectlocalgovt__right">
          {/* <div className="selectlocalgovt__rightcontainer">
            <h1>Select Local Govt</h1>
            <div className="selectlocalgovt__select">
              <form className="selectlocalgovt__form">
                <select
                  onChange={(e) => setSelectedlocalgovt(e.target.value)}
                  value={selectedlocalgovt}
                >
                  {localgovt.map((localgovtarea) => (
                    <option key={localgovtarea.id}>
                      {localgovtarea.localgovt}
                    </option>
                  ))}
                </select>
              </form>
              <button type="submit" onClick={handleSelected}>
                Proceed
              </button>
              <div>{chosenlocalgovt}</div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default SelectLocalgovt;
