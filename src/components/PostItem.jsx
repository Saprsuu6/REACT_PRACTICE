import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Post.css";
import MyButton from "./UI/Button/button";

const PostItem = (props) => {
  const navigate = useNavigate()

  return (
    <div className="post">
      <div className="post-content">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post-btns">
        <MyButton style={{ borderRight: "none", borderTopRightRadius: '0', borderBottomRightRadius: '0'}} onClick={() => navigate(`/posts/${props.post.id}`)}>Open</MyButton>
        <MyButton style={{ borderTopLeftRadius: '0', borderBottomLeftRadius: '0'}} onClick={() => props.remove(props.post)}>Remove</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
