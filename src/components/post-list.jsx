import React from "react";
import "../styles/Post.css";
import PostItem from "./post-item";

const PostList = ({ posts, title, remove }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem
          remove={remove}
          index={index + 1}
          post={post}
          key={post.id}
        ></PostItem>
      ))}
    </div>
  );
};

export default PostList;
