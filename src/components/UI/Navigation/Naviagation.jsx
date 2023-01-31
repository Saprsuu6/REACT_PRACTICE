import React from "react";
import MyButton from "../Button/button";
import { Link} from "react-router-dom";
import classes from "./navigation.module.css"

const MyNavigation = () => {
  return (
    <div className={classes.navbar}>
        <Link to="/posts"><MyButton>Posts</MyButton></Link>
        <Link to="/about"><MyButton>About site</MyButton></Link>
    </div>
  );
};

export default MyNavigation;