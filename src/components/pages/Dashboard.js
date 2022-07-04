import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Header from "../utils/Header";
import "./Dashboard.css";
import "../walletlanding/Walletextra.css";
import { MdAccountBox, MdOutlineDashboardCustomize } from "react-icons/md";
import { MdArrowDropDown, MdStoreMallDirectory } from "react-icons/md";
import { AiFillWallet } from "react-icons/ai";
import {
  FaCreditCard,
  FaMoneyBill,
  FaPrint,
  FaTicketAlt,
  FaUser,
  FaWallet,
} from "react-icons/fa";
import { CgTrack } from "react-icons/cg";
import Profile from "../utils/Profile";
import Navitems from "../utils/Navitems";
import NavDropdown from "../utils/NavDropdown";
import NavLinks from "../utils/NavLinks";
import Transactionitems from "../players/govt/Transactionitems";
import Agentheading from "../players/agents/Agentheading";
import TransactionHistory from "../players/agents/TransactionHistory";
import ReverseTicketheadig from "../utils/ReverseTicketheadig";
import ReverseTicketData from "../utils/ReverseTicketData";
import Printedtickethead from "../utils/Printedtickethead";
import Printedticket from "../utils/Printedticket";
import Agentinformation from "../utils/Agentinformation";
import TransactionhistoryTable from "../players/govt/Demo";
import Demo from "../players/govt/Demo";
import Credit from "../utils/Credit";
import CreditH from "../utils/CreditH";
import ManageSubagent from "../utils/ManageSubagent";
import ManageSH from "../utils/ManageSH";
// import Agentrecords from "../utils/Agentrecords";
function Dashboard({ role }) {
  const checkForRole = () => {
    const selectedRole =
      role === 0
        ? setPlayers("opex")
        : role === 1
        ? setPlayers("govt")
        : role === 2
        ? setPlayers("agent")
        : role === 3
        ? setPlayers("subagent")
        : console.log("INVALID AUTH");
    return selectedRole;
  };
  useEffect(() => {
    checkForRole();
  }, [role]);

  const navigate = useNavigate();
  const [slider, setSlider] = useState(false);
  const [players, setPlayers] = useState("");
  const [subSlider, setSubslider] = useState(false);
  const [accountinfoslider, setAccountinfoslider] = useState(false);
  const [ticketslider, setTicketslider] = useState(false);
  const [printticket, setPrintticket] = useState(false);

  const [selectedlocalgovt, setSelectedlocalgovt] = useState([]);
  const [chosenlocalgovt, setChosenlocalgovt] = useState([]);

  const [slide, setSlide] = useState(false);
  const [active, setActive] = useState("agentcreditrecord");
  const [nav, setNav] = useState("maindash");
  const localgovt = [
    { id: 1, localgovt: "select Local govt" },
    { id: 2, localgovt: "Ogbomoso South" },
    { id: 3, localgovt: "Ibarapa" },
    { id: 4, localgovt: "Ido" },
  ];
  // FOR GOVT
  const handleSelected = (e) => {
    e.preventDefault();
    // Save Chosen data in redux store
    setChosenlocalgovt(selectedlocalgovt);
    navigate("/localgovt");
  };
  // FOR OPEX
  const handleSelect = (e) => {
    e.preventDefault();
    // Save Chosen data in redux store
    setChosenlocalgovt(selectedlocalgovt);
    navigate("/Opexlocalgovt");
  };

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
  const handlePrintslider = () => {
    setPrintticket(!printticket);
  };
  const handleTicketslider = () => {
    setTicketslider(!ticketslider);
  };
  const handleNav = () => {
    navigate("/selectlocalgovt");
  };
  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard__container">
        {/* Left navigation */}
        <nav className="dashboard__left">
          {players === "govt" ? (
            <Profile
              logo="plain-designify.png"
              state="OYO"
              email="govt@yahoo.com"
            />
          ) : players === "agent" ? (
            <Profile
              state="Adebisi Oni"
              email="agent@yahoo.com"
              logo="user.jpg"
            />
          ) : players === "subagent" ? (
            <Profile
              state="Kasali Koka"
              email="subagent@yahoo.com"
              logo="profilesub.jpg"
            />
          ) : (
            players === "opex" && (
              <Profile
                state="OPEX"
                email="opex@yahoo.com"
                logo="Opexlogo.jpg"
              />
            )
          )}

          {/* Left Items container */}
          <div className="dashboard__itemscontainer">
            {players === "govt" ? (
              <>
                <div className="dashboard__itemsclients users">
                  <NavDropdown
                    mainnavTitle="Account Info"
                    Icon1={MdAccountBox}
                    Icon2={MdArrowDropDown}
                    handleSlider={handleAccountinfoslider}
                  />
                  {accountinfoslider && (
                    <div className="dashboardUserToggle">
                      <NavLinks to="/openaccount" title="Open Account" />
                      <NavLinks to="/updateprofile" title="Update Profile" />
                      <NavLinks to="/uploaddocument" title="Upload Documents" />
                    </div>
                  )}
                </div>
                <Navitems
                  Icon={FaWallet}
                  title="Wallet Balance"
                  className={`${active === "govtwalletbalance" && "active"}`}
                  handleNavigation={() => {
                    navigate("/dashboard");
                    setActive("govtwalletbalance");
                  }}
                />
                {/* <Navitems
                  Icon={AiFillWallet}
                  title="Ticket Management"
                  className={`${active === "ticketmanagement" && "active"}`}
                  handleNavigation={() => {
                    setNav("ticketmain");
                    setActive("ticketmain");
                  }}
                /> */}

                <div className="dashboard__itemsclients users">
                  <NavDropdown
                    mainnavTitle="Ticket Management"
                    Icon1={FaTicketAlt}
                    Icon2={MdArrowDropDown}
                    handleSlider={handleTicketslider}
                  />
                  {ticketslider && (
                    <div className="dashboardUserToggle">
                      <NavLinks
                        title="Create Ticket"
                        className={`${active === "ticketmain" && "adjust"}`}
                        handleNavigationlinks={() => {
                          setNav("ticketmain");
                          setActive("ticketmain");
                        }}
                      />
                      <NavLinks
                        title="Update Ticket"
                        className={`${active === "updatemain" && "adjust"}`}
                        handleNavigationlinks={() => {
                          setNav("updatemain");
                          setActive("updatemain");
                        }}
                      />
                      <NavLinks to="/uploaddocument" title="Delete Ticket" />
                    </div>
                  )}
                </div>

                <Navitems
                  Icon={MdStoreMallDirectory}
                  title="Select Local Govt Area"
                  className={`${active === "selectLGA" && "active"}`}
                  handleNavigation={() => {
                    setNav("selectLGA");
                    setActive("selectLGA");
                  }}
                />
              </>
            ) : // Agent Navigation
            players === "agent" ? (
              <>
                <div className="dashboard__itemsclients users">
                  <NavDropdown
                    mainnavTitle="My Dashboard"
                    Icon1={MdOutlineDashboardCustomize}
                    Icon2={MdArrowDropDown}
                    handleSlider={handleSubslider}
                  />
                  {subSlider && (
                    <div className="dashboardUserToggle">
                      <NavLinks
                        // to="/creditrecord"
                        title="Credit Record"
                        className={`${
                          active === "agentcreditrecord" && "adjust"
                        }`}
                        handleNavigationlinks={() => {
                          setActive("agentcreditrecord");
                          setNav("agentcreditrecord");
                        }}
                      />
                      <NavLinks
                        title="Agent Information"
                        className={`${
                          active === "agentcreditinfo" && "adjust"
                        }`}
                        handleNavigationlinks={() => {
                          setNav("agentcreditinfo");
                          setActive("agentcreditinfo");
                        }}
                      />
                      <NavLinks
                        title="Create SubAgents"
                        className={`${active === "createsubagent" && "adjust"}`}
                        handleNavigationlinks={() => {
                          setNav("createsubagent");
                          setActive("createsubagent");
                        }}
                      />
                      <NavLinks
                        title="Manage SubAgents"
                        className={`${active === "managesubagent" && "adjust"}`}
                        handleNavigationlinks={() => {
                          setNav("managesubagent");
                          setActive("managesubagent");
                        }}
                      />
                      <div className="dashboard__agentrecord users__agent">
                        <NavDropdown
                          mainnavTitle="Agent Records"
                          Icon2={MdArrowDropDown}
                          handleSlider={handleSlide}
                        />
                        {slide && (
                          <div className="dashboardUserToggle">
                            <NavLinks
                              title="All Credits"
                              className={`${
                                active === "agentallcredit" && "adjust"
                              }`}
                              handleNavigationlinks={() => {
                                setNav("agentallcredit");
                                setActive("agentallcredit");
                              }}
                            />
                            <NavLinks
                              title="All Debits"
                              className={`${
                                active === "agentalldebit" && "adjust"
                              }`}
                              handleNavigationlinks={() => {
                                setNav("agentalldebit");
                                setActive("agentalldebit");
                              }}
                            />
                            <NavLinks
                              title="Ticket printed"
                              className={`${
                                active === "ticketprinted" && "adjust"
                              }`}
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
                              className={`${
                                active === "agentdeposit" && "adjust"
                              }`}
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
                    </div>
                  )}
                </div>
                <div className="dashboard__itemsclients users">
                  <NavDropdown
                    mainnavTitle="TopUp SubAgents"
                    Icon1={CgTrack}
                    Icon2={MdArrowDropDown}
                    handleSlider={handleAccountinfoslider}
                  />
                  {accountinfoslider && (
                    <div className="dashboardUserToggle">
                      <NavLinks
                        title="Previous Balance"
                        className={`${
                          active === "agentpreviousbal" && "adjust"
                        }`}
                        handleNavigationlinks={() => {
                          setNav("agentpreviousbal");
                          setActive("agentpreviousbal");
                        }}
                      />
                      <NavLinks
                        title="TopUp SubAgent"
                        className={`${
                          active === "agentcreditsubagent" && "adjust"
                        }`}
                        handleNavigationlinks={() => {
                          setNav("agentcreditsubagent");
                          setActive("agentcreditsubagent");
                        }}
                      />
                      {/* <NavLinks
                        title="Credit Govt"
                        className={`${active === "creditgovt" && "adjust"}`}
                        handleNavigationlinks={() => {
                          setNav("creditgovt");
                          setActive("creditgovt");
                        }}
                      /> */}
                      <NavLinks
                        title="New Balance"
                        className={`${active === "agentnewbal" && "adjust"}`}
                        handleNavigationlinks={() => {
                          setNav("agentpreviousbal");
                          setActive("agentnewbal");
                        }}
                      />
                    </div>
                  )}
                </div>
                <Navitems
                  Icon={FaCreditCard}
                  title="Credit Govt"
                  className={`${active === "creditgovt" && "active"}`}
                  handleNavigation={() => {
                    setNav("creditgovt");
                    setActive("creditgovt");
                  }}
                />
                <Navitems
                  Icon={FaMoneyBill}
                  title="Transaction"
                  className={`${active === "agenttransaction" && "active"}`}
                  handleNavigation={() => {
                    setNav("agenttransaction");
                    setActive("agenttransaction");
                  }}
                />

                <Navitems
                  Icon={AiFillWallet}
                  title="Wallet Balance"
                  className={`${active === "walletbalance" && "active"}`}
                  handleNavigation={() => {
                    setNav("maindash");
                    setActive("walletbalance");
                  }}
                />
              </>
            ) : // SubAgent Navigation
            players === "subagent" ? (
              <>
                <div className="dashboard__itemsclients users">
                  <NavDropdown
                    mainnavTitle="My Dashboard"
                    Icon1={MdOutlineDashboardCustomize}
                    Icon2={MdArrowDropDown}
                    handleSlider={handleSubslider}
                  />
                  {subSlider && (
                    <div className="dashboardUserToggle">
                      <NavLinks
                        // to="/creditrecord"
                        title="Credit Record"
                        className={`${
                          active === "agentcreditrecord" && "adjust"
                        }`}
                        handleNavigationlinks={() => {
                          setActive("agentcreditrecord");
                          setNav("agentcreditrecord");
                        }}
                      />
                      <NavLinks
                        title="Agent Information"
                        className={`${
                          active === "agentcreditinfo" && "adjust"
                        }`}
                        handleNavigationlinks={() => {
                          setNav("agentcreditinfo");
                          setActive("agentcreditinfo");
                        }}
                      />
                      <div className="dashboard__agentrecord users__agent">
                        <NavDropdown
                          mainnavTitle="Agent Records"
                          Icon2={MdArrowDropDown}
                          handleSlider={handleSlide}
                        />
                        {slide && (
                          <div className="dashboardUserToggle">
                            <NavLinks
                              title="All Credits"
                              className={`${
                                active === "agentallcredit" && "adjust"
                              }`}
                              handleNavigationlinks={() => {
                                setNav("agentallcredit");
                                setActive("agentallcredit");
                              }}
                            />
                            <NavLinks
                              title="All Debits"
                              className={`${
                                active === "agentalldebit" && "adjust"
                              }`}
                              handleNavigationlinks={() => {
                                setNav("agentalldebit");
                                setActive("agentalldebit");
                              }}
                            />
                            <NavLinks
                              title="Ticket printed"
                              className={`${
                                active === "ticketprinted" && "adjust"
                              }`}
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
                              className={`${
                                active === "agentdeposit" && "adjust"
                              }`}
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
                    </div>
                  )}
                </div>
                <div className="dashboard__itemsclients users">
                  <NavDropdown
                    mainnavTitle="Customers Information"
                    Icon1={FaUser}
                    Icon2={MdArrowDropDown}
                    handleSlider={handleAccountinfoslider}
                  />
                  {accountinfoslider && (
                    <div className="dashboardUserToggle">
                      <NavLinks
                        title="Previous Balance"
                        className={`${
                          active === "agentpreviousbal" && "adjust"
                        }`}
                        handleNavigationlinks={() => {
                          setNav("agentpreviousbal");
                          setActive("agentpreviousbal");
                        }}
                      />
                      <NavLinks
                        title="New Balance"
                        className={`${active === "agentnewbal" && "adjust"}`}
                        handleNavigationlinks={() => {
                          setNav("agentpreviousbal");
                          setActive("agentnewbal");
                        }}
                      />
                    </div>
                  )}
                </div>

                <Navitems
                  Icon={FaMoneyBill}
                  title="Transaction"
                  className={`${active === "agenttransaction" && "active"}`}
                  handleNavigation={() => {
                    setNav("agenttransaction");
                    setActive("agenttransaction");
                  }}
                />

                <Navitems
                  Icon={AiFillWallet}
                  title="Wallet Balance"
                  className={`${active === "walletbalance" && "active"}`}
                  handleNavigation={() => {
                    setNav("maindash");
                    setActive("walletbalance");
                  }}
                />

                <div className="dashboard__itemsclients users">
                  <NavDropdown
                    mainnavTitle="Print Ticket"
                    Icon1={FaPrint}
                    Icon2={MdArrowDropDown}
                    handleSlider={handlePrintslider}
                  />
                  {printticket && (
                    <div className="dashboardUserToggle">
                      <NavLinks
                        title="Bulk Print"
                        className={`${active === "bultprint" && "adjust"}`}
                        handleNavigationlinks={() => {
                          setNav("bulkprint");
                          setActive("bulkprint");
                        }}
                      />

                      <NavLinks
                        title="Single Print"
                        className={`${active === "singleprint" && "adjust"}`}
                        handleNavigationlinks={() => {
                          setNav("singleprint");
                          setActive("singleprint");
                        }}
                      />
                    </div>
                  )}
                </div>
              </>
            ) : (
              players === "opex" && (
                <>
                  <div className="dashboard__itemsclients users">
                    <NavDropdown
                      mainnavTitle="Account Info"
                      Icon1={MdAccountBox}
                      Icon2={MdArrowDropDown}
                      handleSlider={handleAccountinfoslider}
                    />
                    {accountinfoslider && (
                      <div className="dashboardUserToggle">
                        <NavLinks
                          title="Create Users"
                          className={`${active === "createuser" && "adjust"}`}
                          handleNavigationlinks={() => {
                            setNav("createuser");
                            setActive("createuser");
                          }}
                        />
                        {/* <NavLinks to="/openaccount" title="Open Account" /> */}
                        <NavLinks to="/updateprofile" title="Update Profile" />
                        <NavLinks
                          to="/uploaddocument"
                          title="Upload Documents"
                        />
                      </div>
                    )}
                  </div>
                  <Navitems
                    Icon={FaWallet}
                    title="Wallet Balance"
                    className={`${active === "govtwalletbalance" && "active"}`}
                    handleNavigation={() => {
                      navigate("/dashboard");
                      setActive("govtwalletbalance");
                    }}
                  />

                  <Navitems
                    Icon={MdStoreMallDirectory}
                    title="Select Local Govt Area"
                    className={`${active === "selectLGA" && "active"}`}
                    handleNavigation={() => {
                      setNav("selectLGA");
                      setActive("selectLGA");
                    }}
                  />
                </>
              )
            )}
          </div>
        </nav>
        {/* Main Content */}

        {/* GovtAdmin */}
        <div className="dashboard__right">
          {players === "govt" ? (
            <>
              {/* dashboard__govtcontainer */}
              <div className={`govtmain ${nav === "maindash" && "showgovt"}`}>
                <div className="dashboard__govtcontainer">
                  <div className="dashboard__top">
                    <div className="dashboard__topcontent1">
                      <div className="dashboard__img1">
                        <img src="./assets/png/002-money-bag.png" alt="bal" />
                      </div>
                      <div className="dashboard__others1">
                        <span>Balance</span>
                        <h2>1 000 000</h2>
                      </div>
                    </div>
                    <div className="dashboard__topcontent2">
                      <div className="dashboard__img2">
                        <img src="./assets/png/006-loss.png" alt="debit" />
                      </div>
                      <div className="dashboard__others1">
                        <span>All Debit</span>
                        <h2>600,000</h2>
                      </div>
                    </div>
                    <div className="dashboard__topcontent3">
                      <div className="dashboard__img3">
                        {" "}
                        <img src="./assets/png/007-ticket.png" alt="ticket" />
                      </div>
                      <div className="dashboard__others1">
                        {" "}
                        <span>Ticket Printed</span>
                        <h2>500</h2>
                      </div>
                    </div>
                    <div className="dashboard__topcontent4">
                      <div className="dashboard__img4">
                        <img src="./assets/png/005-money.png" alt="sold" />
                      </div>
                      <div className="dashboard__others1">
                        <span>Ticket Sold</span> <h2>450</h2>
                      </div>
                    </div>
                    <div className="dashboard__topcontent5">
                      <div className="dashboard__img5">
                        <img src="./assets/png/004-deposit.png" alt="sold" />
                      </div>
                      <div className="dashboard__others1">
                        <span>Deposit</span> <h2>700 000</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dashboard__centered">
                    <div className="dashboard__transactionhistory">
                      <h3>Transaction History</h3>
                      <div className="dashboard__transactionhistorycontainer">
                        <Demo />
                      </div>
                      </div>
                      <div className="dashboard__transactionhistory1">
                      <h3>Transaction History</h3>
                      <div className="dashboard__transactionhistorycontainer1">
                        <Demo />
                      </div>
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
              {/* Select LocalGovt View */}
              {/* TICKETING */}
              {/* Create Ticket */}
              <div
                className={`govt__createticketmain ${
                  nav === "ticketmain" && "showticketcreated"
                }`}
              >
                <div className="govt__createticketcontainer">
                  <h2>Create Ticket </h2>
                  <div className="govt__createtickettop">
                    <div className="govt__createticketform">
                      <form className="govtcreateticketform__form">
                        <div className="updateticket__formcontrol1">
                          <label>Ticket Category</label>
                          <select>
                            <option>Choose Category</option>
                            <option>option A</option>
                            <option>Option B</option>
                            <option>Option C</option>
                          </select>
                          {/* <input
                            type="text"
                            placeholder=" Enter Amount #200,000"
                          /> */}
                        </div>
                        <div className="createticket__formcontrol">
                          <input type="text" placeholder="Set Amount" />
                        </div>

                        <div className="creditsubagent__formcontrol">
                          <button type="submit">Create Ticket</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              {/* Update Ticket */}
              <div
                className={`govt__updateticketmain ${
                  nav === "updatemain" && "showticketupdated"
                }`}
              >
                <div className="govt__updateticketcontainer">
                  <h2>update Ticket </h2>
                  <div className="govt__updatetickettop">
                    <div className="govt__updateticketform">
                      <form className="govtupdateticketform__form">
                        <div className="updateticket__formcontrol1">
                          <label>Ticket Category</label>
                          <select>
                            <option>Choose Category</option>
                            <option>option A</option>
                            <option>Option B</option>
                            <option>Option C</option>
                          </select>
                        </div>
                        <div className="updateticket__formcontrol">
                          <input type="text" placeholder="Ticket Id" />
                        </div>

                        <div className="creditsubagent__formcontrol">
                          <button type="submit">update Ticket</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              {/* Local Govt */}
              <div
                className={`selectlocalgovt__main ${
                  nav === "selectLGA" && "showlocalgovt"
                }`}
              >
                <div className="selectlocalgovt__rightcontainer">
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
                </div>
              </div>
              {/* Select LocalGovt Ends here */}

              {/* lOCAL GOVT STARTS HERE */}
              <div className={`localgovt__main ${nav === "LGA" && "showlga"}`}>
                <div className="localgovt__rightcontainer">
                  <div className="dashboard__localgovtcontainer">
                    <div className="dashboard__localgovttop">
                      <div className="dashboard__localgovttopcontent1">
                        <div className="dashboard__localgovtimg1">
                          <img src="./assets/png/002-money-bag.png" alt="bal" />
                        </div>
                        <div className="dashboard__localgovtothers1">
                          <span>Balance</span>
                          <h2>1 000 000</h2>
                        </div>
                      </div>
                      <div className="dashboard__localgovttopcontent2">
                        <div className="dashboard__localgovtimg2">
                          <img src="./assets/png/006-loss.png" alt="debit" />
                        </div>
                        <div className="dashboard__localgovtothers1">
                          <span>All Debit</span>
                          <h2>600,000</h2>
                        </div>
                      </div>

                      <div className="dashboard__localgovttopcontent4">
                        <div className="dashboard__localgovtimg4">
                          <img src="./assets/png/005-money.png" alt="sold" />
                        </div>
                        <div className="dashboard__localgovtothers1">
                          <span>Ticket Sold</span> <h2>450</h2>
                        </div>
                      </div>
                      <div className="dashboard__localgovttopcontent5">
                        <div className="dashboard__localgovtimg5">
                          <img src="./assets/png/004-deposit.png" alt="sold" />
                        </div>
                        <div className="dashboard__localgovtothers1">
                          <span>Deposit</span> <h2>700 000</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dashboard__localgovtcentered">
                    <div className="dashboard__localgovthistory">
                      <h3>Transaction History</h3>
                      <div className="dashboard__localgovtcontainer">
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
              {/* LOCAL GOVT ENDS HERE */}
            </>
          ) : players === "agent" ? (
            <>
              {/* Default page */}
              <div
                className={`agent__govtmain ${
                  nav === "maindash" && "showmain"
                }`}
              >
                <div className="agent__govtcontainer">
                  <div className="agent__top">
                    <div className="agent__topcontent1">
                      <div className="agent__agentimg1">
                        <img src="./assets/png/002-money-bag.png" alt="bal" />
                      </div>
                      <div className="agent__otherinfo1">
                        <span>Balance</span>
                        <h2>1 000 000</h2>
                      </div>
                    </div>
                    <div className="agent__topcontent2">
                      <div className="agent__agentimg2">
                        <img src="./assets/png/006-loss.png" alt="debit" />
                      </div>
                      <div className="agent__otherinfo1">
                        <span>All Debit</span>
                        <h2>600,000</h2>
                      </div>
                    </div>
                    <div className="agent__topcontent3">
                      <div className="agent__agentimg3">
                        <img src="./assets/png/005-money.png" alt="sold" />
                      </div>
                      <div className="agent__otherinfo1">
                        <span>Ticket Sold</span> <h2>450</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="agent__centered">
                  <div className="agent__transactionhistory">
                    <h3>Transaction History</h3>
                    <div className="agent__transactionhistorycontainer">
                      <Demo />
                    </div>
                  </div>
                  <div className="agent__wallet">
                    <h3>Wallet Balance</h3>
                    <div className="agent__agentwalletcontainer">
                      <div class="agentwalletbal_top">
                        <div class="walletbal__inner">
                          <p>Balance</p>
                          <span>N 500,000</span>
                        </div>
                        <div class="chip-img">
                          <img src="chip-img-2.png" alt="images" />
                        </div>
                      </div>
                      <div class="agentwallet__holder">
                        <div class="walletsingle-holder">
                          <p>CARD HOLDER</p>
                          <span>Ogbomoso</span>
                        </div>
                        <div class="walletsingle-holder">
                          <p>VALID THRU</p>
                          <span>12/22</span>
                        </div>
                      </div>
                      <div class="agentwalletcard-number">
                        <p>3778 **** **** 1234</p>
                        <div class="walletmasterimg">
                          <img src="master-img.png" alt="images" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* CreditRecord */}

              <div
                className={`agent__creditrecordmain ${
                  nav === "agentcreditrecord" && "showcreditrecord"
                }`}
              >
                <div className="agent__creditrecordcontainer">
                  <h2>Credit Record </h2>
                  <div className="agent__credittop">
                    <div className="agent__credittopcontent1">
                      <div className="agent__creditagentimg1">
                        <img src="./assets/png/002-money-bag.png" alt="bal" />
                      </div>
                      <div className="agent__creditagentothers1">
                        <span> Previous Balance</span>
                        <h2> 600 000</h2>
                      </div>
                    </div>
                    <div className="agent__credittopcontent2">
                      <div className="agent__creditagentimg2">
                        <img src="./assets/png/005-money.png" alt="bal" />
                      </div>
                      <div className="agent__creditagentothers1">
                        <span> Credit</span>
                        <h2>1 000 000</h2>
                      </div>
                    </div>

                    <div className="agent__credittopcontent3">
                      <div className="agent__creditagentimg3">
                        <img src="./assets/png/002-money-bag.png" alt="bal" />
                      </div>
                      <div className="agent__creditagentothers1">
                        <span> Current Balance</span>
                        <h2>1 600 000</h2>
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
                  <h2> Wallet Balance</h2>
                  <div className="agent__agentpreviousbaltop">
                    <div className="agent__agentpreviousbaltopcontent1">
                      <div className="agent__previousbalimg1">
                        <img src="./assets/png/005-money.png" alt="bal" />
                      </div>
                      <div className="agent__previous1">
                        <span> Previous Balance</span>
                        <h2>700 000</h2>
                      </div>
                    </div>
                    <div className="agent__agentpreviousbaltopcontent2">
                      <div className="agent__previousbalimg2">
                        <img src="./assets/png/005-money.png" alt="bal" />
                      </div>
                      <div className="agent__previous1">
                        <span> New Balance</span>
                        <h2>700 000</h2>
                      </div>
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
                      <div className="agent__creditagentimg1">
                        <img src="./assets/png/002-money-bag.png" alt="bal" />
                      </div>
                      <div className="agent__creditagentothers1">
                        <span> Previous Balance</span>
                        <h2> 600 000</h2>
                      </div>
                    </div>
                    <div className="agent__credittopcontent2">
                      <div className="agent__creditagentimg2">
                        <img src="./assets/png/005-money.png" alt="bal" />
                      </div>
                      <div className="agent__creditagentothers1">
                        <span> Credit</span>
                        <h2>1 000 000</h2>
                      </div>
                    </div>

                    <div className="agent__credittopcontent3">
                      <div className="agent__creditagentimg3">
                        <img src="./assets/png/002-money-bag.png" alt="bal" />
                      </div>
                      <div className="agent__creditagentothers1">
                        <span> Current Balance</span>
                        <h2>1 600 000</h2>
                      </div>
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
                <div className="agent__creditsubagentcontainerr">
                  <h2>TopUp SubAgent </h2>
                  <div className="agent__creditsubagenttop">
                    <div className="creditsubagentinfoo">
                      <CreditH />
                      <Credit name="Jennifar Loop" />
                      <Credit name="Kemi Adeleke" />
                      <Credit name="Otitoju Monday" />
                      <Credit name="Oluwaseun Titilayo" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Credit Govt purse */}
              <div
                className={`agent__creditgovtmain ${
                  nav === "creditgovt" && "showcreditgovt"
                }`}
              >
                <div className="agent__creditgovtcontainer">
                  <h2>Credit Govt </h2>
                  <div className="agent__creditgovttop">
                    <div className="creditgovtinfo">
                      <form className="creditgovtinfo__form">
                        <div className="creditgovt__formcontrol">
                          <input
                            type="text"
                            placeholder=" Enter Amount #200,000"
                          />
                        </div>
                        <div className="creditgovt__formcontrol1">
                          <div className="remita">Remita</div>
                          <div className="paystack">Paystack</div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              {/* Manage SubAgents */}
              <div
                className={`agent__managesubagentmain ${
                  nav === "managesubagent" && "showmanagesubagent"
                }`}
              >
                <div className="agent__managesubagentcontainer">
                  <h2>Manage SubAgents </h2>
                  <div className="agent__managesubagenttop">
                    {/* <ManageSH /> */}
                    <ManageSubagent
                      name="Folake Adenike"
                      location="official address"
                    />
                    <ManageSubagent
                      name="Kunle  Ajisafe"
                      location="official address"
                    />
                    <ManageSubagent
                      name="Dammi Ojo"
                      location="official address"
                    />
                    <ManageSubagent
                      name="Chukwudi Leo"
                      location="official address"
                    />
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
                  <div className="agent__transationhistorytop">
                    <h2>Transaction History </h2>
                    <div className="agent__transationhistory">
                      {/* Headings */}
                      <Agentheading />
                      {/* component that  displays the data */}
                      <TransactionHistory
                        allticket="300"
                        reverseticket="20"
                        creditfromgovt="700 000"
                        ticketosubAg="300"
                        date="04,May,2022"
                      />
                      <TransactionHistory
                        allticket="500"
                        reverseticket="50"
                        creditfromgovt="1 700 000"
                        ticketosubAg="500"
                        date="05,May,2022"
                      />
                      <TransactionHistory
                        allticket="500"
                        reverseticket="50"
                        creditfromgovt="1 000 000"
                        ticketosubAg="500"
                        date="06,May,2022"
                      />
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
                <div className="agent__allcreditcontainer">
                  <h2>All Credit</h2>
                  <div className="agent__allcredittop">
                    <div className="agent__allcredittopcontent1">
                      <div className="agent__allcreditagentimg1">
                        <img src="./assets/png/005-money.png" alt="bal" />
                      </div>
                      <div className="agent__allcreditagentothers1">
                        <span>Alloted Credit</span>
                        <h2>1 000 000</h2>
                      </div>
                    </div>

                    <div className="agent__allcredittopcontent2">
                      <div className="agent__allcreditagentimg2">
                        <img src="./assets/png/005-money.png" alt="bal" />
                      </div>
                      <div className="agent__allcreditagentothers1">
                        <span>Credit oweing</span>
                        <h2>100 000</h2>
                      </div>
                    </div>

                    <div className="agent__allcredittopcontent3">
                      <div className="agent__allcreditagentimg3">
                        <img src="./assets/png/005-money.png" alt="bal" />
                      </div>
                      <div className="agent__allcreditagentothers1">
                        <span>Approved Credit</span>
                        <h2>800 000</h2>
                      </div>
                    </div>

                    <div className="agent__allcredittopcontent4">
                      <div className="agent__allcreditagentimg4">
                        <img src="./assets/png/005-money.png" alt="bal" />
                      </div>
                      <div className="agent__allcreditagentothers1">
                        <span>Transfered Credit</span>
                        <h2>1 000 000</h2>
                      </div>
                    </div>

                    <div className="agent__allcredittopcontent5">
                      <div className="agent__allcreditagentimg5">
                        <img src="./assets/png/002-money-bag.png" alt="bal" />
                      </div>
                      <div className="agent__allcreditagentothers1">
                        <span> Bank Balance</span>
                        <h2>500 000</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* All Credited */}
              <div
                className={`agent__agenttransactionmain ${
                  nav === "agenttransaction" && "showagenttransaction"
                }`}
              >
                <div className="agent__agenttransactioncontainer">
                  <h2>All Credited</h2>
                  <div className="agent__agenttransactiontop">
                    <div className="agent__agenttransactiontopcontent1">
                      <div className="agent__agenttransactionimg1">
                        <img src="./assets/png/004-deposit.png" alt="sold" />
                      </div>
                      <div className="agent__alltransaction1">
                        <span> Deposit</span> <h2>700 000</h2>
                      </div>
                    </div>

                    <div className="agent__agenttransactiontopcontent2">
                      <div className="agent__agenttransactionimg2">
                        <img src="./assets/png/004-deposit.png" alt="sold" />
                      </div>
                      <div className="agent__alltransaction1">
                        <span> Withdrawals</span> <h2>600 000</h2>
                      </div>
                    </div>

                    <div className="agent__agenttransactiontopcontent3">
                      <div className="agent__agenttransactionimg3">
                        <img src="./assets/png/004-deposit.png" alt="sold" />
                      </div>
                      <div className="agent__alltransaction1">
                        <span> Transfer</span> <h2>200 000</h2>
                      </div>
                    </div>

                    <div className="agent__agenttransactiontopcontent4">
                      <div className="agent__agenttransactionimg4">
                        <img src="./assets/png/005-money.png" alt="bal" />
                      </div>
                      <div className="agent__alltransaction1">
                        <span>Credit SubAgent</span>
                        <h2>800 000</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* All Credits*/}
              {/* All Debit */}
              <div
                className={`agent__alldebitmain ${
                  nav === "agentalldebit" && "showagentalldebit"
                }`}
              >
                <div className="agent__alldebitcontainer">
                  <h2>All Debit </h2>
                  <div className="agent__alldebittop">
                    <div className="agent__alldebittopcontent1">
                      <div className="agent__alldebitimg1">
                        <img src="./assets/png/006-loss.png" alt="debit" />
                      </div>
                      <div className="agent__alldebitothers1">
                        <span>All Debit</span>
                        <h2>600,000</h2>
                      </div>
                    </div>

                    <div className="agent__alldebittopcontent2">
                      <div className="agent__alldebitimg2">
                        <img src="./assets/png/006-loss.png" alt="debit" />
                      </div>
                      <div className="agent__alldebitothers1">
                        <span>Govt Debit</span>
                        <h2>600,000</h2>
                      </div>
                    </div>

                    <div className="agent__alldebittopcontent3">
                      <div className="agent__alldebitimg3">
                        <img src="./assets/png/006-loss.png" alt="debit" />
                      </div>
                      <div className="agent__alldebitothers1">
                        <span>own Incentives</span>
                        <h2>100,000</h2>
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
                <div className="agent__alldepositcontainer">
                  <h2>All Deposit </h2>
                  <div className="agent__alldeposittop">
                    <div className="agent__alldeposittopcontent1">
                      <div className="agent__alldepositimg1">
                        <img src="./assets/png/004-deposit.png" alt="sold" />
                      </div>
                      <div className="agent__alldeposite1">
                        <span> All Deposit</span> <h2>600 000</h2>
                      </div>
                    </div>

                    <div className="agent__alldeposittopcontent2">
                      <div className="agent__alldepositimg">
                        <img src="./assets/png/004-deposit.png" alt="sold" />
                      </div>
                      <div className="agent__alldeposite1">
                        <span>Deposit to Govt</span> <h2>600 000</h2>
                      </div>
                    </div>

                    <div className="agent__alldeposittopcontent3">
                      <div className="agent__alldepositimg3">
                        <img src="./assets/png/004-deposit.png" alt="sold" />
                      </div>
                      <div className="agent__alldeposite1">
                        <span> Deposit From SubAgent</span> <h2>100 000</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Agent Information */}
              <div
                className={`agent__agentinformationmain ${
                  nav === "agentcreditinfo" && "showagentinfo"
                }`}
              >
                <Agentinformation />
              </div>
              {/* Agent information ends here */}
            </>
          ) : players === "subagent" ? (
            <>
              {/* SubAgent section here */}
              {/* Default page */}
              <div
                className={`agent__govtmain ${
                  nav === "maindash" && "showmain"
                }`}
              >
                <div className="agent__govtcontainer">
                  <div className="agent__top">
                    <div className="agent__topcontent1">
                      <div className="agent__agentimg1">
                        <img src="./assets/png/002-money-bag.png" alt="bal" />
                      </div>
                      <div className="agent__agentothers1">
                        <span>Balance</span>
                        <h2>1 000 000</h2>
                      </div>
                    </div>
                    <div className="agent__topcontent2">
                      <div className="agent__agentimg2">
                        <img src="./assets/png/006-loss.png" alt="debit" />
                      </div>
                      <div className="agent__agentothers1">
                        <span>All Debit</span>
                        <h2>600,000</h2>
                      </div>
                    </div>
                    <div className="agent__topcontent3">
                      <div className="agent__agentimg3">
                        <img src="./assets/png/005-money.png" alt="sold" />
                      </div>
                      <div className="agent__agentothers1">
                        <span>Ticket Sold</span> <h2>450</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="agent__centered">
                  <div className="agent__transactionhistory">
                    <h3>Transaction History</h3>
                    <div className="agent__transactionhistorycontainer">
                      <Demo />
                    </div>
                  </div>
                  <div className="agent__wallet">
                    <h3>Wallet Balance</h3>
                    <div className="agent__agentwalletcontainer">
                      <div class="agentwalletbal_top">
                        <div class="walletbal__inner">
                          <p>Balance</p>
                          <span>N 500,000</span>
                        </div>
                        <div class="chip-img">
                          <img src="chip-img-2.png" alt="images" />
                        </div>
                      </div>
                      <div class="agentwallet__holder">
                        <div class="walletsingle-holder">
                          <p>CARD HOLDER</p>
                          <span>Ogbomoso</span>
                        </div>
                        <div class="walletsingle-holder">
                          <p>VALID THRU</p>
                          <span>12/22</span>
                        </div>
                      </div>
                      <div class="agentwalletcard-number">
                        <p>3778 **** **** 1234</p>
                        <div class="walletmasterimg">
                          <img src="master-img.png" alt="images" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* CreditRecord */}
              <div
                className={`agent__creditrecordmain ${
                  nav === "agentcreditrecord" && "showcreditrecord"
                }`}
              >
                <div className="agent__creditrecordcontainer">
                  <h2>Credit Record </h2>
                  <div className="agent__credittop">
                    <div className="agent__credittopcontent1">
                      <div className="agent__creditagentimg1">
                        <img src="./assets/png/002-money-bag.png" alt="bal" />
                      </div>
                      <div className="agent__creditagentothers1">
                        <span> Previous Balance</span>
                        <h2> 600 000</h2>
                      </div>
                    </div>
                    <div className="agent__credittopcontent2">
                      <div className="agent__creditagentimg2">
                        <img src="./assets/png/005-money.png" alt="bal" />
                      </div>
                      <div className="agent__creditagentothers1">
                        <span> Credit</span>
                        <h2>1 000 000</h2>
                      </div>
                    </div>

                    <div className="agent__credittopcontent3">
                      <div className="agent__creditagentimg3">
                        <img src="./assets/png/002-money-bag.png" alt="bal" />
                      </div>
                      <div className="agent__creditagentothers1">
                        <span> Current Balance</span>
                        <h2>1 600 000</h2>
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
                  <h2>Wallet Balance</h2>
                  <div className="agent__agentpreviousbaltop">
                    <div className="agent__agentpreviousbaltopcontent1">
                      <div className="agent__previousbalimg1">
                        <img src="./assets/png/005-money.png" alt="bal" />
                      </div>
                      <div className="agent__previous1">
                        <span> Previous Balance</span>
                        <h2>700 000</h2>
                      </div>
                    </div>
                    <div className="agent__agentpreviousbaltopcontent2">
                      <div className="agent__previousbalimg2">
                        <img src="./assets/png/005-money.png" alt="bal" />
                      </div>
                      <div className="agent__previous1">
                        <span> New Balance</span>
                        <h2>700 000</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Agent Previous Balance ends */}

              {/* PRINT TICKET VIEW */}
              {/* BULK PRINTING */}
              <div
                className={`subagent__bulkprintmain ${
                  nav === "bulkprint" && "showbulkprint"
                }`}
              >
                <div className="subagent__bulkprintcontainer">
                  <h2>Bulk Printing </h2>
                  <div className="subagent__bulkprinttop">
                    <div className="subagent__bulkprintform">
                      <form className="agentbulkprintform__form">
                        <div className="agentbulkprint__formcontrol1">
                          <label>Select Category</label>
                          <select>
                            <option>Choose Category</option>
                            <option>option A</option>
                            <option>Option B</option>
                            <option>Option C</option>
                          </select>
                          {/* <input
                            type="text"
                            placeholder=" Enter Amount #200,000"
                          /> */}
                        </div>
                        <div className="subagentbulkprint__formcontrol">
                          <input type="text" placeholder="Quanity" />
                        </div>

                        <div className="creditsubagent__formcontrol">
                          <button type="submit">Print</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              {/* Single PrintTicket */}
              <div
                className={`subagent__singleprintmain ${
                  nav === "singleprint" && "showsingleprint"
                }`}
              >
                <div className="subagent__singleprintcontainer">
                  <h2>Single Printing </h2>
                  <div className="subagent__singleprintttop">
                    <div className="subagent__singleprintform">
                      <form className="subagentsingleprintform__form">
                        <div className="singleprint__formcontrol1">
                          <label>Ticket Category</label>
                          <select>
                            <option>Choose Category</option>
                            <option>option A</option>
                            <option>Option B</option>
                            <option>Option C</option>
                          </select>
                        </div>
                        {/* <div className="updateticket__formcontrol">
                          <input type="text" placeholder="Ticket Id" />
                        </div> */}

                        <div className="creditsubagent__formcontrol">
                          <button type="submit">Print Ticket</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

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
                      <div className="agent__creditagentimg1">
                        <img src="./assets/png/002-money-bag.png" alt="bal" />
                      </div>
                      <div className="agent__creditagentothers1">
                        <span> Previous Balance</span>
                        <h2> 600 000</h2>
                      </div>
                    </div>
                    <div className="agent__credittopcontent2">
                      <div className="agent__creditagentimg2">
                        <img src="./assets/png/005-money.png" alt="bal" />
                      </div>
                      <div className="agent__creditagentothers1">
                        <span> Credit</span>
                        <h2>1 000 000</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Agent New Balance ends */}

              {/* Agent record starts here */}
              {/* TRANSATION HISTORY View */}
              <div
                className={`agent__agenttransationhistorymain ${
                  nav === "agenttransactionhist" && "showagent"
                }`}
              >
                <div className="agent__agentatransationhistorycontainer">
                  <div className="agent__transationhistorytop">
                    <h2>Transaction History </h2>
                    <div className="agent__transationhistory">
                      {/* Headings */}
                      <Agentheading />
                      {/* component that  displays the data */}
                      <TransactionHistory
                        allticket="300"
                        reverseticket="20"
                        creditfromgovt="700 000"
                        ticketosubAg="300"
                        date="04,May,2022"
                      />
                      <TransactionHistory
                        allticket="500"
                        reverseticket="50"
                        creditfromgovt="1 700 000"
                        ticketosubAg="500"
                        date="05,May,2022"
                      />
                      <TransactionHistory
                        allticket="500"
                        reverseticket="50"
                        creditfromgovt="1 000 000"
                        ticketosubAg="500"
                        date="06,May,2022"
                      />
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
                <div className="agent__allcreditcontainer">
                  <h2>All Credit</h2>
                  <div className="agent__allcredittop">
                    <div className="agent__allcredittopcontent1">
                      <div className="agent__allcreditagentimg1">
                        <img src="./assets/png/005-money.png" alt="bal" />
                      </div>
                      <div className="agent__allcreditagentothers1">
                        <span>Alloted Credit</span>
                        <h2>1 000 000</h2>
                      </div>
                    </div>

                    <div className="agent__allcredittopcontent2">
                      <div className="agent__allcreditagentimg2">
                        <img src="./assets/png/005-money.png" alt="bal" />
                      </div>
                      <div className="agent__allcreditagentothers1">
                        <span>Credit oweing</span>
                        <h2>100 000</h2>
                      </div>
                    </div>

                    <div className="agent__allcredittopcontent3">
                      <div className="agent__allcreditagentimg3">
                        <img src="./assets/png/005-money.png" alt="bal" />
                      </div>
                      <div className="agent__allcreditagentothers1">
                        <span>Approved Credit</span>
                        <h2>800 000</h2>
                      </div>
                    </div>

                    <div className="agent__allcredittopcontent4">
                      <div className="agent__allcreditagentimg4">
                        <img src="./assets/png/005-money.png" alt="bal" />
                      </div>
                      <div className="agent__allcreditagentothers1">
                        <span>Transfered Credit</span>
                        <h2>1 000 000</h2>
                      </div>
                    </div>

                    <div className="agent__allcredittopcontent5">
                      <div className="agent__allcreditagentimg5">
                        <img src="./assets/png/002-money-bag.png" alt="bal" />
                      </div>
                      <div className="agent__allcreditagentothers1">
                        <span> Bank Balance</span>
                        <h2>500 000</h2>
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
                      <div className="agent__agenttransactionimg1">
                        <img src="./assets/png/004-deposit.png" alt="sold" />
                      </div>
                      <div className="agent__alltransaction1">
                        <span> Deposit</span> <h2>700 000</h2>
                      </div>
                    </div>

                    <div className="agent__agenttransactiontopcontent2">
                      <div className="agent__agenttransactionimg2">
                        <img src="./assets/png/004-deposit.png" alt="sold" />
                      </div>
                      <div className="agent__alltransaction1">
                        <span> Withdrawals</span> <h2>600 000</h2>
                      </div>
                    </div>

                    <div className="agent__agenttransactiontopcontent3">
                      <div className="agent__agenttransactionimg3">
                        <img src="./assets/png/004-deposit.png" alt="sold" />
                      </div>
                      <div className="agent__alltransaction1">
                        <span> Transfer</span> <h2>200 000</h2>
                      </div>
                    </div>

                    <div className="agent__agenttransactiontopcontent4">
                      <div className="agent__agenttransactionimg4">
                        <img src="./assets/png/005-money.png" alt="bal" />
                      </div>
                      <div className="agent__alltransaction1">
                        <span>Credit SubAgent</span>
                        <h2>800 000</h2>
                      </div>
                    </div>
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
                <div className="agent__alldebitcontainer">
                  <h2>All Debit </h2>
                  <div className="agent__alldebittop">
                    <div className="agent__alldebittopcontent1">
                      <div className="agent__alldebitimg1">
                        <img src="./assets/png/006-loss.png" alt="debit" />
                      </div>
                      <div className="agent__alldebitothers1">
                        <span>All Debit</span>
                        <h2>600,000</h2>
                      </div>
                    </div>

                    <div className="agent__alldebittopcontent2">
                      <div className="agent__alldebitimg2">
                        <img src="./assets/png/006-loss.png" alt="debit" />
                      </div>
                      <div className="agent__alldebitothers1">
                        <span>Govt Debit</span>
                        <h2>600,000</h2>
                      </div>
                    </div>

                    <div className="agent__alldebittopcontent3">
                      <div className="agent__alldebitimg3">
                        <img src="./assets/png/006-loss.png" alt="debit" />
                      </div>
                      <div className="agent__alldebitothers1">
                        <span>own Incentives</span>
                        <h2>100,000</h2>
                      </div>
                    </div>
                    {/* <div className="agent__topcontent5">
                    <h2>700 000</h2>
                    <span>Deposit</span>
                    <h6>Naira</h6>
                     </div> */}
                  </div>
                </div>
              </div>

              {/* All Deposit */}
              <div
                className={`agent__alldepositmain ${
                  nav === "agentdeposit" && "showagentdeposit"
                }`}
              >
                <div className="agent__alldepositcontainer">
                  <h2>All Deposit </h2>
                  <div className="agent__alldeposittop">
                    <div className="agent__alldeposittopcontent1">
                      <div className="agent__alldepositimg1">
                        <img src="./assets/png/004-deposit.png" alt="sold" />
                      </div>
                      <div className="agent__alldeposite1">
                        <span> All Deposit</span> <h2>600 000</h2>
                      </div>
                    </div>

                    <div className="agent__alldeposittopcontent2">
                      <div className="agent__alldepositimg">
                        <img src="./assets/png/004-deposit.png" alt="sold" />
                      </div>
                      <div className="agent__alldeposite1">
                        <span>Deposit to Govt</span> <h2>600 000</h2>
                      </div>
                    </div>

                    <div className="agent__alldeposittopcontent3">
                      <div className="agent__alldepositimg3">
                        <img src="./assets/png/004-deposit.png" alt="sold" />
                      </div>
                      <div className="agent__alldeposite1">
                        <span> Deposit From SubAgent</span> <h2>100 000</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Agent Information */}
              <div
                className={`agent__agentinformationmain ${
                  nav === "agentcreditinfo" && "showagentinfo"
                }`}
              >
                <Agentinformation heading="SubAgent Information" />
              </div>
            </>
          ) : (
            players === "opex" && (
              <>
                {/* dashboard__govtcontainer */}
                <div className={`govtmain ${nav === "maindash" && "showgovt"}`}>
                  <div className="dashboard__govtcontainerr">
                    <div className="dashboard__top">
                      <div className="dashboard__topcontent1">
                        <div className="dashboard__img1">
                          <img src="./assets/png/002-money-bag.png" alt="bal" />
                        </div>
                        <div className="dashboard__others1">
                          <span>Balance</span>
                          <h2>1 000 000</h2>
                        </div>
                      </div>
                      <div className="dashboard__topcontent2">
                        <div className="dashboard__img2">
                          <img src="./assets/png/006-loss.png" alt="debit" />
                        </div>
                        <div className="dashboard__others1">
                          <span>All Debit</span>
                          <h2>600,000</h2>
                        </div>
                      </div>
                      <div className="dashboard__topcontent3">
                        <div className="dashboard__img3">
                          {" "}
                          <img src="./assets/png/007-ticket.png" alt="ticket" />
                        </div>
                        <div className="dashboard__others1">
                          {" "}
                          <span>Ticket Printed</span>
                          <h2>500</h2>
                        </div>
                      </div>
                      <div className="dashboard__topcontent4">
                        <div className="dashboard__img4">
                          <img src="./assets/png/005-money.png" alt="sold" />
                        </div>
                        <div className="dashboard__others1">
                          <span>Ticket Sold</span> <h2>450</h2>
                        </div>
                      </div>
                      <div className="dashboard__topcontent5">
                        <div className="dashboard__img5">
                          <img src="./assets/png/004-deposit.png" alt="sold" />
                        </div>
                        <div className="dashboard__others1">
                          <span>Deposit</span> <h2>700 000</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dashboard__centered">
                    <div className="dashboard__transactionhistory">
                      <h3>Transaction History</h3>
                      <div className="dashboard__transactionhistorycontainer">
                        <Demo />
                      </div>
                      </div>
                      <div className="dashboard__transactionhistory1">
                      <h3>Transaction History</h3>
                      <div className="dashboard__transactionhistorycontainer1">
                        <Demo />
                      </div>
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
                
                {/* Select LocalGovt View */}
                <div
                  className={`selectlocalgovt__main ${
                    nav === "selectLGA" && "showlocalgovt"
                  }`}
                >
                  <div className="selectlocalgovt__rightcontainer">
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
                      <button type="submit" onClick={handleSelect}>
                        Proceed
                      </button>
                      <div>{chosenlocalgovt}</div>
                    </div>
                  </div>
                </div>
                {/* Select LocalGovt Ends here */}
                {/* Create other users form */}
                <div
                  className={`selectcreateuser__main ${
                    nav === "createuser" && "showuserform"
                  }`}
                >
                  <div className="createuser__rightcontainer">
                    <h1>Add Users</h1>
                    <div className="createuser">
                      <form className="createuser__form">
                        <div className="form__control">
                          <select>
                            <option>choose user</option>
                            <option>Govt</option>
                            <option>Agent</option>
                            <option>SubAgent</option>
                          </select>
                        </div>
                        <div className="form__control">
                          <input type="text" placeholder="email" />
                        </div>
                        <div className="form__control">
                          <select>
                            <option>choose state</option>
                            <option>Abia</option>
                            <option>Umuhaya</option>
                            <option>Adamawa</option>
                          </select>
                        </div>
                        <div className="form__control">
                          <select>
                            <option>select LocalGovt</option>
                            <option>Abia</option>
                            <option>Umuhaya</option>
                            <option>Adamawa</option>
                          </select>
                        </div>
                        <div className="form__control">
                          <button>Create user</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* create other users end */}
                {/* lOCAL GOVT STARTS HERE */}
                <div
                  className={`localgovt__main ${nav === "LGA" && "showlga"}`}
                >
                  <div className="localgovt__rightcontainer">
                    <div className="dashboard__localgovtcontainer">
                      <div className="dashboard__localgovttop">
                        <div className="dashboard__localgovttopcontent1">
                          <h2>1 000 000</h2>
                          <span>Balance</span>
                          <h6>Naira</h6>
                        </div>
                        <div className="dashboard__localgovttopcontent2">
                          <h2>600,000</h2>
                          <span>All Debit</span>
                          <h6>Naira</h6>
                        </div>
                        <div className="dashboard__localgovttopcontent3">
                          <h2>500</h2>
                          <span>Ticket Printed</span>
                          <h6>Tickets</h6>
                        </div>
                        <div className="dashboard__localgovttopcontent4">
                          <h2>450</h2>
                          <span>Ticket Sold</span>
                          <h6>Naira</h6>
                        </div>
                        <div className="dashboard__localgovttopcontent5">
                          <h2>700 000</h2>
                          <span>Deposit</span>
                          <h6>Naira</h6>
                        </div>
                      </div>
                    </div>
                    <div className="dashboard__localgovtcentered">
                      <div className="dashboard__localgovthistory">
                        <h3>Transaction History</h3>
                        <div className="dashboard__localgovtcontainer">
                          <div className="dashboard__localgovtCenterHeader">
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
                          <Transactionitems />
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
                {/* LOCAL GOVT ENDS HERE */}
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
