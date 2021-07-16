import React from "react";

import classes from "./Comment.module.css";

const Comment = (props) => (
  <article className={classes.Comment}>
    <h1>{props.title}</h1>
    <p>{props.body}</p>
    <small>{props.email}</small>
  </article>
);

export default Comment;
