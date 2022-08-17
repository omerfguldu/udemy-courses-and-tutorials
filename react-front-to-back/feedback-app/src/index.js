import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import App from "./App";

const rootEl = document.getElementById("root");
const root = createRoot(rootEl);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
