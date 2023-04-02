import { combineReducers } from "redux";
import bucketsReducer from "./bucket";

export default combineReducers({
  bucketsData: bucketsReducer,
});
