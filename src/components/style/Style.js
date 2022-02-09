import React from "react";
import "./styles.css";

export const Style = (props) => {
  return (
    <div class="buttom">
      <a onClick={() => props.type("linear-gradient")}>Lineal</a>
      <a onClick={() => props.type("-webkit-radial-gradient")}>Radial</a>
    </div>
  );
};
