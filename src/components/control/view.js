import React from "react";
import { connect } from "react-redux";

import style from "./control.css";

const Control = ({
  buttonColour,
  disable,
  button,
  published,
  message,
  buttonText,
  title,
  target,
  change,
  press,
  dropdown
}) => {
  const showDropdown = () => {
    if (dropdown == true) {
      return (
        <div>
          <div className={style.label}>Version</div>
          <div className={style.input} style={{ width: "40%" }}>
            <select
              disabled={disable}
              value={target.version}
              className={style.Enter}
              onChange={(e, input) =>
                lockVersion("version", e.target.value, target.name)
              }
            >
              <option value="1.1">1.1</option>
              <option value="1.2">1.2</option>
              <option value="1.3">1.3</option>{" "}
            </select>
          </div>
        </div>
      );
    }
  };

  const showButton = () => {
    if (button) {
      return (
        <div className={style.input}>
          <button
            style={{ backgroundColor: buttonColour }}
            className={style.button}
            onClick={() => press(target)}
          >
            {buttonText}
          </button>
        </div>
      );
    }
  };

  return (
    <div className={style.BkGrd}>
      <span className={style.POD}>
        <span>{title}</span>
        <span style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.5)" }}>
          {message}
        </span>
      </span>
      <div className={style.RECTANGLE} />
      <hr className={style.underline} />
      <div className={style.label}>Full Name</div>
      <div className={style.input}>
        <input
          disabled={disable}
          className={style.Enter}
          defaultValue={target.fullname}
          placeholder="Enter full name"
          onChange={(e, input) => change("fullname", e.target.value)}
        />
      </div>
      <div className={style.label}>Short Name</div>
      <div className={style.input} style={{ width: "40%" }}>
        <input
          disabled={disable}
          className={style.Enter}
          defaultValue={target.name}
          onChange={(e, input) => change("name", e.target.value)}
          type="text"
        />
      </div>
      {showDropdown()}
      <div className={style.label}>Description</div>
      <div className={style.input} style={{ height: "72px" }}>
        <input
          disabled={disable}
          className={style.Enter}
          defaultValue={target.description}
          placeholder="Description"
          onChange={(e, input) => change("description", e.target.value)}
        />
      </div>
      <div className={style.label}>Attachments</div>
      <div className={style.input} style={{ width: "40px" }}>
        <button
          className={style.Enter}
          style={{
            borderRadius: "100%",
            paddingRight: "7px",
            paddingTop: "2px",
            borderLeft: "none"
          }}
        >
          <span className={style.cross}>+</span>
        </button>
      </div>
      <div className={style.label}>Notes</div>
      <div className={style.input} style={{ height: "72px" }}>
        <input
          disabled={disable}
          className={style.Enter}
          defaultValue={target.notes}
          onChange={(e, input) => change("notes", e.target.value)}
          placeholder="Notes"
        />
      </div>
      {showButton()}
    </div>
  );
};

export default Control;
