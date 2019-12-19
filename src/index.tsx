import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { TodoApp } from "./components/TodoApp";
import { initializeIcons } from "@uifabric/icons";
import { createStore } from "redux";
import { reducer } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";

import * as serviceWorker from "./serviceWorker";

const store = createStore(reducer, {}, composeWithDevTools());

initializeIcons();
ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
