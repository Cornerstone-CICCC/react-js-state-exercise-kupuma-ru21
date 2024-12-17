import { useState } from "react";

export function LightToggle() {
  const [isLightsOn, setIsLightsOn] = useState(false);
  const changeBackgroundColor = () => {
    setIsLightsOn((prev) => !prev);
  };
  return (
    <div
      style={{
        height: "500px",
        width: "500px",
        backgroundColor: isLightsOn ? "white" : "black",
      }}
    >
      <button onClick={changeBackgroundColor} type="button">
        Toggle Lights
      </button>
    </div>
  );
}
