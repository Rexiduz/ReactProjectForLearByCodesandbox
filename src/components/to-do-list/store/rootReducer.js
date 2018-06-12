import { combineReducers } from "redux";
import { createStore } from "redux";
import taskReducer from "./task/Reducer";
import loginReducer from "./login/loginReducer";

const rootReducer = combineReducers({
  tasks: taskReducer,
  login: loginReducer
});

export default createStore(rootReducer, {});
