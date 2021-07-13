import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";

///import axios from 'axios';

import "./FullPost.css";

const FullPost = (props) => {
    
    const [error, setError] = useState(null);
    const [commentsList, setCommentsList] = useState(null);

    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/posts/${props.match.params.postId}/comments`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => {
              if (res.ok) {
                return res.json();
              } else {
                throw Error(res.statusText);
              }
            })
            .then((res) => {
                            
            })
            .catch((err) => {
                setError(true); 
            });

    },[]);

  const [postItem] = useSelector((state) =>
    state.blog.posts.filter((post) => post.id == props.match.params.postId)
  );

  let post = (
    <p style={{ textAlign: "center" }}>Nie odnaleziono takiego fake posta!</p>
  );

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
