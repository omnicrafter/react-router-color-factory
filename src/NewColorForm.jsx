import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewColorForm.css";

const NewColorForm = ({ addColor }) => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(inputValue);
    navigate("/");
  };

  return (
    <div className="NewColorForm-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="New Color Here"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewColorForm;
