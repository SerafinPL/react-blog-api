import React from "react";

import { HashRouter } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";

import classes from "./App.module.css";

import Navigation from "./components/Nav/Navigation";
import Posts from "./containers/Posts/Posts";
import FullPost from "./components/FullPost/FullPost";

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
        <div className={classes.App}>
          <Navigation></Navigation>
          <main>
            <Switch>
              <Route path={"/posts/:postId"} exact component={FullPost} />

              {/* <Route path="/favoritesposts" component={FavPosts} /> */}
              {/* <Route path="/favoritescomments" component={FavComments} /> */}
              
              <Route path="/" component={Posts} />
              
            </Switch>
          </main>
        </div>
      </HashRouter>
    </Provider>
  );
};

export default App;
