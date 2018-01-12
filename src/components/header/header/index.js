import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./header.css";

const classNames = require("classnames");

const Header = ({ links }) => {
  return (
    <header className={styles.HeaderBKGRD}>
      <div className={styles.Ellipse2977}>
        <span className={styles.L}>L</span>
        <span className={styles.OGO}>OGO</span>
      </div>
      <div className={styles.links}>
        <div className={styles.Home}>Home</div>
        <div className={styles.Test}>Test</div>
        <div className={styles.Ellipse1} />
      </div>
    </header>
  );
};

export default Header;
