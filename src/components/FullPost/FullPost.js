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
        console.log(res);
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
    comments = commentsList.map((comment) =>{
        return(
            <div key={comment.id}>
                <h3>{comment.name}</h3>
                <p>{comment.body}</p>
                <small>{comment.email}</small>
        </div>
        )
    });
  }

  if (postItem) {
    post = (
      <React.Fragment>
        <div className={classes.FullPost}>
          <h1>{postItem.title}</h1>
          <p>{postItem.body}</p>
          <button>Add to Favorites</button>
        </div>
        <div className={classes.FullPost}>
            <h1>Comment List</h1>
          {commentsList ? comments : 'Comments are loading...'}
        </div>
      </React.Fragment>
    );
  }
  return post;
};

export default FullPost;
