import React from "react";
import { useState } from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import signIn from "./SignIn.css";
import { white } from "material-ui/styles/colors";
function Signin() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const changeHandle = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setError(validate(values));
    setIsSubmit(true);
  };
  var message = "";
  if (Object.keys(error).length === 0 && isSubmit) {
    message = "Signed in successfully";
  }

  const validate = (values) => {
    console.log(!values.email);
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }

    return errors;
  };
  return (
    <div className="signin_container">
      <div className="signin_content">
        <div className="lastMessage">{message}</div>
        <div className="heading">
          <h1>Sign in to Diprella</h1>
        </div>
        <div className="signin_icon">
          <FacebookRoundedIcon
            style={{
              backgroundColor: "white",
              padding: "5px",
              color: "black",
              margin: "5px",
              fontSize: "1.5rem",
              border: "2px solid whitesmoke",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          />
          <GoogleIcon
            style={{
              backgroundColor: "white",
              padding: "5px",
              color: "black",
              margin: "5px",
              fontSize: "1.5rem",
              border: "2px solid whitesmoke",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          />
          <LinkedInIcon
            style={{
              backgroundColor: "white",
              padding: "5px",
              color: "black",
              margin: "5px",
              fontSize: "1.5rem",
              border: "2px solid whitesmoke",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          />
        </div>
        <div className="about">
          <p>or use your eamil account</p>
        </div>
        <form onSubmit={submitHandler}>
          <input
            className="signin_input"
            name="email"
            type="email"
            placeholder=" Email"
            value={values.email}
            onChange={changeHandle}
          ></input>
          <p className="para">{error.email}</p>
          <input
            type="password"
            name="password"
            placeholder=" Password"
            value={values.password}
            onChange={changeHandle}
          ></input>
          <p className="para">{error.password}</p>
          <div className="recovery">Forgot your password?</div>
          <button className="signin_btn">SIGN IN</button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
