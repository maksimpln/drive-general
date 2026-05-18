import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppRoot } from "@app";
import "@assets/style/main.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRoot />
  </StrictMode>,
);
