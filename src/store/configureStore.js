import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/reducers.js";
// eslint-disable-next-line import/no-anonymous-default-export
export default (initialState) => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
};
