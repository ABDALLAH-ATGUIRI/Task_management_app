import { combineReducers } from "redux";

import taskReducer from "./taskReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
  tasks: taskReducer,
  filters: filterReducer
});

export default rootReducer;
