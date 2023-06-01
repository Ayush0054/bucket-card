import { combineReducers } from "redux";
import bucketsReducer from "./bucket";
import cardsReducer from "./card";

export default combineReducers({
  bucketsData: bucketsReducer,
  cardsData: cardsReducer,
});
