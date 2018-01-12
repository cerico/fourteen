import React from "react";
import { connect } from "react-redux";
import style from "./control.css";
import { changePodName, addRecord } from "../../state/actions";
// import Record from './record'

const Record = ({
  blurb,
  colour,
  message,
  text,
  pod,
  addRecord,
  longmessage
}) => {
  const underline = {
    borderColor: colour
  };

  return (
    <div className={style.BkGrdsmall}>
      <div className={style.POD}>{message}</div>
      <div className={style.RECTANGLE} />
      <hr className={style.underline} style={underline} />
      <div className={style.label}>{blurb}</div>
      <div className={style.input} style={{ height: "72px" }}>
        <input className={style.Enter} placeholder={longmessage} />
      </div>
    </div>
  );
};

export default Record;
