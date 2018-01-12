import React from "react";
import { connect } from "react-redux";
import style from "./footer.css";
import { publish, save, published } from "../../state/actions";

const Footer = ({ pod, ui, save, publish, published }) => {
  const colouring = {
    backgroundColor: ui.colour,
    textAlign: ui.align
  };

  const saveButton = () => {
    if (ui.dragged && ui.saved === " is currently not saved") {
      return (
        <button className={style.button} onClick={() => save(pod)}>
          Save Record
        </button>
      );
    }
  };

  const publishButton = () => {
    if (ui.saved === " is currently saved") {
      return (
        <button
          className={style.button}
          onClick={() => publish(pod) && published(pod)}
        >
          Publish
        </button>
      );
    }
  };
  return (
    <div className={style.footer} style={colouring}>
      <span>
        Pod {pod.name} {ui.saved}
      </span>

      <div className={style.input}>
        {saveButton()}
        {publishButton()}
      </div>
      <div className={style.input} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    pod: state.pod,
    ui: state.ui
  };
};

export default connect(mapStateToProps, { publish, save, published })(Footer);
