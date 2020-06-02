import React, { Fragment } from "react";

import styles from "./RegisterSelectBox.module.css";

const RegisterSelectBox = (props) => {
  let selectBoxOptions = props.options.map((option) => {
    return (
      <option key={option.value} value={option.value}>
        {option.key}
      </option>
    );
  });
  const SelectedTick = props.currentValue > 0;
  return (
    <Fragment>
      <div className={styles.SelectBoxWrapper}>
        <select
          onChange={(event) => props.changed(event)}
          value={props.currentValue}
        >
          {selectBoxOptions}
        </select>
        {SelectedTick ? <i className={styles.SelectedTick} /> : null}
      </div>
    </Fragment>
  );
};

export default RegisterSelectBox;
