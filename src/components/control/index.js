import React from "react";
import { connect } from "react-redux";
import View from "./view";
import Info from "./info";
import {
  changePodName,
  lockVersion,
  draggingRecord
} from "../../state/actions";

const mapStateToProps = state => {
  return {
    pod: state.pod,
    ui: state.ui
  };
};

@connect(mapStateToProps, { changePodName, lockVersion, draggingRecord })
class Control extends React.Component {
  constructor() {
    super();
    this.changeView = this.changeView.bind(this);
  }

  changeView(e) {
    this.props.draggingRecord();
  }

  render() {
    if (this.props.ui.dragging) {
      return (
        <Info
          blurb="how to use"
          message="Record"
          colour="#4f9eaa"
          longmessage="Drag record to square!"
        />
      );
    }

    if (this.props.ui.publishing) {
      return (
        <Info
          blurb="running"
          message="publishing"
          colour="orange"
          longmessage="we are publishing"
        />
      );
    }
    if (this.props.ui.recordView) {
      return (
        <View
          target={this.props.pod.record}
          dropdown={true}
          title="Record"
          buttonText={this.props.ui.buttonText}
          change={this.props.lockVersion}
          status={this}
          disable={this.props.ui.locked}
          message={` - (${this.props.ui.lm})`}
        />
      );
    }
    return (
      <View
        target={this.props.pod}
        dropdown={false}
        title="Pod"
        buttonColour={this.props.ui.buttonColour}
        disable={this.props.ui.locked}
        button={this.props.ui.button}
        published={this.props.ui.published}
        buttonText={this.props.ui.buttonText}
        change={this.props.changePodName}
        message={` - (${this.props.ui.lm})`}
        press={this.changeView}
      />
    );
    // }
  }
}

export default Control;
