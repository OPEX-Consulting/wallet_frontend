import React, { useState } from "react";
import Header from "../../utils/Header";
import "./Opexlocalgovt.css";
// import { MdDashboard } from "react-icons/md";
// import { FaCog } from "react-icons/fa";
import { BsCreditCardFill } from "react-icons/bs";
import { MdArrowDropDown, MdStoreMallDirectory } from "react-icons/md";
import { TiThSmall } from "react-icons/ti";
import { AiFillPrinter } from "react-icons/ai";
import { FaUser, FaUserCheck, FaWallet } from "react-icons/fa";
import { CgTrack } from "react-icons/cg";
import Profile from "../../utils/Profile";
import Navitems from "../../utils/Navitems";
import NavDropdown from "../../utils/NavDropdown";
import NavLinks from "../../utils/NavLinks";
import { useNavigate } from "react-router-dom";
import Transactionitems from "../govt/Transactionitems";
import AgentInfoItems from "../govt/AgentInfoItems";
import Demo from "../govt/Demo";
function Opexlocalgovt() {
  const navigate = useNavigate();
  const [slider, setSlider] = useState(false);
  const [players, setPlayers] = useState("opex");
  const [subSlider, setSubslider] = useState(false);
  const [accountinfoslider, setAccountinfoslider] = useState(false);

  const [slide, setSlide] = useState(false);
  const [active, setActive] = useState("localgovt");
  const [nav, setNav] = useState("localgovt");
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
  const handleAgent = () => {
    navigate("/agent");
    console.log("no");
  };
  return (
    <div className="localgovt">
      <Header />
      <div className="localgovt__container">
        {/* Left navigation */}
        <nav className="localgovt__left">
          {/* {players === "govt" && (
            <Profile
              logo="plain-designify.png"
              state="OYO |"
              LGA="FELELE"
              email="govt@yahoo.com"
            />
          )} */}
          {players === "opex" && (
            <Profile state="OPEX" email="opex@yahoo.com" logo="Opexlogo.jpg" />
          )}
          {/* Left Items container */}
          <div className="localgovt__itemscontainer">
            {players === "opex" ? (
              <>
                {/* <Navitems Icon={FaUser} title="Account Info" /> */}
                <div
                  className={`localgovt__itemsclients users ${
                    active === "accountinfo" && "active"
                  }`}
                  onClick={() => setActive("accountinfo")}
                >
                  <NavDropdown
                    mainnavTitle="Account Info"
                    Icon1={MdStoreMallDirectory}
                    Icon2={MdArrowDropDown}
                    handleSlider={handleAccountinfoslider}
                  />
                  {accountinfoslider && (
                    <div className="localgovtUserToggle">
                      <NavLinks to="/openaccount" title="Open Account" />
                      <NavLinks to="/updateprofile" title="Update Profile" />
                      <NavLinks to="/uploaddocument" title="Upload Documents" />
                    </div>
                  )}
                </div>

                {/* <Navitems
                  Icon={FaWallet}
                  title="Wallet Balance"
                  onClick={() => navigate("/localgovt")}
                /> */}
                <Navitems
                  Icon={FaWallet}
                  title="Wallet Balance"
                  className={`${active === "govtwalletbalance" && "active"}`}
                  handleNavigation={() => {
                    setNav("localgovt");
                    setActive("govtwalletbalance");
                  }}
                />
                <div
                  className={`localgovt__itemsclients users ${
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
                    <div className="localgovtUserToggle">
                      {/* <NavLinks
                        to="/localgovt"
                        title="Local Govt"
                        className="activecolor"
                      /> */}
                      <NavLinks
                        title="Daily Revenue"
                        className={`${active === "govtrevenue" && "adjust"}`}
                        handleNavigationlinks={() => {
                          setNav("govtrevenue");
                          setActive("govtrevenue");
                        }}
                      />
                      {/* <NavLinks to="/govt_revenue" title="Daily Revenue" /> */}
                      <NavLinks
                        title="Transaction"
                        className={`${
                          active === "govttransaction" && "adjust"
                        }`}
                        handleNavigationlinks={() => {
                          setNav("govttransaction");
                          setActive("govtransaction");
                        }}
                      />
                      {/* manageagent */}
                      <NavLinks
                        title="Manage Agents"
                        className={`${active === "manageagent" && "adjust"}`}
                        handleNavigationlinks={() => {
                          setNav("manageagent");
                          setActive("manageagent");
                        }}
                      />
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="localgovt__itemsclients users">
                  <NavDropdown
                    mainnavTitle="Track Agents"
                    Icon1={CgTrack}
                    Icon2={MdArrowDropDown}
                    handleSlider={handleSubslider}
                  />
                  {subSlider && (
                    <div className="localgovtUserToggle">
                      <NavLinks to="/creditrecord" title="Credit Record" />
                      <NavLinks to="/agentinfo" title="Agent Information" />
                      <div
                        className={`localgovt__agentrecord users__agent${
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
                          <div className="localgovtUserToggle ">
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
        <div className="localgovt__right">
          <div className={`lga__main ${nav === "localgovt" && "showlgaa"}`}>
            <div className="agentlocalgovt__rightcontainer">
              <div className="agentlocaldashboard__localgovtcontainer">
                <div className="agentlocalgovtdashboard__localgovttop">
                  <div className="agentlocaldashboard__localgovttopcontent1">
                    <div className="agentlocaldashboard__localgovtimg1">
                      <img src="./assets/png/002-money-bag.png" alt="bal" />
                    </div>
                    <div className="agentlocaldashboard__localgovtothers1">
                      <span>Balance</span>
                      <h2>1 000 000</h2>
                    </div>
                  </div>
                  <div className="agentlocaldashboard__localgovttopcontent2">
                    <div className="agentlocaldashboard__localgovtimg2">
                      <img src="./assets/png/006-loss.png" alt="debit" />
                    </div>
                    <div className="agentlocaldashboard__localgovtothers1">
                      <span>All Debit</span>
                      <h2>600,000</h2>
                    </div>
                  </div>
                  <div className="agentlocaldashboard__localgovttopcontent3">
                    <div className="agentlocaldashboard__localgovtimg3">
                      <img src="./assets/png/007-ticket.png" alt="ticket" />
                    </div>
                    <div className="agentlocaldashboard__localgovtothers1">
                      <span>Ticket Printed</span>
                      <h2>500</h2>
                    </div>
                  </div>
                  <div className="agentlocaldashboard__localgovttopcontent4">
                    <div className="agentlocaldashboard__localgovtimg4">
                      <img src="./assets/png/005-money.png" alt="sold" />
                    </div>
                    <div className="agentlocaldashboard__localgovtothers1">
                      <span>Ticket Sold</span> <h2>450</h2>
                    </div>
                  </div>
                  <div className="agentlocaldashboard__localgovttopcontent5">
                    <div className="agentlocaldashboard__localgovtimg5">
                      <img src="./assets/png/004-deposit.png" alt="sold" />
                    </div>
                    <div className="agentlocaldashboard__localgovtothers1">
                      {" "}
                      <span>Deposit</span> <h2>700 000</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="agentlocaldashboard__localgovtcentered">
                <div className="agentlocaldashboard__localgovthistory">
                  <h3>Transaction History</h3>
                  <div className="agentlocaldashboard__localgovtcontainer">
                    {/* <div className="dashboard__localgovtCenterHeader">
                      <div className="dashboardtransactionagent__th">
                        Credit Agent
                      </div>
                      <div className="dashboardtransactionagent__th">
                        Deposit
                      </div>
                      <div className="dashboardtransactionagent__th">
                        Withdrawals
                      </div>
                      <div className="dashboardtransactionagent__th">
                        Transfer
                      </div>
                    </div>
                    <Transactionitems />
                    <Transactionitems /> */}
                    <Demo />
                  </div>
                </div>
                <div className="dashboard__wallet">
                  <h3>Wallet Balance</h3>
                  <div className="dashboard__dashboardwalletcontainer">
                    <div class="dashboardwalletbal_top">
                      <div class="walletbal__inner">
                        <p>Balance</p>
                        <span>N 500,000</span>
                      </div>
                      <div class="chip-img">
                        <img src="chip-img-2.png" alt="images" />
                      </div>
                    </div>
                    <div class="dashboardwallet__holder">
                      <div class="walletsingle-holder">
                        <p>CARD HOLDER</p>
                        <span>Ogbomoso</span>
                      </div>
                      <div class="walletsingle-holder">
                        <p>VALID THRU</p>
                        <span>12/22</span>
                      </div>
                    </div>
                    <div class="dashboardwalletcard-number">
                      <p>3778 **** **** 1234</p>
                      <div class="walletmasterimg">
                        <img src="master-img.png" alt="images" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Next Session starts here */}
          {/* DAILY REVENUE */}
          <div
            className={`govtrevenu__main ${
              nav === "govtrevenue" && "showrevenue"
            }`}
          >
            <div className="revenueg__rightcontainer">
              <div>
                <h1>Revenue Genereted Daily </h1>
              </div>

              <div className="revenueg__top">
                <div className="renueg__topcontent1">
                  <div className="dashboard__revenueimg1">
                    <img src="./assets/png/002-money-bag.png" alt="bal" />
                  </div>
                  <div className="dashboard__revenueothers1">
                    <span>All Credit</span>
                    <h2>800 000</h2>
                  </div>
                </div>
                <div className="renueg__topcontent2">
                  <div className="dashboard__revenueimg2">
                    <img src="./assets/png/006-loss.png" alt="debit" />
                  </div>
                  <div className="dashboard__revenueothers1">
                    <span>All Debit</span>
                    <h2>600,000</h2>
                  </div>
                </div>
                <div className="renueg__topcontent3">
                  <div className="dashboard__revenueimg3">
                    <img src="./assets/png/007-ticket.png" alt="ticket" />
                  </div>
                  <div className="dashboard__revenueothers1">
                    <span>Ticket Printed</span>
                    <h2>500</h2>
                  </div>
                </div>
                <div className="renueg__topcontent4">
                  <div className="dashboard__revenueimg4">
                    <img src="./assets/png/004-deposit.png" alt="sold" />
                  </div>
                  <div className="dashboard__revenueothers1">
                    <span>Deposit</span> <h2>700 000</h2>
                  </div>
                </div>
              </div>

              <div className="revenueCenter">
                <h2 className="revenueH">Transaction History</h2>
                <div className="revenueCenter__container">
                  <Demo />
                </div>
              </div>
            </div>
          </div>
          {/* DAILY REVENUE ENDS HERE */}
          {/* DAILY TRANSACTION */}
          <div
            className={`govttransaction__main ${
              nav === "govttransaction" && "showtransactiono"
            }`}
          >
            <div className="transaction__rightcontainer">
              <div>
                <h1>Transactions </h1>
              </div>

              <div className="transaction__top">
                <div className="transaction__topcontent1">
                  <div className="dashboard__transactionimg1">
                    <img src="./assets/png/002-money-bag.png" alt="bal" />
                  </div>
                  <div className="dashboard__transactionothers1">
                    <span>All Credit</span>
                    <h2>800 000</h2>
                  </div>
                </div>
                <div className="transaction__topcontent2">
                  <div className="dashboard__transactionimg2">
                    <img src="./assets/png/006-loss.png" alt="debit" />
                  </div>
                  <div className="dashboard__transactionothers1">
                    <span>All Debit</span>
                    <h2>600,000</h2>
                  </div>
                </div>
                <div className="transaction__topcontent3">
                  <div className="dashboard__transactionimg3">
                    <img src="./assets/png/007-ticket.png" alt="ticket" />
                  </div>
                  <div className="dashboard__transactionothers1">
                    <span>Ticket Printed</span>
                    <h2>500</h2>
                  </div>
                </div>
                <div className="transaction__topcontent4">
                  <div className="dashboard__transactionimg4">
                    <img src="./assets/png/004-deposit.png" alt="sold" />
                  </div>
                  <div className="dashboard__transactionothers1">
                    <span>Deposit</span> <h2>700 000</h2>
                  </div>
                </div>
              </div>

              <div className="transactionCenter">
                <h2 className="transactionHeader">All Transaction</h2>
                <div className="transactionCenter__container">
                  {/* <div className="transactionCenterHeader">
                    <div className="transactionagent__th">Credit Agent</div>
                    <div className="transactionagent__th">Deposit</div>
                    <div className="transactionagent__th">Withdrawals</div>
                    <div className="transactionagent__th">Transfer</div>
                  </div>
                  <Transactionitems />
                  <Transactionitems />
                  <Transactionitems /> */}
                  <Demo />
                </div>
              </div>
            </div>
          </div>
          {/* DAILY TRANSACTION ENDS HERE */}
          {/* MANAGE AGENT */}
          <div
            className={`manageagent__main ${
              nav === "manageagent" && "showmanageagent"
            }`}
          >
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
          {/* DAILY TRANSACTION ENDS HERE */}
        </div>
      </div>
    </div>
  );
}

export default Opexlocalgovt;
