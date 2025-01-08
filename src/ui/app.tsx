import { PLUGIN } from "@common/networkSides";
import { UI_CHANNEL } from "@ui/app.network";
import { Button } from "@ui/components/Button";
import { Networker, NetworkError } from "monorepo-networker";
import { useEffect, useState } from "react";

import figmaLogo from "@ui/assets/figma.png";
import ReactLogo from "@ui/assets/react.svg?component";
import viteLogo from "@ui/assets/vite.svg?url";

import "@ui/styles/main.scss";

function App() {
  const [count, setCount] = useState(0);
  const [pingCount, setPingCount] = useState(0);

  useEffect(() => {
    UI_CHANNEL.subscribe("ping", () => {
      setPingCount((cnt) => cnt + 1);
    });
  }, []);

  return (
    <div className="homepage">
      <div>
        <a href="https://www.figma.com" target="_blank">
          <img src={figmaLogo} className="logo figma" alt="Figma logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <ReactLogo className="logo react" title="React logo" />
        </a>
      </div>

      <h1>Figma + Vite + React</h1>

      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <Button
          onClick={async () => {
            const response = await UI_CHANNEL.request(PLUGIN, "ping", []);
            console.log("Response:", response);
          }}
          style={{ marginInlineStart: 10 }}
        >
          ping the other side
        </Button>
        <Button
          onClick={() => {
            console.log("Create a rectangle, please!");
            UI_CHANNEL.emit(PLUGIN, "createRect", [100, 100]);
          }}
          style={{ marginInlineStart: 10 }}
        >
          create square
        </Button>
        <Button
          onClick={async () => {
            try {
              const result = await UI_CHANNEL.request(
                PLUGIN,
                "exportSelection",
                []
              );
              console.log("Export: ", { result });
            } catch (err) {
              if (err instanceof NetworkError) {
                console.log("Couldn't export..", { message: err.message });
              }
            }
          }}
          style={{ marginInlineStart: 10 }}
        >
          export selection
        </Button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs" style={{ fontSize: 11 }}>
        {PLUGIN.name} pinged us {pingCount} time(s).
      </p>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more <br />
        <span>(Current logical side = {Networker.getCurrentSide().name})</span>
      </p>
    </div>
  );
}

export default App;
