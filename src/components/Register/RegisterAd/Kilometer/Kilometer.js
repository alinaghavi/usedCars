import React, { Component, Fragment } from "react";

import styles from "./Kilometer.module.css";

class Kilometer extends Component {
  state = {
    kilometerNumber: "",
    selectedTick: false,
  };

  ZeroKilometerHandler = () => {
    this.setState({
      kilometerNumber: 0,
      selectedTick: true,
    });
  };

  NonZeroKilometerHandler = () => {
    this.setState({
      kilometerNumber: "",
      selectedTick: false,
    });
  };
  changeKilometerTextBoxHandler = (input) => {
    this.setState({
      kilometerNumber: +input.target.value,
      selectedTick: true,
    });
  };
  render() {
    return (
      <Fragment>
        <div className={styles.BtnsWrapper}>
          <button
            className={styles.KilometerBTN}
            style={
              this.state.kilometerNumber === 0
                ? { border: "2px solid var(--bama-color)" }
                : null
            }
            onClick={this.ZeroKilometerHandler}
          >
            صفر
          </button>
          <button
            className={styles.KilometerBTN}
            style={
              this.state.kilometerNumber !== 0
                ? { border: "2px solid var(--bama-color)" }
                : null
            }
            onClick={this.NonZeroKilometerHandler}
          >
            کارکرده
          </button>
        </div>
        <div className={styles.KilometerTextBoxWrapper}>
          <input
            className={styles.KilometerTextBox}
            type="number"
            placeholder="کارکرده"
            maxLength="7"
            min={0}
            value={this.state.kilometerNumber}
            onChange={this.changeKilometerTextBoxHandler}
          />
          <span>کیلومتر</span>
          {this.state.selectedTick ? (
            <i className={styles.SelectedTick} />
          ) : null}
        </div>
      </Fragment>
    );
  }
}

export default Kilometer;
