import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavBar-container">
      <h2>Welcome to the color factory.</h2>
      <Link to="./colors/new">
        <h1>
          <u>Add a color</u>
        </h1>
      </Link>
    </div>
  );
};

export default NavBar;
