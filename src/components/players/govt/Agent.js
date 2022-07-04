import React, { useState } from "react";
import Header from "../../utils/Header";
import "./Agent.css";
// import { MdDashboard } from "react-icons/md";
// import { FaCog } from "react-icons/fa";
import { BsCreditCardFill } from "react-icons/bs";
import { MdArrowDropDown, MdStoreMallDirectory } from "react-icons/md";
import { TiThSmall } from "react-icons/ti";
import { AiFillPrinter, AiOutlineDashboard } from "react-icons/ai";
import { FaBook, FaUser, FaUserCheck, FaWallet } from "react-icons/fa";
import { CgTrack } from "react-icons/cg";
import Profile from "../../utils/Profile";
import Navitems from "../../utils/Navitems";
import NavDropdown from "../../utils/NavDropdown";
import NavLinks from "../../utils/NavLinks";
import Transactionitems from "./Transactionitems";
import { Link, useNavigate } from "react-router-dom";
import { HiArrowSmLeft } from "react-icons/hi";
import Agentinformation from "../../utils/Agentinformation";
import ReverseTicketheadig from "../../utils/ReverseTicketheadig";
import ReverseTicketData from "../../utils/ReverseTicketData";
import Printedticket from "../../utils/Printedticket";
import Printedtickethead from "../../utils/Printedtickethead";
import Thistory from "../govt/Thistory";
import TransactionHistory from "../agents/TransactionHistory";
import Agentheading from "../agents/Agentheading";
function Agent() {
  const navigate = useNavigate();
  const [slider, setSlider] = useState(false);
  const [players, setPlayers] = useState("govt");
  const [subSlider, setSubslider] = useState(false);
  const [accountinfoslider, setAccountinfoslider] = useState(false);

  const [slide, setSlide] = useState(false);
  const [active, setActive] = useState("localgovt");
  const [nav, setNav] = useState("creditrecord");
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
  return (
    <div className="agent">
      <Header />
      <div className="agent__container">
        {/* Left navigation */}
        <nav className="agent__left">
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
          <div className="agent__itemscontainer">
            {players === "govt" ? (
              <>
                {/* <Navitems Icon={FaUser} title="Account Info" /> */}

                <div
                  className={`agent__itemsclients users ${
                    active === "agentrecord" && "active"
                  }`}
                  onClick={() => setActive("agentrecord")}
                >
                  <NavDropdown
                    mainnavTitle="Agent Record"
                    Icon1={FaUser}
                    Icon2={MdArrowDropDown}
                    handleSlider={handleAccountinfoslider}
                  />
                  {accountinfoslider && (
                    <div className="agentUserToggle">
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
                        className={`${
                          active === "agentreverseticket" && "adjust"
                        }`}
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
                        className={`${
                          active === "agenttransactionhist" && "adjust"
                        }`}
                        handleNavigationlinks={() => {
                          setNav("agenttransactionhist");
                          setActive("agenttransactionhist");
                        }}
                      />
                    </div>
                  )}
                </div>
                <Navitems
                  Icon={FaBook}
                  title="Agent Information"
                  handleNav={handleNav}
                  //   className={` ${active === "agentinfo" && "active"}`}
                  handleNavigation={() => {
                    setNav("agentinformation");
                    console.log(nav);
                  }}
                />
                <Navitems
                  Icon={FaBook}
                  title="Credit Record"
                  // handleNav={handleNav}
                  handleNavigation={() => {
                    setNav("creditrecord");
                    console.log(nav);
                    setActive("creditrecord");
                  }}
                />

                <Navitems
                  Icon={AiOutlineDashboard}
                  title="Dashboard"
                  handleNavigation={() => navigate("/dashboard")}
                />
              </>
            ) : (
              <>
                <div className="agent__itemsclients users">
                  <NavDropdown
                    mainnavTitle="Track Agents"
                    Icon1={CgTrack}
                    Icon2={MdArrowDropDown}
                    handleSlider={handleSubslider}
                  />
                  {subSlider && (
                    <div className="agentUserToggle">
                      <NavLinks to="/creditrecord" title="Credit Record" />
                      <NavLinks to="/agentinfo" title="Agent Information" />
                      <div
                        className={`agent__agentrecord users__agent${
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
                          <div className="agentUserToggle">
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
        <div className="myagent__right">
          <div className="agent__rightcontainer">
            {/* credit record */}
            <div
              className={`credit__recordcontaineragent ${
                nav === "creditrecord" && "show"
              }`}
            >
              <h2>Credit Record </h2>

              <div className="credit__recordmain">
                <div className="credit__recordagent1">
                  <div className="agentcredit__creditagentimg1">
                    <img src="./assets/png/002-money-bag.png" alt="bal" />
                  </div>
                  <div className="credit__recordothers1">
                    <h2>Previous Balance</h2>
                    <span>400 000</span>
                  </div>
                </div>
                <div className="credit__recordagent2">
                  <div className="agentcredit__creditagentimg1">
                    <img src="./assets/png/005-money.png" alt="bal" />
                  </div>
                  <div className="credit__recordothers1">
                    <h2>Credit</h2>
                    <span>500 000</span>
                  </div>
                </div>
                <div className="credit__recordagent3">
                  <div className="agentcredit__creditagentimg1">
                    <img src="./assets/png/002-money-bag.png" alt="bal" />
                  </div>
                  <div className="credit__recordothers1">
                    <h2>Current Balance</h2>
                    <span>500 000</span>
                  </div>
                </div>
              </div>
            </div>
            {/* agent information */}
            <div
              className={`agent__infocontainer ${
                nav === "agentinformation" && "show"
              }`}
            >
              <Agentinformation />
            </div>

            {/* Start your own various sessions here */}
            {/* All Credit section */}
            {/* CreditRecord */}
            <div
              className={`agent__creditrecordmain ${
                nav === "agentcreditrecord" && "showcreditrecord"
              }`}
            >
              <div className="agent__creditrecordcontainer">
                <h2>Credit Record </h2>

                <div className="credit__recordmain">
                  <div className="credit__recordagent1">
                    <div className="agentcredit__creditagentimg1">
                      <img src="./assets/png/002-money-bag.png" alt="bal" />
                    </div>
                    <div className="credit__recordothers1">
                      <h2>Previous Balance</h2>
                      <span>400 000</span>
                    </div>
                  </div>
                  <div className="credit__recordagent2">
                    <div className="agentcredit__creditagentimg1">
                      <img src="./assets/png/005-money.png" alt="bal" />
                    </div>
                    <div className="credit__recordothers1">
                      <h2>Credit</h2>
                      <span>500 000</span>
                    </div>
                  </div>
                  <div className="credit__recordagent3">
                    <div className="agentcredit__creditagentimg1">
                      <img src="./assets/png/002-money-bag.png" alt="bal" />
                    </div>
                    <div className="credit__recordothers1">
                      <h2>Current Balance</h2>
                      <span>500 000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Agent Previous Balance */}
            <div
              className={`agent__previousbalmain ${
                nav === "agentpreviousbal" && "showagentpreviousbal"
              }`}
            >
              <div className="agent__agentpreviousbalcontainer">
                <h2></h2>
                <div className="agent__agentpreviousbaltop">
                  <div className="agent__agentpreviousbaltopcontent1">
                    <span>Previous Balance</span>
                    <h2>700 000</h2>
                  </div>
                  <div className="agent__agentpreviousbaltopcontent2">
                    <span>New Balance</span>
                    <h2>1 600 000</h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Agent Previous Balance ends */}

            {/* Agent New Balance */}
            <div
              className={`agent__creditrecordmain ${
                nav === "agentnewbal" && "showagentnewbal"
              }`}
            >
              <div className="agent__creditrecordcontainer">
                <h2>Credit Record </h2>
                <div className="agent__credittop">
                  <div className="agent__credittopcontent1">
                    <h2>600 000</h2>
                    <span>Previous Balance</span>
                  </div>
                  <div className="agent__credittopcontent2">
                    <h2>600,000</h2>
                    <span>Credit</span>
                  </div>
                  <div className="agent__credittopcontent4">
                    <h2>1 200 000</h2>
                    <span>Current Balance</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Agent New Balance ends */}

            {/* Credit SubAgent */}
            <div
              className={`agent__creditsubagentmain ${
                nav === "agentcreditsubagent" && "showcreditsubagent"
              }`}
            >
              <div className="agent__creditsubagentcontainer">
                <h2>Credit SubAgent </h2>
                <div className="agent__creditsubagenttop">
                  <div className="creditsubagentinfo">
                    <form className="creditsubagentinfo__form">
                      <div className="creditsubagent__formcontrol">
                        <input
                          type="text"
                          placeholder=" Enter Amount #200,000"
                        />
                      </div>
                      <div className="creditsubagent__formcontrol">
                        <input type="text" placeholder="Enter Account Nos" />
                      </div>

                      <div className="creditsubagent__receipt">
                        <span> Receipt Nos: 012329283</span>
                      </div>

                      <div className="creditsubagent__formcontrol">
                        <button type="submit">Credit SubAgent</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Agent record starts here */}
            {/* TRANSATION HISTORY View */}
            <div
              className={`agent__agenttransationhistorymain ${
                nav === "agenttransactionhist" && "showagent"
              }`}
            >
              <div className="agent__agentatransationhistorycontainer">
                <div className="agentmain__transationhistorytop">
                  <h2>Transaction History </h2>
                  <div className="agentmain__transationhistory">
                    <Thistory />
                  </div>
                </div>
              </div>
            </div>

            {/* Printed Ticket */}
            <div
              className={`agent__agentprintedticketmain ${
                nav === "ticketprinted" && "showagentprintedticket"
              }`}
            >
              <div className="agent__agentaprintedticketcontainer">
                <div className="agent__printedtickettop">
                  <h2>Ticket Printed </h2>
                  <div className="agent__printedticket">
                    {/* Headings */}
                    <Printedtickethead />
                    {/* component that  displays the data 
                      allprints, pendingprint, inprint, date, printer*/}
                    <Printedticket
                      allprints="300"
                      pendingprint="20"
                      inprint="700"
                      date="04,May,2022"
                      printer="To printer"
                    />
                    <Printedticket
                      allprints="400"
                      pendingprint="10"
                      inprint="200"
                      date="05,May,2022"
                      printer="To printer"
                    />
                    <Printedticket
                      allprints="500"
                      pendingprint="10"
                      inprint="300"
                      date="06,May,2022"
                      printer="To printer"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* All ReverseTickets */}
            <div
              className={`agent__agentreverseticketmain ${
                nav === "agentreverseticket" && "showagentreverseticket"
              }`}
            >
              <div className="agent__agentareverseticketcontainer">
                <div className="agent__reversetickettop">
                  <h2>All Reverse Ticket </h2>
                  <div className="agent__reverseticket">
                    {/* Headings */}
                    <ReverseTicketheadig />
                    {/* component that  displays the data
                     */}
                    <ReverseTicketData
                      allreverseticket="300"
                      tickettracker="track"
                      allticket="700"
                      allprints="500"
                      aprovedticket="500"
                      extraticket="300"
                      date="04,May,2022"
                    />
                    <ReverseTicketData
                      allreverseticket="300"
                      tickettracker="track"
                      allticket="700"
                      allprints="500"
                      aprovedticket="500"
                      extraticket="300"
                      date="05,May,2022"
                    />
                    <ReverseTicketData
                      allreverseticket="300"
                      tickettracker="track"
                      allticket="700"
                      allprints="500"
                      aprovedticket="500"
                      extraticket="300"
                      date="06,May,2022"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* All AllCredit record */}
            <div
              className={`agent__allcreditmain ${
                nav === "agentallcredit" && "showagentallcredit"
              }`}
            >
              <div className="agent__allcreditcontainermain">
                <h2>All Credit</h2>
                <div className="agent__allcredittopmain">
                  <div className="agent__allcredittopmaincontent1">
                    <div className="agentallcredit__img1">
                      <img src="./assets/png/005-money.png" alt="bal" />
                    </div>
                    <div className="allcredit__recordothers1">
                      <h2> Allotted Credit</h2>
                      <span>500 000</span>
                    </div>
                  </div>
                  <div className="agent__allcredittopmaincontent2">
                    <div className="agentallcredit__img2">
                      <img src="./assets/png/006-loss.png" alt="bal" />
                    </div>
                    <div className="allcredit__recordothers1">
                      <h2>Credit oweing</h2>
                      <span>100 000</span>
                    </div>
                  </div>
                  <div className="agent__allcredittopmaincontent3">
                    <div className="agentallcredit__img1">
                      <img src="./assets/png/005-money.png" alt="bal" />
                    </div>
                    <div className="allcredit__recordothers1">
                      <h2> Approved Credit</h2>
                      <span>500 000</span>
                    </div>
                  </div>
                  <div className="agent__allcredittopmaincontent4">
                    <div className="agentallcredit__img1">
                      <img src="./assets/png/001-salary.png" alt="bal" />
                    </div>
                    <div className="allcredit__recordothers1">
                      <h2> Transfer Credit</h2>
                      <span>400 000</span>
                    </div>
                  </div>
                  <div className="agent__allcredittopmaincontent5">
                    <div className="agentallcredit__img1">
                      <img src="./assets/png/002-money-bag.png" alt="bal" />
                    </div>
                    <div className="allcredit__recordothers1">
                      <h2> Bank Balance</h2>
                      <span>500 000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Transactions */}
            <div
              className={`agent__agenttransactionmain ${
                nav === "agenttransaction" && "showagenttransaction"
              }`}
            >
              <div className="agent__agenttransactioncontainer">
                <h2>All Credit</h2>
                <div className="agent__agenttransactiontop">
                  <div className="agent__agenttransactiontopcontent1">
                    <h2>1 000 000</h2>
                    <span>Deposit</span>
                    <h6>Naira</h6>
                  </div>
                  <div className="agent__agenttransactiontopcontent2">
                    <h2>600,000</h2>
                    <span>Withdrawals</span>
                    <h6>Naira</h6>
                  </div>
                  <div className="agent__agenttransactiontopcontent3">
                    <h2>200 000</h2>
                    <span>Transfer</span>
                    <h6>Naira</h6>
                  </div>
                  <div className="agent__agenttransactiontopcontent4">
                    <h2>800 000</h2>
                    <span>Credit SubAgent</span>
                    <h6>Naira</h6>
                  </div>
                  {/* <div className="agent__agenttransactiontopcontent5">
                      <h2>200 000</h2>
                      <span>Bank Balance</span>
                      <h6>Naira</h6>
                    </div> */}
                </div>
              </div>
            </div>
            {/* Transaction ends */}
            {/* All Debit */}
            <div
              className={`agent__alldebitmain ${
                nav === "agentalldebit" && "showagentalldebit"
              }`}
            >
              <div className="agent__alldebitcontainermain">
                <h2>All Debit </h2>
                <div className="agent__alldebittop">
                  <div className="debitmain__recordagent1">
                    <div className="debitmain__img1">
                      <img src="./assets/png/006-loss.png" alt="bal" />
                    </div>
                    <div className="alldebit__recordothers1">
                      <h2>All Debits</h2>
                      <span>400 000</span>
                    </div>
                  </div>
                  <div className="debitmain__recordagent2">
                    <div className="debitmain__img2">
                      <img src="./assets/png/006-loss.png" alt="bal" />
                    </div>
                    <div className="alldebit__recordothers1">
                      <h2>Govt Debits</h2>
                      <span>500 000</span>
                    </div>
                  </div>
                  <div className="debitmain__recordagent3">
                    <div className="debitmain__img3">
                      <img src="./assets/png/002-money-bag.png" alt="bal" />
                    </div>
                    <div className="alldebit__recordothers1">
                      <h2>Own Incentives</h2>
                      <span>500 000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* All Deposit */}
            <div
              className={`agent__alldepositmain ${
                nav === "agentdeposit" && "showagentdeposit"
              }`}
            >
              <div className="deposit__alldepositcontainer">
                <h2>All Deposit </h2>
                <div className="alldepositmain__alldeposittop">
                  <div className="alldepositmain__recordagent1">
                    <div className="alldepositmain__img1">
                      <img src="./assets/png/004-deposit.png" alt="bal" />
                    </div>
                    <div className="alldeposit__recordothers1">
                      <h2>All Deposit</h2>
                      <span>400 000</span>
                    </div>
                  </div>
                  <div className="alldepositmain__recordagent2">
                    <div className="alldepositmain__img2">
                      <img src="./assets/png/004-deposit.png" alt="bal" />
                    </div>
                    <div className="alldeposit__recordothers1">
                      <h2>Deposit to Govt</h2>
                      <span>500 000</span>
                    </div>
                  </div>
                  <div className="alldepositmain__recordagent3">
                    <div className="alldepositmain__img3">
                      <img src="./assets/png/004-deposit.png" alt="bal" />
                    </div>
                    <div className="alldeposit__recordothers1">
                      <h2>Deposit SubAgent</h2>
                      <span>500 000</span>
                    </div>
                  </div>

                  {/* <div className="agent__alldeposittopcontent1">
                    <h2>600 000</h2>
                    <span>All Deposit</span>
                    <h6>Naira</h6>
                  </div>
                  <div className="agent__alldeposittopcontent2">
                    <h2>600,000</h2>
                    <span> Deposit To Govt</span>
                    <h6>Naira</h6>
                  </div>
                  <div className="agent__alldeposittopcontent3">
                    <h2>100 000</h2>
                    <span>Deposit From SubAgent</span>
                    <h6>Naira</h6>
                  </div> */}
                </div>
              </div>
            </div>

            {/* All Debit*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agent;
