import React, { useEffect, useState } from "react";
// LOGIN
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset, register } from "../../features/auth/authSlice";
import Loading from "../utils/Loading";
import "./Walletextra.css";

function Signin({ setRole, role }) {
  // FOR LOGIN.
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const { isError, isSuccess, message, user, isLoading } = useSelector(
  //   (state) => state.auth
  // );

  // useEffect(() => {
  //   if (isError) {
  //     console.log("not successful");
  //   }
  //   if (isSuccess) {
  //     navigate("/dashboard");
  //   }

  //   dispatch(reset);
  // }, [isLoading, isSuccess, message, isError, user, navigate, dispatch]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const users = [
    { id: 1, email: "opex@yahoo.com", password: "opex" },
    { id: 2, email: "govt@yahoo.com", password: "govt" },
    { id: 3, email: "agent@yahoo.com", password: "agent" },
    {
      id: 4,
      email: "subagent@yahoo.com",
      password: "subagent",
    },
  ];
  const { email, password } = formData;
  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: [e.target.value],
    }));
  };
  // const [role, setRole] = useState("");
  const handleRole = () => {
    const roles =
      formData.email == users[0].email && formData.password == users[0].password
        ? setRole(0)
        : formData.email == users[1].email &&
          formData.password == users[1].password
        ? setRole(1)
        : formData.email == users[2].email &&
          formData.password == users[2].password
        ? setRole(2)
        : formData.email == users[3].email &&
          formData.password == users[3].password
        ? setRole(3)
        : console.log("credentials not working");
    return roles;
  };
  console.log(role);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRole();
    navigate("/dashboard");
    // LOGIN
    // const userData = {
    //   password,
    //   email,
    // };
    // dispatch(login(userData));
  };
  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    // <!-- auth main -->
    <main className="content auth-main d-flex align-items-center justify-content-center">
      {/* <!-- svg shape background --> */}
      <svg
        className="triangle-side-back position-absolute authstyle"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 753.92 973.3"
        // style="height: 80%;top:50px"
      >
        <path
          d="M.24,837.5C28,840,54.55,841.82,79.39,829.16c15.55-7.91,27.77-21,39.3-34.06C175.21,731,225.14,658.24,297.58,612.84c72.68-45.55,160.51-58.77,245.75-68.31,27.35-3.06,54.86-5.87,81.47-12.87a265,265,0,0,0,75.23-33c15.33-9.81,29.94-21.54,39.52-37,17.94-29,15.52-65.71,11.55-99.56-3-25.22-6.7-51.17-19.78-72.94-16.56-27.56-45.83-44.74-74.89-58.52-58.1-27.57-122.54-47.82-166.46-94.8C468.58,113,452.83,84.4,427.39,66.14a104.59,104.59,0,0,0-66.46-19.28C334.59,48.39,310,59.8,284.93,68,190.85,98.67,82.64,82.18,2,24.85Z"
          // style="fill: #f1f1f1;opacity: 0.5;isolation: isolate"
          className="signin__path"
        ></path>
        <path
          d="M0,971.5c27.76,2.51,54.31,4.32,79.15-8.34,15.54-7.91,27.77-21,39.3-34.06C175,865,224.9,792.24,297.34,746.84c72.68-45.55,160.51-58.77,245.75-68.31,27.35-3.06,54.86-5.87,81.47-12.87a265,265,0,0,0,75.23-33c15.33-9.81,29.94-21.54,39.52-37,17.94-29,15.52-65.71,11.55-99.56-3-25.22-6.7-51.17-19.78-72.94-16.56-27.56-45.83-44.74-74.89-58.52-58.1-27.57-122.54-47.82-166.46-94.8-21.39-22.88-37.14-51.44-62.58-69.7a104.6,104.6,0,0,0-66.41-19.29c-26.39,1.53-51,12.94-76,21.15-94.13,30.67-202.34,14.18-283-43.15Z"
          // style="fill: #f1f1f1"
          className="signin__fill"
        ></path>
        <circle cx="385.74" cy="6" r="6" className="signin__fill1"></circle>
        <circle cx="195.74" cy="645" r="16" className="signin__fill2"></circle>
      </svg>
      {/* <!-- auth box --> */}
      <section className="auth-box col-md-8 p-0">
        {/* <!-- svg background --> */}
        <div className="section-background-svgs d-none d-lg-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="triangle-side-back position-absolute inverse signin__svg"
            viewBox="0 0 764.94 1006.05"

            // style="height:100%;z-index:10;top:-57px"
          >
            <defs>
              <linearGradient
                id="triangle-gradient"
                x1="1404.62"
                y1="542.5"
                x2="1920"
                y2="542.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0"
                  stop-color="#fee28a"
                  stop-opacity="0.18"
                ></stop>
                <stop
                  offset="0.5"
                  stop-color="#fff5d8"
                  stop-opacity="0.2"
                ></stop>
                <stop
                  offset="1"
                  stop-color="#fee28a"
                  stop-opacity="0.05"
                ></stop>
              </linearGradient>
            </defs>
            <path
              d="M1919.5,148.59c-88.72-48-227.44-102-394-84.08-105.41,11.33-220.77,23.73-298,134.29-61.94,88.67-100.45,242.05-49,348,76.46,157.44,293,89.42,370,269.74,18,42.07,24.89,89.6,69,146,15.64,20,56.29,70.59,125,93.42,83.58,27.77,154.16-3.66,177-15.18Z"
              transform="translate(-1154.56 -61)"
              className="signin__defs"
              // style="fill: url(#triangle-gradient)"
            ></path>
          </svg>
        </div>
        {/* <!-- row --> */}
        <div className="row no-gutters">
          {/* <!-- form side --> */}
          <div className="col-lg-7">
            <div className="form-wrapper auth-content h-100">
              {/* <!-- nav links --> */}
              <nav className="nav mb-3 align-items-center">
                <a href="signin.html" className="nav-link auth-link active">
                  Sign in
                </a>
                {/* <a href="signup.html" className="nav-link auth-link">
                  Sign Up
                </a> */}
              </nav>
              {/* <!-- form --> */}
              <form className="form gr-form needs-validation">
                <div className="form-group gr-form-group gr-form-group-dark gr-form-group-inside">
                  <input
                    type="email"
                    className="form-control"
                    onChange={handleChange}
                    name="email"
                    value={email}
                    required
                  />
                  <label className="gr-label">Email</label>
                  <div className="invalid-feedback">
                    Please enter a valid email
                  </div>
                </div>
                <div className="form-group gr-form-group gr-form-group-dark gr-form-group-inside">
                  <input
                    type="password"
                    className="form-control"
                    onChange={handleChange}
                    name="password"
                    value={password}
                    required
                  />
                  <label className="gr-label">Password</label>
                </div>
                <div className="form-group">
                  <a
                    href="dummy.html"
                    className="text-link text-muted font-regular"
                  >
                    <input type="checkbox" /> Dont Remember your Password?
                  </a>
                </div>
                <div className="divider-word">
                  {/* <span className="font-sm">
                    Replace Users with a Login Button, <br />
                    Only One Button will be here not 4
                  </span> */}
                </div>
                <div className="form-group mt-2">
                  <button
                    type="submit"
                    className="signin__btn"
                    onClick={handleSubmit}
                  >
                    Sign in
                  </button>
                  {/* <a
                    href="govt/index.html"
                    className="btn btn-primary btn-sm btn-wider mt-1 btn-block font-md"
                  >
                    Government
                  </a>
                  <a
                    href=""
                    className="btn btn-primary btn-sm btn-wider mt-1 btn-block font-md"
                  >
                    Agent
                  </a>
                  <a
                    href=""
                    className="btn btn-primary btn-sm btn-wider mt-1 btn-block font-md"
                  >
                    Sub Agent
                  </a>
                  <a
                    href=""
                    className="btn btn-primary btn-sm btn-wider mt-1 btn-block font-md"
                  >
                    OPEX Admin
                  </a> */}
                </div>
                <div className="divider-word">
                  <span>Or</span>
                </div>
                <div className="form-group d-flex">
                  <a
                    href="dummy.html"
                    className="btn btn-outline-gray google-auth flex-grow-1 mr-2"
                  >
                    <img src="assets/images/google-logo.gif" alt="alt" /> Sign
                    in with Google
                  </a>

                  <a
                    href="dummy.html"
                    className="btn btn-icon"
                    data-toggle="tooltip"
                    title="Sign in with twitter"
                  >
                    <i className="icon-twitter"></i>
                  </a>
                </div>
              </form>
            </div>
          </div>
          {/* <!-- text side --> */}
          <div className="col-lg-5 d-none d-lg-block z-index-10">
            <div className="auth-sidebar h-100 d-flex flex-column justify-content-center">
              {/* <!-- logo --> */}
              <small>Click Logo to go to the landing page</small>
              <a className="navbar-brand mb-5" href="index.html">
                <img
                  src="assets/images/logo-light.png"
                  className="header-logo img-fluid logosize"
                  alt="logo"
                />
              </a>

              {/* <!-- heading --> */}
              <h2 className="font-xl font-weight-normal mb-4">
                Transparent Collections
              </h2>
              {/* <!-- text --> */}
              <p className="font-weight-light text-muted">
                We bring Integrity, Analytics and Intelligence into Your
                Collections.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Signin;
