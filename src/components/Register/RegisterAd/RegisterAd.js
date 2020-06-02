import React, { Component } from "react";

import styles from "./RegisterAd.module.css";

import RegisterSelectBox from "../RegisterSelectBox/RegisterSelectBox";

class RegisterAd extends Component {
  state = {
    progressValue: 5,
    brands: [
      { key: "انتخاب برند", value: 0 },
      { key: "تویوتا", value: 1 },
      { key: "لکسوس", value: 2 },
      { key: "رنو", value: 3 },
    ],
    brandsValue: 0,
    models: [
      { key: "انتخاب مدل", value: 0 },
      { key: "یاریس", value: 1 },
      { key: "پریوس", value: 2 },
      { key: "کمری", value: 3 },
    ],
    modelsValue: 0,
  };

  componentDidMount() {
    console.log("Component did mount");
  }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //
  //   console.log("Component did Updated", this.props);
  // }

  brandsChangeHandler = (event) => {
    this.setState({ brandsValue: event.target.value });
    if (event.target.value > 0) {
      this.props.progressValue(20);
    } else {
      this.props.progressValue(10);
    }
  };

  modelsChangeHandler = (event) => {
    this.setState({ modelsValue: event.target.value });
    if (event.target.value > 0) {
      this.props.progressValue(30);
    } else {
      this.props.progressValue(20);
    }
  };

  render() {
    return (
      <div className={styles.NewAdContainer}>
        <section className={styles.BrandSection}>
          <RegisterSelectBox
            options={this.state.brands}
            changed={this.brandsChangeHandler}
            currentValue={this.state.brandsValue}
          />
          <RegisterSelectBox
            options={this.state.models}
            changed={this.modelsChangeHandler}
            currentValue={this.state.modelsValue}
          />
        </section>
      </div>
    );
  }
}

export default RegisterAd;
