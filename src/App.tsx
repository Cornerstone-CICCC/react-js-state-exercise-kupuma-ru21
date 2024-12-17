import { ClickCounter } from "./components/ClickCounter";
import { LightToggle } from "./components/LightToggle";
import { LottoNumbers } from "./components/LottoNumbers";

function App() {
  return (
    <>
      <h2>Light Toggle</h2>
      <LightToggle />
      <div>Change this background color using the style attribute</div>

      <h2>Lotto Numbers</h2>
      <LottoNumbers />
      <div className="output"></div>

      <h2>Click Counter</h2>
      <ClickCounter />
      <div className="output"></div>
    </>
  );
}

export default App;
