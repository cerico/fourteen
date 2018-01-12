import React from "react";
import { DropTarget, DragSource } from "react-dnd";
import style from "./topboxes.css";
import Box from "./box";
import { connect } from "react-redux";
import { draggingRecord } from "../../state/actions";

const Topboxes = ({ pod, ui, draggingRecord }) => {
  return (
    <div className={style.top}>
      {pod.available.map((box, i) => {
        return <Box ui={ui} dragging={draggingRecord} yes={box} key={i} />;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ui: state.ui,
    pod: state.pod
  };
};

export default connect(mapStateToProps, { draggingRecord })(Topboxes);
