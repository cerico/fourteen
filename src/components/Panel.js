import React from "react";
import { connect } from "react-redux";
const classNames = require("classnames");
import styles from "./panel.css";
import TopBoxes from "./top";
import Control from "./control";
import Circles from "./circles";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import Footer from "./footer";
import Strip from "./strip";

@DragDropContext(HTML5Backend)
class Panel extends React.Component {
  render() {
    const style = {
      general: {
        display: "flex"
      }
    };
    return (
      <div className={styles.grid} style={style.general}>
        <TopBoxes />
        <Circles />
        <Control />
        <Strip />
        <Footer />
      </div>
    );
  }
}

export default Panel;
