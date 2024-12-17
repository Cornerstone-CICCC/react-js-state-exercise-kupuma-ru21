import { useState } from "react";

export function ClickCounter() {
  const [count, setCount] = useState(0);
  const changeBackgroundColor = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <button onClick={changeBackgroundColor} type="button">
        Click Counter
      </button>
      <div>{count}</div>
    </>
  );
}
