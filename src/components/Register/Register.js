import React, { Component, Fragment } from "react";

import ProgressBar from "../UI/ProgressBar/ProgressBar";
import RegisterAd from "./RegisterAd/RegisterAd";

import styles from "./Register.module.css";

class Register extends Component {
  state = {
    progressValue: 10,
  };

  updateProgress = (current) => {
    this.setState({ progressValue: current });
  };

  render() {
    return (
      <Fragment>
        <ProgressBar
          title="ثبت آگهی خودرو در یک دقیقه"
          currentValue={this.state.progressValue}
        />
        <RegisterAd progressValue={this.updateProgress} />
      </Fragment>
    );
  }
}

export default Register;
