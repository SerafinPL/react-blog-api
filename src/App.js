import React from "react";

import { HashRouter } from "react-router-dom";
import { Route } from "react-router-dom";

import "./App.css";

import Navigation from "./components/Nav/Navigation";
import Posts from "./containers/Posts/Posts";

import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";



import dataReducer from "./store/reducer";

const rootReducer = combineReducers({
  blog: dataReducer,
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <HashRouter basename="/">
        <div className="App">
          <Navigation></Navigation>
          <main>
            <Route path="/" component={Posts} exact />
            {/* <Route path="/favoritesposts" component={FavPosts} /> */}
            {/* <Route path="/favoritescomments" component={FavComments} /> */}
          </main>
        </div>
      </HashRouter>
    </Provider>
  );
};

export default App;
