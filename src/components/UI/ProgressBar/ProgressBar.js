import React from "react";

import styles from "./ProgressBar.module.css";

const progressBar = (props) => {
  return (
    <div className={styles.NewAdProgress}>
      <h2>{props.title}</h2>
      <div className={styles.NewAdProgressBack}>
        <div
          className={styles.NewAdProgressbar}
          style={{ width: `${props.currentValue}%` }}
        />
      </div>
    </div>
  );
};

export default progressBar;
