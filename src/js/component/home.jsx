import React, { useState, useEffect } from "react";
import TrafficLight from "./TrafficLight";
import AddLightButton from "./AddLightButton";

const Home = () => {
  const [colors, setColors] = useState(["green", "orange", "red"]);
  const [selectedColor, setSelectedColor] = useState("green");
  const [isAutoCycling, setIsAutoCycling] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isAutoCycling) {
      intervalId = setInterval(() => {
        const currentIndex = colors.indexOf(selectedColor);
        const nextIndex = (currentIndex + 1) % colors.length;
        setSelectedColor(colors[nextIndex]);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isAutoCycling, selectedColor, colors]);

  const toggleAutoCycle = () => {
    setIsAutoCycling(!isAutoCycling);
  };

  const addLight = (color) => {
    setColors([...colors, color]);
  };

  return (
    <div>
      <TrafficLight colors={colors} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
      <AddLightButton addLight={addLight} />

      <button className="cycleButton" onClick={toggleAutoCycle}>
        {isAutoCycling ? "Stop Automatic Cycle" : "Start Automatic Cycle"}
      </button>
    </div>
  );
};

export default Home;