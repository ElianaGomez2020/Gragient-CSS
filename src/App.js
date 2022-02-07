import './App.css';
import { ChromePicker } from 'react-color';

import { useState } from "react";
import { red } from 'react-color/lib/helpers/color';

export default function App() {
  const [color1, setColor1] = useState('#FFF');
  const [color2, setColor2] = useState('#FFF');
  const [showColorPicker, setShowColorPicker] = useState(false)
  const [direction, setDirection] = useState('to bottom right');

  return (
     <div
      style={{
        width: "100vw",
        height: "100vh",
        border: "5px orange solid",
        display:"flex"
      }}
      >
        <div class='menu'>
            <h1 id='name-app'>CSS GRADIENT GENERATOR</h1>

            <span class='options'>Style</span>

            <span class='buttom'>
              <a>Lineal</a>
              <a>Radial</a>
            </span>
            
            <span class='options'>Direction</span>

            <div class='buttoms'>
              <span class='buttom'>
                <a onClick={() => {setDirection('to top left')}}>
                  <svg width='10' height='10' xmlns="http://www.w3.org/2000/svg">
                    <path d="M 0.557 1.208 a 0.692 0.692 0 0 1 0.651 -0.651 L 6.886 0.178 a 0.776 0.776 0 0 1 0.811 0.682 a 0.691 0.691 0 0 1 -0.643 0.78 l -4.129 0.275 l 6.292 6.292 c 0.293 0.293 0.305 0.757 0.026 1.036 c -0.28 0.279 -0.743 0.267 -1.036 -0.026 L 1.915 2.925 L 1.64 7.054 a 0.691 0.691 0 0 1 -0.78 0.643 a 0.776 0.776 0 0 1 -0.682 -0.811 l 0.379 -5.678 Z"></path>
                  </svg>
                </a >
                <a onClick={() => {setDirection('to top')}}>
                  <svg width='10' height='12' xmlns="http://www.w3.org/2000/svg">
                    <path d="M 4.54 0.177 a 0.692 0.692 0 0 1 0.92 0 l 4.283 3.747 a 0.776 0.776 0 0 1 0.091 1.056 a 0.691 0.691 0 0 1 -1.006 0.096 L 5.714 2.351 v 8.899 c 0 0.414 -0.32 0.75 -0.714 0.75 c -0.394 0 -0.714 -0.336 -0.714 -0.75 V 2.351 L 1.172 5.076 A 0.691 0.691 0 0 1 0.166 4.98 a 0.776 0.776 0 0 1 0.091 -1.056 L 4.539 0.177 Z"></path>
                  </svg>
                </a>
                <a onClick={() => {setDirection('to top right')}}>
                  <svg width='10' height='10' xmlns="http://www.w3.org/2000/svg">
                    <path d="M 8.792 0.557 a 0.692 0.692 0 0 1 0.651 0.651 l 0.379 5.678 a 0.776 0.776 0 0 1 -0.682 0.811 a 0.691 0.691 0 0 1 -0.78 -0.643 l -0.275 -4.129 l -6.292 6.292 c -0.293 0.293 -0.757 0.305 -1.036 0.026 C 0.478 8.963 0.49 8.5 0.783 8.207 l 6.292 -6.292 l -4.129 -0.275 a 0.691 0.691 0 0 1 -0.643 -0.78 a 0.776 0.776 0 0 1 0.811 -0.682 l 5.678 0.379 Z"></path>
                  </svg>
                </a>
                <a onClick={() => {setDirection('to left')}}>
                  <svg width='12' height='10' xmlns="http://www.w3.org/2000/svg">
                    <path d="M 0.177 5.46 a 0.692 0.692 0 0 1 0 -0.92 L 3.924 0.256 A 0.776 0.776 0 0 1 4.98 0.166 a 0.691 0.691 0 0 1 0.096 1.006 L 2.351 4.286 h 8.899 c 0.414 0 0.75 0.32 0.75 0.714 c 0 0.394 -0.336 0.714 -0.75 0.714 H 2.351 l 2.725 3.114 a 0.691 0.691 0 0 1 -0.096 1.006 a 0.776 0.776 0 0 1 -1.056 -0.091 L 0.177 5.461 Z"></path>
                  </svg>
                </a>
                <a onClick={() => {setDirection('to center')}}>
                  <svg width='11' height='14' xmlns="http://www.w3.org/2000/svg">
                    <circle stroke='#3D4853' stroke-width='1.46'cx='5.5'cy= '5.5' r='4.5' fill= 'none' 
                      fill-rule='evenodd'>
                    </circle>
                  </svg>
                </a >
                <a oonClick={() => {setDirection('to right')}}>
                  <svg width='12' height='10' xmlns="http://www.w3.org/2000/svg">
                    <path d="M 11.823 4.54 a 0.692 0.692 0 0 1 0 0.92 L 8.076 9.744 a 0.776 0.776 0 0 1 -1.056 0.091 a 0.691 0.691 0 0 1 -0.096 -1.006 l 2.725 -3.114 H 0.75 C 0.336 5.714 0 5.394 0 5 c 0 -0.394 0.336 -0.714 0.75 -0.714 h 8.899 L 6.924 1.172 A 0.691 0.691 0 0 1 7.02 0.166 a 0.776 0.776 0 0 1 1.056 0.091 l 3.747 4.282 Z"></path>
                  </svg>
                </a>
                <a onClick={() => {setDirection('to bottom left')}}>
                  <svg width='10' height='10' xmlns="http://www.w3.org/2000/svg">
                    <path d="M 1.208 9.443 a 0.692 0.692 0 0 1 -0.651 -0.651 L 0.178 3.114 a 0.776 0.776 0 0 1 0.682 -0.811 a 0.691 0.691 0 0 1 0.78 0.643 l 0.275 4.129 L 8.207 0.783 C 8.5 0.49 8.964 0.478 9.243 0.757 c 0.279 0.28 0.267 0.743 -0.026 1.036 L 2.925 8.085 l 4.129 0.275 c 0.402 0.027 0.69 0.376 0.643 0.78 a 0.776 0.776 0 0 1 -0.811 0.682 l -5.678 -0.379 Z"></path>
                  </svg>
                </a>
                <a onClick={() => {setDirection('to bottom')}}>
                  <svg width='10' height='12' xmlns="http://www.w3.org/2000/svg">
                    <path d="M 5.46 11.823 a 0.692 0.692 0 0 1 -0.92 0 L 0.256 8.076 A 0.776 0.776 0 0 1 0.166 7.02 a 0.691 0.691 0 0 1 1.006 -0.096 l 3.114 2.725 V 0.75 c 0 -0.414 0.32 -0.75 0.714 -0.75 c 0.394 0 0.714 0.336 0.714 0.75 v 8.899 l 3.114 -2.725 a 0.691 0.691 0 0 1 1.006 0.096 a 0.776 0.776 0 0 1 -0.091 1.056 l -4.282 3.747 Z"></path>
                  </svg>
                </a>
                <a onClick={() => {setDirection('to bottom right')}}>
                  <svg width='10' height='12' xmlns="http://www.w3.org/2000/svg">
                    <path d="M 9.443 8.792 a 0.692 0.692 0 0 1 -0.651 0.651 l -5.678 0.379 a 0.776 0.776 0 0 1 -0.811 -0.682 a 0.691 0.691 0 0 1 0.643 -0.78 l 4.129 -0.275 L 0.783 1.793 C 0.49 1.5 0.478 1.036 0.757 0.757 C 1.037 0.478 1.5 0.49 1.793 0.783 l 6.292 6.292 l 0.275 -4.129 a 0.691 0.691 0 0 1 0.78 -0.643 c 0.403 0.046 0.709 0.41 0.682 0.811 l -0.379 5.678 Z"></path>
                  </svg>
                </a>
              </span>
            </div>

           <button class='buttoms' onClick={ () => setShowColorPicker(showColorPicker => !showColorPicker)}>
              {showColorPicker ? ' Close color Picker ' : ' Pick a color '}
           </button> 
           <button class='buttoms' onClick={ () => setShowColorPicker(showColorPicker => !showColorPicker)}>
              {showColorPicker ? ' Close color Picker ' : ' Pick a color '}
           </button> 

           <span class='options'>Colors</span>

           {
              showColorPicker &&  (<ChromePicker 
              color={color1} 
              onChange={updatedColor => setColor1(updatedColor.hex)}
              />)
           }
          {
               showColorPicker && (<ChromePicker 
               color={color2}
               onChange={updatedColor => setColor2(updatedColor)}
              />)
            }  


            <button class='buttoms' onClick={color1}>click me</button>
            <button class='buttoms' onClick={color2}>click me</button>
            <h3> You picked {color1}</h3>
            <h3> You picked {color2}</h3>



        </div> 
      
        <div class='gradient' style={{
          background: `linear-gradient(${direction}, ${color1}, ${color2})`
        }}>
        </div>


    </div>
  );
}


