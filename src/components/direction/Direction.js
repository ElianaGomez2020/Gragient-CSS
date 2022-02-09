import React from "react";
import {
  MdNorthWest,
  MdNorth,
  MdNorthEast,
  MdOutlineWest,
  MdOutlineCircle,
  MdOutlineEast,
  MdOutlineSouthWest,
  MdOutlineSouth,
  MdOutlineSouthEast,
} from "react-icons/md";
import { ButtonDirection } from "../button-direction/ButtonDirection";
import "./styles.css";

export const Direction = (props) => {
  return (
    <div className="grid-container">
      <ButtonDirection
        function={props.direction}
        move={props.type === "linear-gradient" ? "to top left" : "left top"}
      >
        <MdNorthWest size={17} />
      </ButtonDirection>

      <ButtonDirection
        function={props.direction}
        move={props.type === "linear-gradient" ? "to top" : "center top"}
      >
        <MdNorth size={17} />
      </ButtonDirection>

      <ButtonDirection
        function={props.direction}
        move={props.type === "linear-gradient" ? "to top right" : "right top"}
      >
        <MdNorthEast size={17} />
      </ButtonDirection>

      <ButtonDirection
        function={props.direction}
        move={props.type === "linear-gradient" ? "to left" : "left center"}
      >
        <MdOutlineWest size={17} />
      </ButtonDirection>

      {props.type === "linear-gradient" && (
        <ButtonDirection
          function={props.direction}
          move={props.type === "linear-gradient" ? "to center" : "left center"}
        ></ButtonDirection>
      )}

      {props.type === "-webkit-radial-gradient" && (
        <ButtonDirection
          function={props.direction}
          move={
            props.type === "radial-gradient" ? "center" : "at center center"
          }
        >
          <MdOutlineCircle size={15} />
        </ButtonDirection>
      )}

      <ButtonDirection
        function={props.direction}
        move={props.type === "linear-gradient" ? "to right" : "right center"}
      >
        <MdOutlineEast size={17} />
      </ButtonDirection>

      <ButtonDirection
        function={props.direction}
        move={
          props.type === "linear-gradient" ? "to bottom left" : "left bottom"
        }
      >
        <MdOutlineSouthWest size={17} />
      </ButtonDirection>

      <ButtonDirection
        function={props.direction}
        move={props.type === "linear-gradient" ? "to bottom" : "center bottom"}
      >
        <MdOutlineSouth size={17} />
      </ButtonDirection>

      <ButtonDirection
        function={props.direction}
        move={
          props.type === "linear-gradient" ? "to bottom right" : "right bottom"
        }
      >
        <MdOutlineSouthEast size={17} />
      </ButtonDirection>
    </div>
  );
};
