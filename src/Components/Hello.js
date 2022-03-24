import React from "react";
import "./Hello.css";

function Hello(props) {
  return (
    <div className="hello">
      {/* <div className="hello_cntainer">

        </div> */}
      <h1>Hello, friend!</h1>
      <p>Enter your personal details and start your journey with us</p>
      <button onClick={props.doubleHandler} className="hello_btn">
        SIGN UP
      </button>
    </div>
  );
}

export default Hello;
