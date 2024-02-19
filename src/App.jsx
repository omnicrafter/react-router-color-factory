import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import NavBar from "./NavBar";
import ColorList from "./ColorList";
import ColorPage from "./ColorPage";
import NewColorForm from "./NewColorForm";

function App() {
  const [listColors, setListColors] = useState(["red", "blue", "yellow"]);

  const addColor = (color) => {
    setListColors((prevColors) => [color, ...prevColors]);
  };

  const NotFoundRedirect = () => {
    const navigate = useNavigate();

    useEffect(() => {
      navigate("/");
    }, [navigate]);

    return null;
  };

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <ColorList colors={listColors} />
              </>
            }
          ></Route>
          <Route path="/colors/:color" element={<ColorPage />}></Route>
          <Route
            path="/colors/new"
            element={<NewColorForm addColor={addColor} />}
          ></Route>

          <Route path="*" element={<NotFoundRedirect />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
