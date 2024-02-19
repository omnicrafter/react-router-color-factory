import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import ColorList from "./ColorList";
import ColorPage from "./ColorPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <ColorList colors={["red", "blue", "yellow"]} />
              </>
            }
          ></Route>
          <Route path="/colors/:color" element={<ColorPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
