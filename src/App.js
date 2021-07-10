import React from "react";

import { HashRouter } from "react-router-dom";
import { Route } from 'react-router-dom';

import "./App.css";

import Navigation from "./components/Nav/Navigation";

const App = () => {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Navigation></Navigation>
        <main>
          <Route path="/" component={Posts} exact />
          <Route path="/favoritesposts" component={FavPosts} />
          <Route path="/favoritescomments" component={FavComments}/>

        </main>
      </div>
    </HashRouter>
  );
};

export default App;
