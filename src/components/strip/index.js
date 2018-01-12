import React from "react";
import { connect } from "react-redux";
import style from "./strip.css";
import { publish } from "../../state/actions";

const Strip = ({ ui }) => {
  return (
    <div className={style.Strip}>
      <span>{ui.strip}</span>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ui: state.ui
  };
};

export default connect(mapStateToProps, { publish })(Strip);
