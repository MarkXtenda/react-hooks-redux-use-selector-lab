import React from "react";
import ReactDOM from "react-dom";
import { legacy_createStore } from "redux";
import App from "./App";
import usersReducer from "./features/users/usersSlice";
import { Provider } from "react-redux";

// add imports and code
const store = legacy_createStore(
  usersReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  // add imports and code
  <Provider store = {store}>
  <App />
  </Provider>,
  // add imports and code
  document.getElementById("root")
);
