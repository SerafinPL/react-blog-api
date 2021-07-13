import React from "react";

import { withRouter } from "react-router-dom";

import "./Post.css";

const post = (props) => (
  <article className="Post" onClick={props.clicked}>
    <h1>{props.title}</h1>
  </article>
);

export default withRouter(post); // HOC który dodaje props od router
