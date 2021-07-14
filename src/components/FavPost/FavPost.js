import React from "react";

import Post from "../../components/Post/Post";

import { useSelector } from "react-redux";



import classes from "./FavPosts.module.css";

const FavPosts = (props) => {
  const List = useSelector((state) => state.blog.posts.filter(post => post.fav));

  const postSelectedHandler = (id) => {
    props.history.push("/posts/" + id);
  };

  const favPosts = List.map((post) => {
    return (
      <Post
        key={post.id}
        title={post.title}
        clicked={() => postSelectedHandler(post.id)}
      />
    );
  });

  return (
    <div>
      <section className={classes.FavPosts}>{favPosts}</section>
    </div>
  );
};

export default FavPosts;
