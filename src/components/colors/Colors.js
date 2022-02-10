import React from "react";
import { SketchPicker } from "react-color";
import "./styles.css";

export const Colors = (props) => {
  return (
    <div className="section-colors">
      <button class="button-colors" style={{backgroundColor:`${props.color1}`}}
       onClick={props.toggleColor1}>
          {props.showColorPicker1 && (
            'OK'
        )}
      </button>

      {props.showColorPicker1 && (
        <SketchPicker
          color={props.color1}
          onChange={(updatedColor) => props.setColor1(updatedColor.hex)}
        />
      )}

      <button className=" button-colors" style={{backgroundColor:`${props.color2}`}}
        onClick={props.toggleColor2}>
          {props.showColorPicker2 && (
            'OK'
        )}
      </button>

      {props.showColorPicker2 && (
        <SketchPicker
          color={props.color2}
          onChange={(updatedColor) => props.setColor2(updatedColor.hex)}
        />
      )}
    </div>
  );
};
