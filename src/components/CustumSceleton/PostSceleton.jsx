import React from "react";
import Skeleton from "react-loading-skeleton";
import classes from "../CustumSceleton/PostSceleton.module.css";

const PostSceleton = ({ ...props }) => {
  return (
    <div {...props} className={classes.post_sceleton}>
      <Skeleton width={200} style={{ margin: "5px 0px 0px 10px" }}></Skeleton>
      <Skeleton width={600} style={{ margin: "8px 0px 0px 10px" }}></Skeleton>
    </div>
  );
};

export default PostSceleton;
