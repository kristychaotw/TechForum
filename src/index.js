import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import questionsSlice from "./reducers/questionsSlice";
import tagsSlice from "./reducers/tagsSlice";

const store = configureStore({
  reducer: {
    questions: questionsSlice,
    tags: tagsSlice,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("app")
);
