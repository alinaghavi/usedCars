import React from "react";

import styles from "./UsedCarsSelectBox.module.css";

const UsedCarsSelectBox = (props) => {
  let selectBoxOptions = props.options.map((option) => {
    return (
      <option key={option.value} value={option.value}>
        {option.key}
      </option>
    );
  });

  const SelectedTick = props.currentValue != 0;
  if (props.isHidable && props.options.length === 1) {
    return null;
  } else
    return (
      <div className={styles.SelectBoxWrapper}>
        <select
          onChange={(event) => props.changed(event)}
          value={props.currentValue}
          disabled={props.isDisabled}
        >
          {selectBoxOptions}
        </select>
        {SelectedTick ? <i className={styles.SelectedTick} /> : null}
      </div>
    );
};

export default UsedCarsSelectBox;
