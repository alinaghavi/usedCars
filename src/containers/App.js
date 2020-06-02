import React, { Component } from "react";

import Register from "../components/Register/Register";

import styles from "./App.module.css";

class App extends Component {
  render() {
    return (
      <div className={`App ${styles.Wrapper}`}>
        <Register />
      </div>
    );
  }
}

export default App;
