import React from "react";
import { DropTarget, DragSource } from "react-dnd";
import style from "./circles.css";
import draggedRecord from "../../state/actions";

const source = {
  drop(props, monitor, component) {
    const record = monitor.getItem();
    props.draggedRecord(record.box);
  }
};

function connectDragSource(connectDragSource) {
  return {
    connectDropTarget: connectDragSource.dropTarget()
  };
}

const Box = props => {
  const { connectDropTarget, connectDragSource, pod, records, target } = props;

  if (props.records.length > 0) {
    return props.connectDropTarget(
      <div style={target} className={style.box}>
        <div className={style.target}>Record</div><div className={style.target}> {props.records[0].name}</div>
      </div>
    );
  }

  return props.connectDropTarget(
    <div style={target} className={style.box}>
      <div className={style.target} style={{'height': '37px','marginTop': '14px'}}>+</div>
    </div>
  );
};

export default DropTarget("card", source, connectDragSource)(Box);
