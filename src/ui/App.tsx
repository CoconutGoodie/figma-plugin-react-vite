import { useState } from "react";
import { LogicalSide } from "@common/logical-side";
import { ReactComponent as ReactLogo } from "./assets/react.svg";
import viteLogo from "./assets/vite.svg?inline";
import figmaLogo from "./assets/figma.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://www.figma.com" target="_blank">
          <img src={figmaLogo} className="logo figma" alt="Figma logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <ReactLogo className="logo react" title="React logo" />
        </a>
      </div>
      <h1>Figma + Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more{" "}
        {LogicalSide.current.getName()}
      </p>
    </div>
  );
}

export default App;
