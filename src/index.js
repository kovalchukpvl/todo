import React from "react";
import ReactDOM from "react-dom";

import { reducer } from "./reducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

import "./index.sass";
import App from "./App";
import reportWebVitals from "./reportWebVitals";


const state = createStore(reducer);

ReactDOM.render(
  <Provider store={state}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
