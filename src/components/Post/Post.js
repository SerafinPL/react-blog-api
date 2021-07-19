import React from "react";

import classes from "./Post.module.css";

const post = (props) => {
  const cursorOn = () => {

  };

  const cursorOff = () => {

  };

  return (
    <article
      className={`${classes.Post} ${classes.move} move`}
      onClick={props.clicked}
    
      
    >
      <h1>{props.title}</h1>
    </article>
  );
};

export default post;
