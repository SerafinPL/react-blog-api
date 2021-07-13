import React from "react";

import classes from "./Post.module.css";

const post = (props) => (
  <article className={classes.Post} onClick={props.clicked}>
    <h1>{props.title}</h1>
  </article>
);

export default post;
