import { combineReducers } from "redux";

import pod from "./pod";
import ui from "./ui";

export default combineReducers({
  pod,
  ui
});
