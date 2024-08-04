import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./keep/reducer/index.js";
import Keep from "./keep/Keep";

const store = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Keep />
    </Provider>
  </React.StrictMode>
);
