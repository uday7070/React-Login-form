import React, { Component } from "react";
import "./App.css";
import Welcome from "./Components/Welcome";
import Hello from "./Components/Hello";
import react from "react";
import Signin from "./Components/Signin";
import SignUp from "./Components/SignUp";

class App extends React.Component {
  state = {
    count: 0,
  };
  nextHandler = (e) => {
    e.preventDefault();

    this.setState({
      count: this.state.count + 1,
    });
  };
  doubleHandler = (e) => {
    e.preventDefault();

    this.setState({
      count: this.state.count + 2,
    });
  };

  render() {
    switch (this.state.count) {
      case 0:
        return (
          <div className="App">
            <div className="App_components">
              <Welcome nextHandler={this.nextHandler} />
              <Hello doubleHandler={this.doubleHandler} />
            </div>
          </div>
        );
      case 1:
        return <Signin />;
      case 2:
        return <SignUp />;
      default:
        return "hii";
    }
  }
}

export default App;
