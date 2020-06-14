import React, { Fragment } from "react";

import styles from "./Kilometer.module.css";

const kilometer = (props) => (
  <Fragment>
    <div className={styles.BtnWrapper}>
      <button
        className={styles.KilometerBTN}
        style={
          props.kilometerNumber === 0
            ? { border: "2px solid var(--bama-color)" }
            : null
        }
        onClick={props.zeroKilometer}
      >
        صفر
      </button>
      <button
        className={styles.KilometerBTN}
        style={
          props.kilometerNumber !== 0
            ? { border: "2px solid var(--bama-color)" }
            : null
        }
        onClick={props.nonZeroKilometer}
      >
        کارکرده
      </button>
    </div>
    <div className={styles.KilometerTextBoxWrapper}>
      <input
        className={styles.KilometerTextBox}
        type="tel"
        placeholder="کارکرده"
        min={0}
        maxLength={7}
        value={props.kilometerNumber}
        onChange={props.changeKilometer}
      />
      <span>کیلومتر</span>
      {props.selectedTick ? <i className={styles.SelectedTick} /> : null}
    </div>
  </Fragment>
);

export default kilometer;
