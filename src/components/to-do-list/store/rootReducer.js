import { combineReducers } from "redux";
import { createStore } from "redux";
import taskReducer from "./task/Reducer";

const rootReducer = combineReducers({
  tasks: taskReducer
});

export default createStore(rootReducer, {});
