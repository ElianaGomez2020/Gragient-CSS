import React from "react";
import { SketchPicker } from "react-color";
import "./styles.css";

export const Colors = (props) => {
  return (
    <div className="section-colors">
      <button class="button-colors" onClick={props.toggleColor1}>
        {props.showColorPicker1 ? " Close " : " Pick colors"}
      </button>

      {props.showColorPicker1 && (
        <SketchPicker
          color={props.color1}
          onChange={(updatedColor) => props.color1(updatedColor.hex)}
        />
      )}

      <button className=" button-colors" onClick={props.toggleColor2}>
        {props.showColorPicker2 ? " Close " : " Pick colors"}
      </button>

      {props.showColorPicker2 && (
        <SketchPicker
          color={props.color2}
          onChange={(updatedColor) => props.color2(updatedColor.hex)}
        />
      )}
    </div>
  );
};
