import React, { Component } from "react";
import Sidebar from "./sidebar";
import styles from "./layout.css";
import Header from "./header";

// import { changeSideText } from '../../actions/products';

const classNames = require("classnames");

class Layout extends Component {
  showContent() {
    return (
      <div className={styles.container}>
        <Sidebar sideText="diagnostics" />
        <Header links={this.props.links} />
      </div>
    );
  }

  render() {
    return this.showContent();
  }
}

export default Layout;
