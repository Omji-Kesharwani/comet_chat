import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Partners } from "./screens/Partners";
import "./index.css";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Partners />
  </StrictMode>,
);
