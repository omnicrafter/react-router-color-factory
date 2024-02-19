import { useState } from "react";
import { Link } from "react-router-dom";
import "./ColorList.css";

const ColorList = ({ colors }) => {
  return (
    <div className="ColorList-container">
      <h3>Color Options:</h3>
      <ul>
        {colors.map((color) => {
          return (
            <Link to={`/colors/${color}`}>
              <li>{color}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default ColorList;
