import React, { useEffect } from "react";

import Post from "../../components/Post/Post";

import { useSelector, useDispatch } from "react-redux";

import * as actionTypes from "../../store/actionTypes";

import "./Posts.css";
import { Link, Route } from "react-router-dom";

import FullPost from '../../components/FullPost/FullPost';

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
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error(res.statusText);
        }
      })
      .then((res) => {
        dispatch({
          type: actionTypes.STORE_RESULT,
          result: res, //upDatedResult
          error: false,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: actionTypes.STORE_RESULT,
          result: err, //upDatedResult
          error: true,
        });
      });
  }, []);

  const List = useSelector((state) => state.blog.posts);
  const RedError = useSelector((state) => state.blog.error);
  const RedLoad = useSelector((state) => state.blog.load);

  const postSelectedHandler = (id) => {
    props.history.push("/posts/" + id);
  };

  let posts = <p style={{ textAlign: "center" }}>Ładowanie postów</p>;

  if (RedError) {
    posts = (
      <p style={{ textAlign: "center" }}>Coś jest nie tak pojawił się ERROR</p>
    );
  }

  if (!RedError && RedLoad) {
    posts = List.map((post) => {
      return (
        <Post
          key={post.id}
          title={post.title}
          clicked={() => postSelectedHandler(post.id)}
        />
      );
    });
  }

  return (
    <div>
      {/* <Route path={props.match.url + "/posts/:postId"} exact component={FullPost} /> */}
      <section className="Posts">{posts}</section>
      
    </div>
  );
};

export default Posts;
