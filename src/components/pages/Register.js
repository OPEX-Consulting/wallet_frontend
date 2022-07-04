import React, { useState } from "react";
import "./Register.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsWallet2 } from "react-icons/bs";
import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import Input from "../utils/Input";

function Register() {
  const checkEmail = {
    email: "paul@yahoo.com",
  };
  const [email, setEmail] = useState("");
  const handleEmailConfirmed = (e) => {
    e.preventDefault();
    console.log("Hello");
    if (!email) return;
    if (email === checkEmail.email) {
      console.log("There is a match");
      //Navigate to the Dashboard.
    } else {
      console.log("InCorrect Password");
    }
  };
  return (
    <div className="register">
      <div className="register__container">
        <Link to="/">
          <div className="register__header">
            {/* <HiArrowLeft /> */}
            <span>Confirm Email</span>
          </div>
        </Link>

        <div className="register__top">
          <div className="register__logo">
            <BsWallet2 className="register__wallet" />
          </div>
          <div className="register__form">
            <form className="form">
              <Input
                title="Email"
                Icon={AiOutlineMail}
                type="email"
                placeholder="enter your email"
                name="email"
                className="mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <span className="submit__note">
                We will send a 4 digit verification code to your mail. Please
                enter the correct email
              </span>
              <button
                type="submit"
                className="reg__submit"
                onClick={handleEmailConfirmed}
              >
                {" "}
                Confirm Mail
              </button>
              <div className="form__buttom">
                {/* <h4 className="form__noact">Don't have an account?</h4>
                <Link to="/register">
                  <h4>Register here</h4>
                </Link> */}
                {email}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
