import React, { useEffect } from "react";

import { useSelector } from "react-redux";

///import axios from 'axios';

import "./FullPost.css";

const FullPost = (props) => {
  

  const [postItem] = useSelector((state) =>
    state.blog.posts.filter((post) => post.id == props.match.params.postId)
  );

  const List = useSelector((state) => state.blog.posts);

  let post = (
    <p style={{ textAlign: "center" }}>Nie odnaleziono takiego fake posta!</p>
  );

  if (props.match.params.postId) {
    post = (
      <p style={{ textAlign: "center" }}>
        Ładowanie... {props.match.params.postId}
      </p>
    );
  }

  if (postItem) {
    post = (
      <div className="FullPost">
        <h1>{postItem.title}</h1>
        <p>{postItem.body}</p>
      </div>
    );
  }
  return post;
};

export default FullPost;
