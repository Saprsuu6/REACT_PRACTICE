import React from "react";
import MyButton from "../Button/button";
import { Link } from "react-router-dom";
import classes from "./navigation.module.css";
import ChangeTheme from "../../TopMenu";
import { useTheme } from "../../Hooks/useTheme";

const MyNavigation = () => {
  const [setTheme] = useTheme(); // використання кастомого хуку

  return (
    <div className={classes.navbar}>
      <div>
        <Link to="/posts">
          <MyButton>Posts</MyButton>
        </Link>
        <Link to="/about">
          <MyButton>About site</MyButton>
        </Link>
      </div>
      <ChangeTheme setTheme={setTheme}></ChangeTheme>
    </div>
  );
};

export default MyNavigation;
