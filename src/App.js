import "./App.css";
import { Direction } from "./components/direction/Direction";
import { Style } from "./components/style/Style";
import { useState } from "react";
import { Colors } from "./components/colors/Colors";

export default function App() {
  const [color1, setColor1] = useState("pink");
  const [color2, setColor2] = useState("white");
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
          <Direction direccion={setDirection} type={type} />
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

        <div className="colors-picked">
          <span style={{ color: `${color1}` }}> You picked : {color1}</span>
          <br></br>
          <span style={{ color: `${color2}` }}> You picked : {color2}</span>
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
