import React from "react";
import MyButton from "./UI/Button/button";
import "../styles/App.css";

const ChangeTheme = ({ setTheme }) => {
  return (
    <div>
      <MyButton
        style={{
          borderRight: "0px",
          borderTopLeftRadius: "7px",
          borderBottomLeftRadius: "7px",
          borderTopRightRadius: "0",
          borderBottomRightRadius: "0",
        }}
        onClick={() => setTheme("light")}
      >
        Light
      </MyButton>
      <MyButton
        style={{
          borderTopRightRadius: "7px",
          borderBottomRightRadius: "7px",
          borderTopLeftRadius: "0",
          borderBottomLeftRadius: "0",
        }}
        onClick={() => setTheme("dark")}
      >
        Dark
      </MyButton>
    </div>
  );
};

export default ChangeTheme;
