import React from "react";
import "./Welcome.css";

// import { Route, Routes } from "react-router-dom";
// import Navbar from "./Navbar";

function Welcome(props) {
  return (
    <div className="welcome">
      <h1 className="welcome_heading">Welcome Back!</h1>
      <p>To keep connected with us please login with your personal info</p>
      <button onClick={props.nextHandler} className="welcome_btn">
        SIGN IN
      </button>
    </div>
  );
}

export default Welcome;
