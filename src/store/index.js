import { createStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/index.js";

const store = createStore(rootReducer);

export default store;
