import React from "react";

import { HashRouter } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <HashRouter basename='/'>
      <div className="App"></div>
    </HashRouter>
  );
};

export default App;
