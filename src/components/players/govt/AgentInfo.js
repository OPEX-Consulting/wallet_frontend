import React, { useState } from "react";
import Header from "../../utils/Header";
import "./AgentInfo.css";
import { BsCreditCardFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { MdStoreMallDirectory } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import { HiArrowSmLeft } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import AgentInfoItems from "./AgentInfoItems";
function AgentInfo() {
  const navigate = useNavigate();
  const [slider, setSlider] = useState(false);
  const [subSlider, setSubslider] = useState(false);
  const handleSubslider = () => {
    setSubslider(!subSlider);
  };
  const handleSlider = () => {
    setSlider(!slider);
  };
  return (
    <div className="agentinfo">
      <Header />
      <div className="agentinfo__container">
        {/* Left navigation */}

        <nav className="agentinfo__left">
          <div className="profile__details">
            <img src="./plain-designify.png" alt="profile" />
            <div className="profile__info">
              <h6>OYO STATE</h6>
              <span>oyostate.gov.com</span>
            </div>
          </div>
          <div className="agentinfo__itemscontainer">
            <div className="agentinfo__itemsclients users">
              <div className="agentinfoUsers">
                <MdStoreMallDirectory className="user__icon" />
                <span>Local Goverment Area</span>
                <MdArrowDropDown
                  className="agentinfo__down"
                  onClick={handleSlider}
                />
              </div>
              {slider && (
                <div className="agentinfoUserToggle">
                  <Link to="/govt" className="links">
                    <span>Wallet Balance</span>
                  </Link>
                  <Link to="/govt_revenue" className="links">
                    <span>Revenew</span>
                  </Link>
                  <Link to="/agentinfo" className="links">
                    <span>agentinfos</span>
                  </Link>
                  <div className="track__agents">
                    <div className="track__agentshead">
                      <h4>Track Agents</h4>
                      <MdArrowDropDown
                        className="govt__down"
                        onClick={handleSubslider}
                      />
                    </div>
                    {subSlider && (
                      <div className="trackagent__suboptions">
                        <Link to="/creditrecord">
                          <span className="trackagent__options">
                            Credit Record
                          </span>
                        </Link>
                        <Link to="/agentinfo">
                          <span className="trackagent__options">
                            Agent Information
                          </span>
                        </Link>
                        <span className="trackagent__options">
                          Agent Record
                        </span>
                      </div>
                    )}{" "}
                  </div>
                </div>
              )}
            </div>
            <div className="agentinfo__items">
              <FaUserAlt className="agentinfo__icon" />
              <span>Account Info</span>
            </div>
            <div className="agentinfo__items">
              <BsCreditCardFill className="agentinfo__icon" />
              <span>Wallet Balance</span>
            </div>
            <div className="agentinfo__items">
              <BsCreditCardFill className="agentinfo__icon" />
              <span>Open New Account</span>
            </div>
          </div>
        </nav>
        {/* Main Content */}
        <div className="agentinfo__right">
          <div className="agentinfo__rightcontainer">
            <div className="agentinfoBack">
              {" "}
              <Link to="/govt">
                <HiArrowSmLeft />
              </Link>{" "}
              <h1>Agent Information </h1>
            </div>

            {/* <div className="agentinfo__top">
              <div className="renueg__topcontent1">
                <h2>1 000 000</h2>
                <span>All Credit</span>
                <h6>Naira</h6>
              </div>
              <div className="renueg__topcontent2">
                <h2>600,000</h2>
                <span>All Debit</span>
                <h6>Naira</h6>
              </div>
              <div className="renueg__topcontent3">
                <h2>500</h2>
                <span>Ticket Printed</span>
                <h6>Tickets</h6>
              </div>
              <div className="renueg__topcontent4">
                <h2>700 000</h2>
                <span>Deposit</span>
                <h6>Naira</h6>
              </div>
            </div> */}

            <div className="agentinfoCenter">
              {/* <h2 className="agentinfoH">agentinfo</h2> */}
              <div className="agentinfoCenter__container">
                <div className="agentinfoCenterHeader">
                  <div className="agent__th">Agent Name</div>
                  <div className="agent__th">Agent Location</div>
                  <div className="agent__th">Agents BVN</div>
                  <div className="agent__th">Agents Credit</div>
                  <div className="agent__th">Agents Manager</div>
                  <div className="agent__th">Agents Transaction</div>
                </div>
                <AgentInfoItems />
                <AgentInfoItems />
                <AgentInfoItems />
                <AgentInfoItems />
                <AgentInfoItems />
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

export default AgentInfo;
