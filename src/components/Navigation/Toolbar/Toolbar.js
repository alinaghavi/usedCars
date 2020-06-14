import React from "react";
import Logo from "../../Logo/Logo";

import styles from "./Toolbar.module.css";

import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = (props) => (
  <div className={styles.ToolbarWrapper}>
    <header className={styles.Toolbar}>
      <div className={styles.TopBar}></div>
      <div className={styles.BottomBar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav className={styles.DesktopOnly}>
          <NavigationItems />
        </nav>
      </div>
    </header>
  </div>
);

export default toolbar;
