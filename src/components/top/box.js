import React from "react";
import { DropTarget, DragSource } from "react-dnd";
import style from "./box.css";

const source = {
  beginDrag(props) {
    props.dragging();
    return {
      id: "l",
      x: "f",
      yes: props.yes
    };
  }
};

function collectDragSource(connectDragSource, monitor) {
  return {
    connectDragSource: connectDragSource.dragSource()
  };
}

const Box = props => {
  const { connectDropTarget, connectDragSource, pod } = props;
  if (!props.ui.dragged) {
    return props.connectDragSource(
      <div className={style.box}>{props.yes}</div>
    );
  }
  return <div className={style.box}>{props.yes}</div>;
};

export default DragSource("card", source, collectDragSource)(Box);
