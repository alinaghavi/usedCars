import React, { Component } from "react";

import Auxiliary from "../../../hoc/Auxillary/Auxillary";
import Backdrop from "../Backdrop/Backdrop";

import styles from "./Modal.module.css";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState, Context) {
    return nextProps.show !== this.props.show;
  }

  render() {
    return (
      <Auxiliary>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={styles.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </Auxiliary>
    );
  }
}

export default Modal;
