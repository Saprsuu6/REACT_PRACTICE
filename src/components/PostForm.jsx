import React, { useState } from "react";
import MyButton from "./UI/Button/Button";
import MyInput from "./UI/Input/Input";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", description: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", description: "" });
  };

  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Post name"
      ></MyInput>
      <MyInput
        value={post.description}
        onChange={(e) => setPost({ ...post, description: e.target.value })}
        type="text"
        placeholder="Post description"
      ></MyInput>
      <MyButton onClick={addNewPost}>Create project</MyButton>
    </form>
  );
};

export default PostForm;
