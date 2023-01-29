import React from "react";
import PostSceleton from "./CustumSceleton/PostSceleton";
import PostList from "./PostList";

const PreListLoading = ({
  isPostsLoading,
  error,
  removePost,
  sortedAndSearchedPosts,
}) => {
  return (
    <div>
      {error && <h1 style={{ textAlign: "center" }}>Error... {error}</h1>}
      {isPostsLoading ? (
        Array(10)
          .fill(0)
          .map((_, i) => (
            <PostSceleton
              style={{ margin: "10px 0px 10px 0px" }}
              key={i}
            ></PostSceleton>
          ))
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title={"Posts"}
        ></PostList>
      )}
    </div>
  );
};

export default PreListLoading;
