import React from "react";

import styles from "./NavigationItems.module.css";

import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = (props) => (
  <ul className={styles.NavigationItems}>
    <NavigationItem link="/">
      خرید خودرو
    </NavigationItem>
    <NavigationItem link="/" active>فروش خودرو</NavigationItem>
    <NavigationItem link="/">سفارش خودرو</NavigationItem>
    <NavigationItem link="/">تماس با ما</NavigationItem>
    <NavigationItem link="/">درباره ما</NavigationItem>
  </ul>
);

export default NavigationItems;
