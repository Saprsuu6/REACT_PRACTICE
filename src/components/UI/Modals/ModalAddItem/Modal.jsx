import React from "react";
import classes from "./modal.module.css";

const MyModal = ({ children, visible, setVisible }) => {
  const rootClasses = [classes.myModal];

  if (visible === true) {
    rootClasses.push(classes.active);
  }

  return (
    <div className={rootClasses.join(" ")}>
      <div className={classes.myModalContent}>
        <div className={classes.myModalMenu}>
          <div
            onClick={() => setVisible(false)}
            className={classes.myModalClose}
          ></div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default MyModal;
