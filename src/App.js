import React, { useEffect } from "react";

import { HashRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import classes from "./App.module.css";

import Navigation from "./components/Nav/Navigation";
import Posts from "./containers/Posts/Posts";
import FullPost from "./containers/FullPost/FullPost";
import FavPosts from "./components/FavPosts/FavPosts";
import FavComments from "./components/FavComments/FavComments";

import { useDispatch } from "react-redux";

import * as actionsCreators from "./store/actionCreators";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionsCreators.FetchData());
    // eslint-disable-next-line
  }, []);


  return (
    <HashRouter basename="/">
      <div className={classes.App}>
        <Navigation></Navigation>
        <main>
          <Switch>
            <Route path={"/posts/:postId"} exact component={FullPost} />

            <Route path="/favoritesposts" component={FavPosts} />
            <Route path="/favoritescomments" component={FavComments} />

            <Route path="/" exact component={Posts} />
          </Switch>
        </main>
      </div>
    </HashRouter>
  );
};

export default App;
