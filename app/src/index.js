import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer/reducer";
import { Provider } from "react-redux";
import Quote from "./components/Quote";
import "./index.css";

const logger = ({ getState }) => (next) => (action) => {
  console.log("Dispatching action:", action);
  next(action);
};

let store = createStore(reducer, applyMiddleware(logger, thunk));

function App() {
  return (
    <div className="App">
      <h1>Programming Quotes</h1>
      <Quote />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
