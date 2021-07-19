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

  const buggiCursor = (event) => {
    const elements = document.getElementsByClassName("move");

    const arrayOfElements = Object.values(elements);

    arrayOfElements.forEach((element, index) => {
      const centerLeft = element.offsetLeft + element.clientWidth / 2;
      const centerTop = element.offsetTop + element.clientHeight / 2;

      const trueOffsetX = event.clientX + window.scrollX;
      const trueOffsetY = event.clientY + window.scrollY;

      const azimuthX = parseInt((trueOffsetX - centerLeft) / 18);
      const azimuthY = parseInt((centerTop - trueOffsetY) / 9);

      element.style.transform = ` rotateY(${azimuthX}deg) rotateX(${azimuthY}deg)`;
    });
  };

  return (
    <HashRouter basename="/">
      <div className={classes.App} onMouseMove={(event) => buggiCursor(event)}>
        <Navigation></Navigation>
        <main>
          <Switch>
            <Route path={"/posts/:postId"} exact component={FullPost} />

            <Route path="/favoritesposts" component={FavPosts} />
            <Route path="/favoritescomments" component={FavComments} />

            <Route path="/" component={Posts} />
          </Switch>
        </main>
      </div>
    </HashRouter>
  );
};

export default App;
