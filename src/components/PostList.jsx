import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../styles/Post.css";
import PostItem from "./PostItem";

const PostList = ({ posts, title, remove }) => {
  //const nodeRef = React.useRef(null);

  //let reversed = posts.reverse()

  if (posts.length === 0) {
    return <h1 style={{ textAlign: "center" }}>Posts were not found</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition
            // nodeRef={nodeRef}
            key={post.id}
            timeout={500}
            classNames="post"
          >
            <PostItem
              remove={remove}
              index={index + 1}
              post={post}
              key={post.id}
            ></PostItem>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
