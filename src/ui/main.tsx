import { initializeNetwork } from "@common/network/init";
import { NetworkMessages } from "@common/network/messages";
import { NetworkSide } from "@common/network/sides";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

initializeNetwork(NetworkSide.UI);

NetworkMessages.HELLO_PLUGIN.send({ text: "Hey there, Figma!" });

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
