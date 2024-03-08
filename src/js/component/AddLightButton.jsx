import React, { useState } from "react";

const AddLightButton = ({ addLight }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Enter color" value={inputValue} onChange={handleInputChange} />
      <button onClick={() => addLight(inputValue)}>Add Light</button>
    </div>
  );
};

export default AddLightButton;
