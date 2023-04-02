import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer/rootReducer";

const middleware = [thunk];
const composeEnhancers = window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 25,
    })
  : compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);
