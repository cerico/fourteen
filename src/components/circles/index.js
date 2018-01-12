import React from "react";
import { connect } from "react-redux";
import Box from "./target";
import style from "./circles.css";
import { draggedRecord } from "../../state/actions";
var FaUnlock = require("react-icons/lib/fa/unlock");
var FaLock = require("react-icons/lib/fa/lock");

const Circles = ({ ui, pod, draggedRecord, editing }) => {

  const draggedaRecord = e => {
    draggedRecord(e);
  };
  let styled = { borderColor: ui.circleColour };

  return (
    <div>
      <div className={style.circle} style={styled}>
        <span className={style.P1}>{pod.name}</span>
        <br />
        <span className={style.Draft}>{ui.circleMessage}</span>

        <div style={{ marginTop: "-34px" }}>
          <svg>
            <line
              stroke="black"
              strokeWidth="5"
              x1="110"
              y1="1"
              x2="200"
              y2="1"
              stroke="#d7d7d9"
            />
          </svg>
        </div>
        <div style={{ "marginTop": "-171px", "marginLeft": "135px" }}>
          {ui.locked === true ? <FaLock /> : <FaUnlock />}
        </div>
      </div>
      <Box
        target={ui.targetBorder}
        records={pod.records}
        editing={pod.editing}
        draggedRecord={draggedaRecord}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    pod: state.pod,
    ui: state.ui
  };
};

export default connect(mapStateToProps, { draggedRecord })(Circles);
