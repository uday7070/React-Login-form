import React from "react";
import { useState, useEffect } from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import green from "@material-ui/core/colors/green";

import signIn from "./SignIn.css";
function SignUp() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validates(values));
    setIsSubmit(true);
  };

  var message = "";
  if (Object.keys(error).length === 0 && isSubmit) {
    message = `Sign Up Successfully`;
  }

  const validates = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.name) {
      errors.name = "Name is required!";
    }
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
          <h1>Create Account</h1>
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
          <p>or use your email for registration</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="signin_input"
            value={values.name}
            onChange={handleChange}
          ></input>
          <p className="para">{error.name}</p>

          <input
            name="email"
            className="signin_input"
            type="email"
            placeholder=" Email"
            value={values.email}
            onChange={handleChange}
          ></input>
          <p className="para">{error.email}</p>

          <input
            type="password"
            name="password"
            placeholder=" Password"
            value={values.password}
            onChange={handleChange}
          ></input>
          <p className="para">{error.password}</p>
          <button className="signin_btn">SIGN UP</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
