import React from "react";
import { DropTarget, DragSource } from "react-dnd";
import style from "./box.css";

const source = {
  beginDrag(props) {
    props.dragging(props.box);
    return {
      id: "l",
      x: "f",
      box: props.box
    };
  },
  endDrag(props){
    if (!props.ui.dragged){
      props.dragging();
    }
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
      <div className={style.box}>{props.box}</div>
    );
  }
  return <div className={style.box}>{props.box}</div>;
};

export default DragSource("card", source, collectDragSource)(Box);
