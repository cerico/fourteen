const uiState = {
  circleMessage: "Draft",
  targetBorder: { border: "1px solid grey" },
  circleColour: "#46c6d1",
  buttonColour: "#46c6d1",
  buttonText: "Add Record",
  disable: false,
  button: true,
  lm: "Draft",
  message: "",
  dragging: false,
  locked: false,
  saved: " is currently not saved",
  lockMessage: ""
};

export default (state = uiState, action) => {
  switch (action.type) {
    case "DRAGGING":
      return Object.assign({}, state, {
        dragMessage: "dragging",
        dragging: true,
        circleColour: "grey",
        strip: "dragging",
        targetBorder: { border: "1px solid #46c6d1" }
      });
    case "DRAGGED":
      return Object.assign({}, state, {
        dragMmessage: "dragged",
        lm: "Unlocked",
        dragging: false,
        dragged: true,
        button: false,
        recordView: true,
        circleColour: "grey",
        targetBorder: { border: "5px solid #46c6d1" },
        buttonText: "Save Record",
        strip: `Record ${action.pod} successfully linked`
      });
    case "LOCKED":
      return Object.assign({}, state, {
        dragMessage: "",
        lm: "Locked",
        lockMessage: "Locked",
        dragging: false,
        strip: ""
      });
    case "SAVED":
      return Object.assign({}, state, {
        dragMessage: "",
        locked: true,
        lm: "Locked",
        circleColour: "#46c6d1",
        targetBorder: { border: "1px solid grey" },
        lockMessage: "Locked",
        saved: " is currently saved",
        button: false,
        strip: ""
      });
    case "PUBLISHED":
      return Object.assign({}, state, {
        dragMessage: "",
        dragging: false,
        dragged: true,
        publishing: false,
        published: true,
        button: true,
        colour: "#4f9eaa",
        align: "center",
        lm: "Published",
        recordView: false,
        circleMessage: "Published",
        circleColour: "#46c6d1",
        buttonText: "Edit Record",
        saved: " is published",
        disable: true,
        buttonColour: "red"
      });
    case "PUBLISHING":
      return Object.assign({}, state, {
        dragMessage: "",
        dragging: false,
        publishing: true,
        circleColour: "#ff8d1e",
        circleMessage: "Publishing",
        colour: "#ff8d1e",
        align: "center",
        saved: " is publishing 25%"
      });
    default:
      return state;
  }
};
