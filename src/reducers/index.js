import { combineReducers } from "redux";

import taskReducer from "./taskReducer.js";
import filterReducer from "./filterReducer.js";

const rootReducer = combineReducers({
  tasks: taskReducer,
  filters: filterReducer
});

export default rootReducer;
