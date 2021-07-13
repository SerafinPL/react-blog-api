import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";

///import axios from 'axios';

import classes from "./FullPost.module.css";

const FullPost = (props) => {
  const [error, setError] = useState(null);
  const [commentsList, setCommentsList] = useState(null);

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
  }, []);

  const [postItem] = useSelector((state) =>
    state.blog.posts.filter((post) => post.id == props.match.params.postId)
  );

  let post = (
    <p style={{ textAlign: "center" }}>Nie odnaleziono takiego fake posta!</p>
  );
  let comments = [];
  if (commentsList) {
    comments = commentsList.map((comment) => {
      return (
        <div key={comment.id} className={classes.FullPost}>
          <h3>{comment.name}</h3>
          <p>{comment.body}</p>
          <small>{comment.email}</small>
          <button onClick>{postItem.fav ? 'Remove from Favorites' : 'Add to Favorites'}</button>
        </div>
      );
    });
  }

  console.log(postItem)

  if (postItem) {
    post = (
      <React.Fragment>
        <div className={classes.FullPost}>
          <h1>{postItem.title}</h1>
          <p>{postItem.body}</p>
          <button>Add to Favorites</button>
        </div>
        <div className={classes.FullPost}>
          <h2>Comment List</h2>
          {error ? "Comments are not loaded..." : 
          commentsList ? comments : "Comments are loading..."}
        </div>
      </React.Fragment>
    );
  }
  return post;
};

export default FullPost;
