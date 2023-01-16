import React from "react";
import "../styles/Post.css";
import MyButton from "./UI/Button/button";

const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post-content">
        <strong>
          {props.index}. {props.post.title}
        </strong>
        <div>{props.post.description}</div>
      </div>
      <div className="post-btns">
        <MyButton onClick={() => props.remove(props.post)}>Remove</MyButton>
      </div>
    </div>
  );
};

export default PostItem;