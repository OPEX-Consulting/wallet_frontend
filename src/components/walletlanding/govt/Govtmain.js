import React from "react";
import "./Govtmain.css";

function Govtmain() {
  return (
    // <!-- main-content start -->
    <div className="main-content">
      <div className="account-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-balance">
                <div className="icon bg-one">
                  <i className="flaticon-money-bag"></i>
                </div>
                <div className="text">
                  <p>My Balance</p>
                  <span>₦12,750,000</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-balance">
                <div className="icon bg-two">
                  <i className="flaticon-income"></i>
                </div>
                <div className="text">
                  <p>Income</p>
                  <span>₦5,600</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-balance">
                <div className="icon bg-three">
                  <i className="flaticon-medical"></i>
                </div>
                <div className="text">
                  <p>Expense</p>
                  <span>₦3,460</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-balance">
                <div className="icon bg-four">
                  <i className="flaticon-saving"></i>
                </div>
                <div className="text">
                  <p>Total Saving</p>
                  <span>₦7,920</span>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="heading">
                <h2>Last Transaction</h2>
              </div>
              <div className="last-transection">
                <div className="transection-table">
                  <div className="table-responsive">
                    <table>
                      <tr>
                        <td>
                          <div className="transection-icon bg-four">
                            <i className="flaticon-renew"></i>
                          </div>
                        </td>
                        <td>
                          <div className="transection-name">
                            <h5>Spotify Subscription</h5>
                            <span>25 Jan 2021</span>
                          </div>
                        </td>
                        <td>
                          <p>Shopping</p>
                        </td>
                        <td>
                          <p>1234 ****</p>
                        </td>
                        <td>
                          <p>Pending</p>
                        </td>
                        <td>
                          <div className="price">
                            <span>-₦150</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="transection-icon bg-two">
                            <i className="flaticon-settings-2"></i>
                          </div>
                        </td>
                        <td>
                          <div className="transection-name">
                            <h5>Mobile Service</h5>
                            <span>25 Jan 2021</span>
                          </div>
                        </td>
                        <td>
                          <p>Service</p>
                        </td>
                        <td>
                          <p>1234 ****</p>
                        </td>
                        <td>
                          <p>Completed</p>
                        </td>
                        <td>
                          <div className="price">
                            <span>-₦340</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="transection-icon bg-three">
                            <i className="flaticon-user-1"></i>
                          </div>
                        </td>
                        <td>
                          <div className="transection-name">
                            <h5>Emilly Wilson</h5>
                            <span>25 Jan 2021</span>
                          </div>
                        </td>
                        <td>
                          <p>Transfer</p>
                        </td>
                        <td>
                          <p>1234 ****</p>
                        </td>
                        <td>
                          <p>Completed</p>
                        </td>
                        <td>
                          <div className="price">
                            <span className="govtmain__price">+₦780</span>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-7">
              <div className="heading">
                <h2>My Cards</h2>
                <a href="dummy">See All</a>
              </div>
              <div className="transection-card">
                <div className="third-card">
                  <div className="chip-area">
                    <div className="balance">
                      <p>Balance</p>
                      <span>₦5,756</span>
                    </div>
                    <div className="chip-img">
                      <img src="assets/images/chip-img-1.png" alt="images" />
                    </div>
                  </div>
                  <div className="holder">
                    <div className="single-holder">
                      <p>CARD HOLDER</p>
                      <span>Eddy Cusuma</span>
                    </div>
                    <div className="single-holder">
                      <p>VALID THRU</p>
                      <span>12/22</span>
                    </div>
                  </div>
                  <div className="card-number">
                    <p>3778 **** **** 1234</p>
                    <div className="master-img">
                      <img src="assets/images/master-img.png" alt="images" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="long-chart">
                <div className="heading">
                  <h2>Debit & Credit Overview</h2>
                </div>
                <div className="main-chart">
                  <p>
                    <span>₦7,560</span> Debited & <span>₦5,420</span> Credited
                    in this Week
                  </p>
                  <div className="points">
                    <div className="deposit">
                      <span>Debit</span>
                    </div>
                    <div className="withdraw">
                      <span>Credit</span>
                    </div>
                  </div>
                  <div
                    id="chartContainer"
                    className="govtmain__chartcontainer"
                    // style="height: 250px; width: 100%"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="invoice">
                <div className="heading">
                  <h2>Invoices Sent</h2>
                </div>
                <ul>
                  <li>
                    <div className="icon bg-four">
                      <i className="flaticon-apple"></i>
                    </div>
                    <div className="name">
                      <h5>Apple Store</h5>
                      <span>5h ago</span>
                    </div>
                    <div className="price">
                      <span>₦450</span>
                    </div>
                  </li>
                  <li>
                    <div className="icon bg-one">
                      <i className="flaticon-user-1"></i>
                    </div>
                    <div className="name">
                      <h5>Apple Store</h5>
                      <span>5h ago</span>
                    </div>
                    <div className="price">
                      <span>₦450</span>
                    </div>
                  </li>
                  <li>
                    <div className="icon bg-two">
                      <i className="flaticon-playstation"></i>
                    </div>
                    <div className="name">
                      <h5>Apple Store</h5>
                      <span>5h ago</span>
                    </div>
                    <div className="price">
                      <span>₦450</span>
                    </div>
                  </li>
                  <li>
                    <div className="icon bg-three">
                      <i className="flaticon-user-1"></i>
                    </div>
                    <div className="name">
                      <h5>Apple Store</h5>
                      <span>5h ago</span>
                    </div>
                    <div className="price">
                      <span>₦450</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <!-- main-content end -->
  );
}

export default Govtmain;
