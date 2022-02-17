import "./App.css";
import { Direction } from "./components/direction/Direction";
import { Style } from "./components/style/Style";
import { useState } from "react";
import { Colors } from "./components/colors/Colors";

export default function App() {
  const [color1, setColor1] = useState("#dfa0ab");
  const [color2, setColor2] = useState("#ebc9c9");
  const [showColorPicker1, setShowColorPicker1] = useState(false);
  const [showColorPicker2, setShowColorPicker2] = useState(false);
  const [type, setType] = useState("linear-gradient");
  const [direction, setDirection] = useState("to bottom right");

  const togglePaletaColor1 = () => {
    setShowColorPicker1((showColorPicker1) => !showColorPicker1);
  };

  const togglePaletaColor2 = () => {
    setShowColorPicker2((showColorPicker2) => !showColorPicker2);
  };
  const randomColor = () => {
    setColor1("#" + Math.floor(Math.random() * 16777215).toString(16));
    setColor2("#" + Math.floor(Math.random() * 16777215).toString(16));
  };

  return (
    <div className="content">
      <div className="menu">
        <h1 id="name-app">CSS GRADIENT GENERATOR</h1>

        <span class="options">Style</span>
        <span class="">
          <Style type={setType} />
        </span>

        <span className="options">Direction</span>

        <div className="direction">
          <Direction direction={setDirection} type={type} />
        </div>

        <span className="options">Colors</span>

        <Colors
          setColor1={setColor1}
          setColor2={setColor2}
          color1={color1}
          color2={color2}
          toggleColor1={togglePaletaColor1}
          toggleColor2={togglePaletaColor2}
          showColorPicker1={showColorPicker1}
          showColorPicker2={showColorPicker2}
        />
        <div className="container-color">
          <button className="button-random" onClick={randomColor}>
            Random
          </button>
        </div>

        <div className="colors-picked">
          <span style={{ color: `${color1}` }}> Color : {color1}</span>
          <br></br>
          <span style={{ color: `${color2}` }}> Color: {color2}</span>
        </div>
      </div>
      <div
        className="gradient"
        style={{
          background: `${type}(${direction}, ${color1}, ${color2})`,
        }}
      ></div>
    </div>
  );
}
