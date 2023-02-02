import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import { useFetching } from "../Hooks/useFetching";
import PostSceleton from "../CustumSceleton/PostSceleton";

const PostIdPage = () => {
  const params = useParams();

  const [post, setPost] = useState();

  const [fetchPost, isPostsLoading, postError] = useFetching(async () => {
    let data = await PostService.GetCurrentById(params.id).then((data) => {
      return data;
    });

    console.log(data); // remove and show on screen
    setPost(data);
  });

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div>
      <h1>Some post</h1>
      <div>
        {postError && (
          <h1 style={{ textAlign: "center" }}>Error... {postError}</h1>
        )}
        {isPostsLoading ? (
          <PostSceleton style={{ margin: "10px 0px 10px 0px" }}></PostSceleton>
        ) : (
          <h1>Post</h1>
        )}
      </div>
    </div>
  );
};

export default PostIdPage;
