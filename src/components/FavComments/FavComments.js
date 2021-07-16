import React from "react";

import Comment from "../Comment/Comment";

import { useSelector } from "react-redux";

import classes from "./FavComments.module.css";

const FavComments = (props) => {
  const List = useSelector((state) => state.blog.commentsFav);

  let noContent = false;

  if (List.length === 0 ) {
    noContent = true;
  }

  const favComments = List.map((comment) => {
    return (
      <Comment
        key={comment.id}
        title={comment.name}
        body={comment.body}
        email={comment.email}
        
      />
    );
  });

  return (
    <div>
      <section className={classes.FavComments}>{favComments}</section>
      <h1>{noContent && 'No Favorites yet...'}</h1>
    </div>
  );
};

export default FavComments;