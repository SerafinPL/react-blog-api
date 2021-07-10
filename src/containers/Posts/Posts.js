import React, { useEffect } from "react";

import Post from "../../components/Post/Post"

import { useSelector, useDispatch } from 'react-redux';



import "./Posts.css";
import { Link, Route } from "react-router-dom";



const Posts = (props) => {
  
  
  
    const dispatch = useDispatch();

    

  useEffect(() => {
    console.log(props);
    dispatch({type: 'GET_POST'});
    

  }, []);

  const productList = useSelector(state => state.blog.posts);

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
      <section className="Posts">{posts}{productList}</section>
    </div>
  );
};



export default Posts;
