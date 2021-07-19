import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import ReduxThunk from 'redux-thunk';

import dataReducer from "./store/reducer";

import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware  } from "redux";


const rootReducer = combineReducers({
  blog: dataReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
