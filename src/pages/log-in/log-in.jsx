import React from "react";
import "./log-in.css";
import { Link } from "react-router-dom";

function Log_in() {
  return (
    <div className="log-in">
      <div className="img-container">
        <img src="src\pic/dl.beatsnoop 1.png" alt="" className="img" />
      </div>
      <div className="info">
        <h2 className="title">Log in to Exclusive</h2>
        <p className="description">Enter your details below</p>
        <input
          type="text"
          placeholder="Email or Phone Number"
          className="username"
        />
        <br />
        <input type="text" placeholder="password" className="password" />
        <br />
        <button className="log-in-btn">Log In</button>
        <Link to="/forgot-password" className="forgot-password">
          forgot password?
        </Link>
      </div>
    </div>
  );
}

export default Log_in;
