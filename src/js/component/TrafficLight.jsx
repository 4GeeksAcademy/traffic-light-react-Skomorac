import React from "react";

const TrafficLight = ({ colors, selectedColor, setSelectedColor }) => {
  return (
    <div className="trafficBox">
      {colors.map((color) => (
        <div
          key={color}
          onClick={() => setSelectedColor(color)}
          className={`light ${color}${selectedColor === color ? " glow" : ""}`}
          style={{ background: color }}
        ></div>
      ))}
    </div>
  );
};

export default TrafficLight;