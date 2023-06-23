import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";

function App() {
  const [optional1, setOptional1] = useState(false);
  const [optional2, setOptional2] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <nav>
        <div>Button</div>
        <StyledUpperButtons>
          <button>Large Primary Button &gt;</button>
          <button>Medium</button>
          <button>Small</button>
        </StyledUpperButtons>
        <StyledUpperButtons>
          <button>Large Negative Button 🔔</button>
          <button>Medium</button>
          <button>Small</button>
        </StyledUpperButtons>
      </nav>
      <body>
        Input
        <div>
          <label>name</label>
          <input />
          <label>price</label>
          <input />
          <button>save</button>
        </div>
        <div>
          Modal
          <div>
            <button>open modal</button>
            <button>open modal</button>
          </div>
        </div>
      </body>
      <footer>
        Select
        <div>
          <select value={selectedOption} onChange={handleSelectChange}>
            <option value='Option 1'>Option 1</option>
            <option value='Option 2'>Option 2</option>
            <option value='Option 3'>Option 3</option>
          </select>
          <select value={selectedOption} onChange={handleSelectChange}>
            <option value='Option 1'>Option 1</option>
            <option value='Option 2'>Option 2</option>
            <option value='Option 3'>Option 3</option>
          </select>
        </div>
      </footer>
    </div>
  );
}

const StyledUpperButtons = styled.div`
  display: flex;
  flex-direction: row;
  margin: "100px";
`;

export default App;
