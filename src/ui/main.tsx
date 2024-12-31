import { PLUGIN, UI } from "@common/networkSides";
import { UI_CHANNEL } from "@ui/app.network";
import { Networker } from "monorepo-networker";
import React from "react";
import ReactDOM from "react-dom/client";

async function bootstrap() {
  Networker.initialize(UI, UI_CHANNEL);

  UI_CHANNEL.emit(PLUGIN, "hello", ["Hey there, Figma!"]);

  const App = (await import("./app")).default;

  const rootElement = document.getElementById("root") as HTMLElement;
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

bootstrap();
