import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import { useFetching } from "../Hooks/useFetching";

const PostIdPage = () => {
    const params = useParams()

    const [post, setPost] = useState();

    const [fetchPost, isPostsLoading, postError] = useFetching(async () => {
        let data = await PostService.GetCurrentById(params.id).then(
            (data) => {
            return data;
          }
        );
    
        console.log(data)
        setPost(data);
      });

    useEffect(() => {
       fetchPost();
    }, []);

  return (<div>
    <h1>Some post</h1>
  </div>);
};

export default PostIdPage;
