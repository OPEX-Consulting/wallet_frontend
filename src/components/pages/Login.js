import React, { useState } from "react";
import "./Login.css";
import { AiOutlineMail } from "react-icons/ai";
import { BiLock } from "react-icons/bi";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { BsWallet2 } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Input from "../utils/Input";

function Login() {
  const navigate = useNavigate();
  const verifyAuth = [
    {
      id: 1,
      email: "govt@me.com",
      password: "govt1234",
    },
    {
      id: 2,
      email: "agent@me.com",
      password: "agent1234",
    },
    {
      id: 3,
      email: "superagent@me.com",
      password: "superagent1234",
    },
    {
      id: 4,
      email: "opex@me.com",
      password: "opex1234",
    },
  ];
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Submit Form");
    if (email === verifyAuth[0].email && password === verifyAuth[0].password)
      return navigate("/govt");
  };
  return (
    <div className="login">
      <div className="login__container">
        <h2>Log In</h2>
        <div className="login__top">
          <div className="login__logo">
            <BsWallet2 className="login__wallet" />
          </div>
          <div className="login__form">
            <form className="form">
              <Input
                title="Email"
                Icon={AiOutlineMail}
                type="email"
                placeholder="enter your email"
                name="email"
                className="mail"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />

              <div className="form__control">
                <label>Password</label>
                <div className="form__input">
                  <BiLock className="lock" />
                  <input
                    type="password"
                    placeholder="enter your password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <BsFillEyeSlashFill className="eye" />
                </div>
              </div>
              <span className="forgot__pass">Forget password?</span>
              <button type="submit" className="submit" onClick={handleLogin}>
                {" "}
                Log In
              </button>
              <div className="form__buttom">
                <h4 className="form__noact">Don't have an account?</h4>
                <Link to="/register">
                  <h4>Register here</h4>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
