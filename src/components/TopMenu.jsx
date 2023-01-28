import React from "react";
import MyButton from "./UI/Button/Button";
import "../styles/App.css";

const ChangeTheme = ({ setModal, setTheme }) => {
  return (
    <div className="menu">
      <MyButton onClick={() => setModal(true)}>Add new project</MyButton>
      <div className="theme">
        <MyButton
          style={{
            borderRight: "0px",
            borderTopLeftRadius: "7px",
            borderBottomLeftRadius: "7px",
          }}
          onClick={() => setTheme("light")}
        >
          Light
        </MyButton>
        <MyButton
          style={{
            borderTopRightRadius: "7px",
            borderBottomRightRadius: "7px",
          }}
          onClick={() => setTheme("dark")}
        >
          Dark
        </MyButton>
      </div>
    </div>
  );
};

export default ChangeTheme;
