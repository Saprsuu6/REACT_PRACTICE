import React from "react";
import "../styles/Post.css";
import MyButton from "./UI/Button/Button";

const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post-content">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post-btns">
        <MyButton onClick={() => props.remove(props.post)}>Remove</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
