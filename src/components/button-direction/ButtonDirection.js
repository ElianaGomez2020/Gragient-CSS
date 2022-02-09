import React from "react";
import "./styles.css";

export const ButtonDirection = (props) => {
  return (
    <button className="grid-item" onClick={() => props.function(props.move)}>
      {props.children}
    </button>
  );
};
