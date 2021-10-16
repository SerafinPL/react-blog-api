import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import * as actionTypes from "../../store/actionTypes";

import classes from "./FullPost.module.css";

const FullPost = (props) => {
  const [error, setError] = useState(null);
  const [commentsList, setCommentsList] = useState(null);

  const dispatch = useDispatch();

  const [postItem] = useSelector((state) =>
    state.blog.posts.filter((post) => post.id === props.match.params.postId)
  );

  const favComments = useSelector((state) =>
    state.blog.commentsFav
  );
  

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${props.match.params.postId}/comments`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error(res.statusText);
        }
      })
      .then((res) => {
        setCommentsList(res);
      })
      .catch((err) => {
        setError(true);
      });
      // eslint-disable-next-line
  }, []);

  const favPostClick = () => {
    dispatch({
      type: actionTypes.TOGGLE_FAV,
      id: postItem.id,
    });
  };

  const favCommentClick = (comment) => {
    dispatch({
      type: actionTypes.TOGGLE_COMMENT_TO_FAV,
      comment: comment,
    });
  };

  let post = <Redirect to='/'/>;

 

  let comments = [];
  if (commentsList) {
    comments = commentsList.map((comment) => {

      const isFav = favComments.findIndex(fav => fav.id === comment.id) > -1

      return (
        <div key={comment.id} className={classes.FullPost}>
          <h3>{comment.name}</h3>
          <p>{comment.body}</p>
          <small>{comment.email}</small>
          <button  className={isFav ? classes.Fav : classes.NoFav} onClick={() => favCommentClick(comment)}>
          {isFav ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      );
    });
  }

  if (postItem) {
    post = (
      <React.Fragment>
        <div className={classes.FullPost}>
          <h1>{postItem.title}</h1>
          <p>{postItem.body}</p>
          <button className={postItem.fav ? classes.Fav : classes.NoFav} onClick={favPostClick}>
            {postItem.fav ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
        <div className={classes.CommentArea}>
          <h2>Comment List</h2>
          {error
            ? "Comments are not loaded..."
            : commentsList
              ? comments
              : "Comments are loading..."}
        </div>
      </React.Fragment>
    );
  }
  return post;
};

export default FullPost;
