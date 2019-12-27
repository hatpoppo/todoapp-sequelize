import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { TodoApp } from "./components/TodoApp";
import { initializeIcons } from "@uifabric/icons";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { Store, FilterTypes } from "./store";
import * as service from "./service";

import * as serviceWorker from "./serviceWorker";

(async () => {
  const preloadStore: Store = {
    todos: (await service.getAll()) as Store["todos"],
    filter: "all" as FilterTypes
  };

  const store = createStore(reducer, preloadStore, composeWithDevTools(applyMiddleware(thunk)));

  initializeIcons();
  ReactDOM.render(
    <Provider store={store}>
      <TodoApp />
    </Provider>,
    document.getElementById("root")
  );
})();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
