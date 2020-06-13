import React from "react";

import usedCarsLogo from "../../assets/img/share/logo.png";
import styles from "./Logo.module.css";

const logo = (props) => (
  <div className={styles.Logo}>
    <img src={usedCarsLogo} alt="Irtoya Used Cars" />
  </div>
);

export default logo;
