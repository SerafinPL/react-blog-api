import React from "react";

import Post from "../../components/Post/Post";

import { useSelector, useDispatch } from "react-redux";

import * as actionsCreators from "../../store/actionCreators";

import classes from "./Posts.module.css";

const Posts = (props) => {
  const List = useSelector((state) => state.blog.posts);
  const RedError = useSelector((state) => state.blog.error);
  const RedLoad = useSelector((state) => state.blog.load);

  const postSelectedHandler = (id) => {
    props.history.push("/posts/" + id);
  };

  let posts = <p style={{ textAlign: "center" }}>Post are downloading pleace wait...</p>;

  if (RedError) {
    posts = (
      <p style={{ textAlign: "center" }}>something is wrong we had an Error</p>
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
      <section className={classes.Posts}>{posts}</section>
    </div>
  );
};

export default Posts;
