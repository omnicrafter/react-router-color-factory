import { useParams, Link } from "react-router-dom";
import "./ColorPage.css";

const ColorPage = () => {
  const { color } = useParams();

  return (
    <div className="ColorPage-container">
      <h1 style={{ color: color }}>You have chosen the color {color}</h1>
      <Link to="/">
        <button>Go Back to Home</button>
      </Link>
    </div>
  );
};

export default ColorPage;
