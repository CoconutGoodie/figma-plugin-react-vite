import { LogicalSide } from "@common/logical-side";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

LogicalSide.current = LogicalSide.UI;

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
