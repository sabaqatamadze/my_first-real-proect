import React from "react";
import "./sign-up.css";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

function Sign_up() {
  return (
    <div className="sign-up">
      <div className="img-container">
        <img src="src\pic/dl.beatsnoop 1.png" alt="" className="img" />
      </div>
      <div className="info">
        <h2 className="title">Create an account</h2>
        <p className="description">Enter your details below</p>
        <input type="text" placeholder="name" className="name" />
        <br />
        <input
          type="text"
          placeholder="Email or Phone Number"
          className="username"
        />
        <br />
        <input type="text" placeholder="password" className="password" />
        <br />
        <button className="sign-up-btn">Create Account</button>
        <br />
        <button className="sign-up-google">
          <FcGoogle className="google-icon" /> Sign up with Google
        </button>
        <p className="owned">
          Already have account?{" "}
          <Link to={"/log-in"} className="link">
            log-in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Sign_up;
