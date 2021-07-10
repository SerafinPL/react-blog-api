import React, { useEffect } from "react";

import Post from "../../components/Post/Post";

import { useSelector, useDispatch } from "react-redux";


import * as actionTypes from "../../store/actionTypes";

import "./Posts.css";
import { Link, Route } from "react-router-dom";

const Posts = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(props);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        dispatch({
          type: actionTypes.STORE_RESULT,
          result: res, //upDatedResult
          error: false,
        });
      });
  }, []);

  const List = useSelector((state) => state.blog.posts);
  console.log(List);

  const postSelectedHandler = (id) => {
    props.history.push("/posts/" + id);
  };

  let posts = <p style={{ textAlign: "center" }}>Ładowanie postów</p>;

  if (props.RedError) {
    posts = (
      <p style={{ textAlign: "center" }}>Coś jest nie tak pojawił się ERROR</p>
    );
  }

  if (!props.RedError && props.RedLoad) {
    posts = props.RedPost.map((post) => {
      return (
        <Post
          key={post.id}
          title={post.title}
          //   author={post.author}
          clicked={() => postSelectedHandler(post.id)}
        />
      );
    });
  }

  return (
    <div>
      {/* <Route path={props.match.url + "/:postId"} exact component={FullPost} /> */}
      <section className="Posts">{posts}</section>
      {/* <section className="Posts">{List}</section> */}
    </div>
  );
};

export default Posts;
