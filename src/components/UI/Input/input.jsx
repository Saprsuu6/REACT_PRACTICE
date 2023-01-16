import React from "react";
import classes from "./input.module.css";

const MyInput = (props) => {
  return <input {...props} className={classes.myInput} />;
};

export default MyInput;
