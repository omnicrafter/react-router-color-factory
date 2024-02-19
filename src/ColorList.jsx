import { useState } from "react";
import { Link } from "react-router-dom";
import "./ColorList.css";

const ColorList = ({ colors }) => {
  const [listColors, setListColors] = useState(colors);

  return (
    <div className="ColorList-container">
      <h3>Color Options:</h3>
      <ul>
        {listColors.map((color) => {
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
