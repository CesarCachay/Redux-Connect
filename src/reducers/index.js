import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
  logged: loginReducer,
  counter: counterReducer
});

export default rootReducer;
